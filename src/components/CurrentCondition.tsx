import { useEffect, useState } from 'react';

function CurrentCondition({weatherAPI, reverseGeocodeAPI}) {
	const [condition, setCondition] = useState(null);

	useEffect(() => {
    if (
			weatherAPI &&
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
							weatherAPI.get(position.coords.latitude, position.coords.longitude).then((results) => {
								console.log(results)
								setCondition(results.weather[0].main);
							});
						}
				})
			});
    }
  }, [weatherAPI, reverseGeocodeAPI]);

	return <div className="current-condition text-lg font-bold mt-3">{condition}</div>;
}

export default CurrentCondition;
