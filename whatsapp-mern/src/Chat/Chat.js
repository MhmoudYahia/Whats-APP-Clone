import "./Chat.css";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import emojibar from "emojibar";
import { useState, useEffect } from "react";
const Chat = ({ messages }) => {
  const [inputMess, setInputMess] = useState("");


  const handleKeyPress = (event) => {
     if (event.keyCode === 13) {
             document.getElementById("send").click();

     }
  };

                    //handelKeyDown event on react 
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const hendelInput = (e) => {
    setInputMess(e.target.value);
  };
  const handelSend = async (e) => {
    e.preventDefault();

    if (inputMess !== "") {
      const res = await fetch(`http://localhost:1444/api/v1/messages/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "mahmoud",
          messageText: inputMess,
          timeStamp: new Date().toUTCString(),
          received: false,
        }),
      });

      const { status } = await res.json();
      if (status === true) {
        setInputMess("");
        setTimeout(() => {
          document
            .getElementById("chat-body")
            .scrollTo(0, document.getElementById("chat-body").scrollHeight);
        },500);
      }
    }
  };
  return (
    <div className="chat">
      <div className="chat-header">
        <div className="left">
          <Avatar />
        </div>
        <div className="mid">
          <span>Mahmoud Yahia</span>
          <span>last seen at 5:50</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <AttachFileIcon className="icon" />
          <MoreVertIcon className="icon" />
        </div>
      </div>
      <div className="chat-body" id="chat-body">
        {messages.map(({ name, messageText, timeStamp, received }) => (
          <p className={`chat_message ${received ? `chat_receiver` : ""}`}>
            <div className="message-name">{name}</div>
            <div className="message-body">{messageText}</div>
            <div className="message-time">{timeStamp}</div>
          </p>
        ))}
      </div>
      <div className="footer-chat">
        <SentimentSatisfiedAltIcon />
        <input
          value={inputMess}
          onChange={hendelInput}
          type="text"
          placeholder="Type Your Message"
        />
        <div onClick={handelSend} id="send">
          <SendIcon className="sendIcon" />
        </div>

        {/* <MicIcon /> */}
      </div>
    </div>
  );
};

export default Chat;
