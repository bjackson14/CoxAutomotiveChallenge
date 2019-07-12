import React from 'react';
	
const LatLng = (props) => (
	<center>
		<h1>{props.message}</h1>
		<form>
			Latitude:<input type="text" id="lat" />
			<br />
			Longitude:<input type="text" id="lng" />
			<br />
			<button type="button" onClick={() => props.onClick(document.getElementById('lat').value, document.getElementById('lng').value)}>Submit</button>
		</form>
		<h2>{props.cityState}</h2>
	</center>
)

export default LatLng;