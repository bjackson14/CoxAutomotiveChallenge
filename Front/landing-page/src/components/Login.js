import React from 'react';

const Login = () => (
	<center>
		<h1>Login</h1>
		<form>
			Username:<input type="text" name="username" />
			<br />
			Password:<input type="text" name="password" />
			<br />
			<input type="submit" name="login" />
		</form>
	</center>
)

export default Login;