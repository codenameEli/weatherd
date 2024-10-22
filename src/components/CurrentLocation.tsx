function CurrentLocation({ location }) {
	if (!location) return;

	let address;
	
	if ( location.results[0].address_components.length > 0 ) {
		address = location.results[0].address_components[0].long_name;
	}

	return (
		<div className="current-location">
			<h1 className="text-2xl font-extrabold">{address}</h1>
		</div>
	);
}

export default CurrentLocation;
