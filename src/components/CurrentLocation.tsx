import { useEffect, useState } from 'react';

function CurrentLocation({reverseGeocodeAPI}) {
	const [location, setLocation] = useState(null);

	useEffect(() => {
    if (
			reverseGeocodeAPI &&
			navigator.geolocation
		) {
			navigator.geolocation.getCurrentPosition((position) => {
				const location = reverseGeocodeAPI.get(position.coords.latitude, position.coords.longitude);

				location.then((data) => {
						if (
							data.results &&
							data.results.length > 0
						) {
							setLocation(data.results[0].formatted_address)
						}
				})
			});
    }
  }, [reverseGeocodeAPI]);

		return (
			<div className="current-location">
				<h1 className="text-2xl font-extrabold">{location}</h1>
			</div>
		);
}

export default CurrentLocation;
