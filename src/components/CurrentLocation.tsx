function CurrentLocation({ location }) {
	if (!location) return;
	
	const address = location.results[0].formatted_address;

	return (
		<div className="current-location">
			<h1 className="text-2xl font-extrabold">{address}</h1>
		</div>
	);
}

export default CurrentLocation;
