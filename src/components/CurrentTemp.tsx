import { useEffect, useState } from 'react';

function CurrentTemp({weatherAPI, reverseGeocodeAPI}) {
	const [temp, setTemp] = useState(null);

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
								setTemp(Math.round(results.current.temperature_2m));
							});
						}
				})
			});
    }
  }, [weatherAPI, reverseGeocodeAPI]);

	return <div className='current-temp tracking-tighter text-[200px] leading-snug mt-[-30px] flex'>{temp}°</div>;
}

export default CurrentTemp;