import React from 'react';
import './App.css';

function App() {
	return (
	<div className="App">
		<header className="App-header">
			<h1>Login</h1>
			<form>
				Username:<input type="text" name="username" />
				<br />
				Password:<input type="text" name="password" />
				<br />
				<center><input type="submit" onClick="showLogin=false;"/></center>
			</form>
		</header>
	</div>
	);
}

export default App;
