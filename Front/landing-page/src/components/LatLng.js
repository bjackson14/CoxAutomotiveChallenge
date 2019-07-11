import React from 'react';

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