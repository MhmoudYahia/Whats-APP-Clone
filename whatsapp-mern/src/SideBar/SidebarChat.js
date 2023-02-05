
import './SidebarChat.css'
import Avatar from "@mui/material/Avatar";

const SidebarChat = () => {
    return (
      <div className="sidebar-chat">
        <div className="left">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <div className="right">
          <span>Name</span>
          <span>Message</span>
        </div>
      </div>
    );
}
 
export default SidebarChat;