const express = require("express");
const app = express();
const { default: mongoose } = require("mongoose");

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1552120",
  key: "b1e8618195c14e4b1d2b",
  secret: "9fbe6c93c354a88c651e",
  cluster: "eu",
  useTLS: true,
});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });

const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions)); // Use this after the variable declaration

//connect with front
app.use(express.static("../whatsapp-mern"));

const routes = require("./Routes");
app.use("/api/v1", routes);

//error handeler
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong",
  });
});
const connectDB = require("./DBConnect");


// realtime pusher
const db = mongoose.connection;

db.once("open", () => {
  const msgCollection = db.collection("messagecontents");
  const changeStreem = msgCollection.watch();

  changeStreem.on("change", (change) => {
    console.log("change accured", change);
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        messageText: messageDetails.messageText,
        timeStamp: messageDetails.timeStamp,
        received: messageDetails.received,
      });
    } else {
      console.log("error triggering pusher");
    }
  });
});

// config .env file
require("dotenv").config();
const port = process.env.PORT || 5000;

// checker on monogoDB
const start = async () => {
  try {
    await connectDB(process.env.URL_CONNECT);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
