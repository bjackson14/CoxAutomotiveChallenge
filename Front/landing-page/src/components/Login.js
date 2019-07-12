import React from 'react';

const Login = (props) => (
	<center>
		<h1>{props.error}</h1>
		<h1>Login</h1>
		<form>
			Username:<input type="text" id="username" />
			<br />
			Password:<input type="text" id="password" />
			<br />
			<button type="button" onClick={() => props.onClick(document.getElementById('username').value, document.getElementById('password').value)}>Submit</button>
		</form>
	</center>
)

export default Login;