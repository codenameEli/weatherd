import moment from 'moment';
import { useEffect, useState } from 'react';

function DailySummary({weatherAPI, reverseGeocodeAPI}) {
	const [summary, setSummary] = useState(null);
	const [sunriseSunset, setSunriseSunset] = useState(null);

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
                const summary = `Today has a high of ${Math.round(results.daily.temperature_2m_max[0])}° & a low of ${Math.round(results.daily.temperature_2m_min[0])}°.`
								setSummary(summary);
                
                const sunriseSunset = `Sunrise is at ${moment(results.daily.sunrise[0]).format('LT')} and sunset is at ${moment(results.daily.sunset[0]).format('LT')}.`
								setSunriseSunset(sunriseSunset);
							});
						}
				})
			});
    }
  }, [weatherAPI, reverseGeocodeAPI]);

	return <div className='daily-summary text-left max-w-6xl'>
    <h3 className='tex font-extrabold text-md'>Daily Summary</h3>
    <p className=''>{summary}</p>
    <p className=''>{sunriseSunset}</p>
  </div>;
}

export default DailySummary;
