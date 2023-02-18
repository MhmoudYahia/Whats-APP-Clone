const mongoose =require( "mongoose");

const WhatsAppSchema = mongoose.Schema({
  name: String,
  timeStamp: String,
  messageText: String,
  received: Boolean,
});

module.exports= mongoose.model("messagecontents", WhatsAppSchema);