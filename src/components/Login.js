import React from "react";
import { Button } from "@material-ui/core";
import "../css/Login.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Login = () => {
	const [{}, dispatch] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<div className="login__container">
				<img
					src="https://i.pinimg.com/originals/e4/77/f2/e477f24d6465646acd93736e03c0bf3a.png"
					alt=""
				/>
				<div className="login__text">
					<h3>Sign in to whats app</h3>
				</div>
				<Button onClick={signIn}>Sign In With Google</Button>
			</div>
		</div>
	);
};

export default Login;
