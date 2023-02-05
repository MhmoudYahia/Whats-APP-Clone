import React from 'react'
import './Sidebar.css'
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from './SidebarChat';
const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="left">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
          <div className="right">
            {" "}
            <ChatIcon className="icon" />
            <DonutLargeIcon className="icon" />
            <MoreVertIcon className="icon" />
          </div>
        </div>
        <div className="search-sidebar">
          <SearchOutlined />
          <input type="text" placeholder="search" />
        </div>
        <div className="sidebar-chats-info">
          <h2 style={{textAlign:'center'}}>Add New Chat</h2>
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div>
      </div>
    );
}
 
export default Sidebar;