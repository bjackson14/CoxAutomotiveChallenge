import React from 'react';
import './App.css';
import Login from './Login';
import LatLng from './LatLng';

class App extends React.Component {
	constructor() {
		super();
		
		// Bind "this" to function so fetch will see setState function
		this.onLoginSubmit = this.onLoginSubmit.bind(this);
		
		this.state = {
			// Controlls which component to load and props for component
			page: <div><Login onClick={this.onLoginSubmit} error=""/></div>,
		};
	}
	
	// Runs when submit button on login page is clicked
	onLoginSubmit(username, password) {
		// Checks if username and password was entered
		if (username !== '' && password !== '') {
			fetch('http://localhost:8080/getLogin/' + username)
				.then(res => res.json())
				.then(credentials => {
					// Checks if password returned matches password enetered
					// Checks for error which will return if username does not exist
					if (credentials.password === password || credentials.status !== 404)
						this.setState({page: <div><LatLng /></div>});
					else
						this.setState({page: <div><Login onClick={this.onLoginSubmit} error="Login Error"/></div>});
						
				});
			// End fetch function
		}
		else
			this.setState({page: <div><Login onClick={this.onLoginSubmit} error="Login Error"/></div>});
	}
	
	// Renders appropriate page
	render() {
		return(
			this.state.page
		);
	}
}

export default App;
