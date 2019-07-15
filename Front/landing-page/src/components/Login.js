import React from 'react';
import './Login.css';

const Login = (props) => (
	<div id="box">
		<form>
			<table>
				<tbody>
					<tr>
						<td colSpan="2"><center><h1>{props.message}</h1><h1 id="error">{props.error}</h1></center></td>
					</tr>
					<tr>
						<td>Username:</td>
						<td><input type="text" id="username" /></td>
					</tr>
					<tr>
						<td>Password:</td>
						<td><input type="text" id="password" /></td>
					</tr>
					<tr>
						<td colSpan="2"><center><button type="button" onClick={() => props.onClick(document.getElementById('username').value, document.getElementById('password').value)}>Submit</button></center></td>
					</tr>
				</tbody>
			</table>
		</form>
	</div>
)

export default Login;