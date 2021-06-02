import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import React from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import "./App.css";
import { useStateValue } from "./StateProvider";

function App() {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className="app">
			{user ? (
				<div className="app__body">
					<Router>
						<Sidebar />
						<Switch>
							<Route path="/rooms/:roomId">
								<Chat />
							</Route>
							<Route path="/">
								<Chat />
							</Route>
						</Switch>
					</Router>
				</div>
			) : (
				<h1>
					<Login />
				</h1>
			)}
		</div>
	);
}

export default App;
