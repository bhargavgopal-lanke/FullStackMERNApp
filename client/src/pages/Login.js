import React, {useState} from 'react';
import axios from 'axios';

function Login() {

	const [ username, setUsername ] = useState("");
	const [password, setPassword] = useState("");

	const login = () => {
		const data = {username: username, password: password};
		axios.post("http://localhost:3001/auth/login", data).then((response)=> {
			console.log(response.data);
		});
	};	

	return(
		<div className="login-main">
			<div className="container">
				<input 
				type="text" 
				className="form-control mb-3"
				onChange={(event)=> {
					setUsername(event.target.value);
				}} />
				<input 
				type="password"
				className="form-control mb-3"
				onChange={(event)=> {
					setPassword(event.target.value);
				}}
				 />
				

				<button className="btn btn-primary" onClick={login}>Login</button>
			</div>
		</div>
		)
}


export default Login;