import "./Chat.css";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import MicIcon from "@mui/icons-material/Mic";
const Chat = () => {
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
      <div className="chat-body">
        <p className="chat_sender">
          <span className="message-body">
            mesffffffffffffffffffffffffffffffffsage!
          </span>
          <span className="message-time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_reciever">
          {" "}
          <span className="message-body">
            messffffffffffffffffffffffffffffage!
          </span>
          <span className="message-time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_sender">
          <span className="message-body">message!</span>
          <span className="message-time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_sender">
          <span className="message-body">message!</span>
          <span className="message-time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_reciever">
          {" "}
          <span className="message-body">message!</span>
          <span className="message-time">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="footer-chat">
        <SentimentSatisfiedAltIcon />
        <input type="text" placeholder="Type Your Message"/>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
