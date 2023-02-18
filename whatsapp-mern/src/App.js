import "./App.css";
import Sidebar from "./SideBar/Sidebar";
import Chat from "./Chat/Chat";
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
function App() {
  const [messages, setMessages] = useState([]);

  //get all messages
  const getMessages = async () => {
    try {
      const dataRes = await fetch(`http://localhost:1444/api/v1/messages/sync`);
      const { data } = await dataRes.json();
      setMessages(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  //get any new message  and add it
  useEffect(() => {
    var pusher = new Pusher("b1e8618195c14e4b1d2b", {
      cluster: "eu",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMess) {
      setMessages([...messages, newMess]);
    });

    console.log(messages);
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="App">
      <main>
        <Sidebar />
        <Chat messages={messages}/>
      </main>
    </div>
  );
}

export default App;
