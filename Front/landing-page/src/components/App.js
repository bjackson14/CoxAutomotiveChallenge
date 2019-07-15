import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import LatLng from './LatLng';

class App extends React.Component {
	constructor() {
		super();
		
		this.state = {
			login: <Login onClick={this.onLoginSubmit} message="Login"/>,
			latlng: <Login onClick={this.onLoginSubmit} message="Login"/>,
		};
	}
	
	// Runs when submit button on login page is clicked
	onLoginSubmit = (username, password) => {
		// Checks if username and password was entered
		if (username !== '' && password !== '') {
			fetch('http://localhost:8080/getLogin/' + username)
				.then(res => res.json())
				.then(credentials => {
					// Checks if password returned matches password enetered
					// Checks for error which will return if username does not exist
					if (credentials.password === password || credentials.status !== 404) {
						this.setState({latlng: <LatLng onClick={this.onLatLngSubmit} message="Success" />});
						window.location = '/latlng';
					}
					else
						this.setState({login: <Login onClick={this.onLoginSubmit} error="Login Error"/>});
						
				});
			// End fetch function
		}
		else
			this.setState({login: <Login onClick={this.onLoginSubmit} error="Login Error"/>});
	}
	
	// Runs when submit button is on latlng page is clicked
	onLatLngSubmit = (lat, lng) => {
		if (lat !== '' && lng !== '') {
			fetch('https://api.weather.gov/points/' + lat + ',' + lng)
				.then(res => res.json())
				.then(location => {
					var cityState = location.properties.relativeLocation.properties.city + ', ' + location.properties.relativeLocation.properties.state;
					this.setState({page: <div><LatLng onClick={this.onLatLngSubmit} message="Success" cityState={cityState}/></div>});
				});
		}
		else
			this.setState({page: <div><LatLng onClick={this.onLatLngSubmit} message="" error="Input Error" cityState=""/></div>});
	}
	
	// Renders appropriate page
	render() {
		return(
			<BrowserRouter>
				<main>
					<Route exact path="/" render={() => (
						this.state.login
					)} />
					<Route path="/latlng" render={() => (
						this.state.latlng
					)} />
				</main>
			</BrowserRouter>
		);
	}
}

export default App;
