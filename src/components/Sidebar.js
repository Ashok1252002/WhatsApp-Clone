import React from "react";
import SidebarChat from "./SidebarChat";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import "../css/Sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar />
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<SearchOutlined />
					<input placeholder="Search or start new chat" type="text" />
				</div>
			</div>
			<div className="sidebar__chats">
				<SidebarChat addNewChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</div>
		</div>
	);
};

export default Sidebar;
