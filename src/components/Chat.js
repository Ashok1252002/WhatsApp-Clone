import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";
import React, { useEffect, useState } from "react";
import "../css/Chat.css";

const Chat = () => {
	const [avtar, setAvtar] = useState("");

	useEffect(() => {
		setAvtar(Math.floor(Math.random() * 10000));
	}, []);

	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar
					src={`https://avatars.dicebear.com/api/human/${avtar}.svg`}
				/>
				<div className="chat__headerInfo">
					<h3>Room Name</h3>
					<p>Last seen ...</p>
				</div>
				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			<div className="chat__body"></div>
			<div className="chat__footer"></div>
		</div>
	);
};

export default Chat;
