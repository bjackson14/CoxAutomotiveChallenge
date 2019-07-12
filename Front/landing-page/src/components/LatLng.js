import React from 'react';

fetch("https://api.weather.gov/points/<lat_value>,<long_value>")
	.then(res => res.json())
	.then(json => console.log(json));
	
const LatLng = () => (
	<center>
		<form>
			Latitude:<input type="text" name="lat" />
			<br />
			Longitude:<input type="text" name="lng" />
			<br />
			<input type="submit" name="latlng" />
		</form>
	</center>
)

export default LatLng;