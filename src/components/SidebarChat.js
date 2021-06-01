import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "../css/SidebarChat.css";

const SidebarChat = ({ addNewChat }) => {
	const [avtar, setAvtar] = useState("");

	useEffect(() => {
		setAvtar(Math.floor(Math.random() * 10000));
	}, []);

	const createChat = () => {
		const roomName = prompt("Please enter name for chat");
		if (roomName) {
			// diplay data
		}
	};

	return !addNewChat ? (
		<div className="sidebarChat">
			<Avatar
				src={`https://avatars.dicebear.com/api/human/${avtar}.svg`}
			/>
			<div className="sidebarChat__info">
				<h2>Room name</h2>
				<p>Last message...</p>
			</div>
		</div>
	) : (
		<div onClick={createChat} className="sidebarChat">
			<h2>Add new chat</h2>
		</div>
	);
};

export default SidebarChat;
