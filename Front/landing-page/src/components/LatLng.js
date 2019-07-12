import React from 'react';
import './LatLng.css';
	
const LatLng = (props) => (
	<div id="box">
		<form>
			<table>
				<tbody>
					<tr>
						<td colspan="2"><center><h1 id="message">{props.message}</h1><h1 id="error">{props.error}</h1></center></td>
					</tr>
					<tr>
						<td>Latitude:</td>
						<td><input type="text" id="lat" /></td>
					</tr>
					<tr>
						<td>Longitude:</td>
						<td><input type="text" id="lng" /></td>
					</tr>
					<tr>
						<td colspan="2"><center><button type="button" onClick={() => props.onClick(document.getElementById('lat').value, document.getElementById('lng').value)}>Submit</button></center></td>
					</tr>
					<tr>
						<td colspan="2"><h2>{props.cityState}</h2></td>
					</tr>
				</tbody>
			</table>
		</form>
	</div>
)

export default LatLng;