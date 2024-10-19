import { EyeDropperIcon } from '@heroicons/react/20/solid'
import { EyeIcon } from '@heroicons/react/24/outline'
import { QueueListIcon } from '@heroicons/react/24/solid'

import { useEffect, useState } from 'react';

function DailyMetrics({weatherAPI, reverseGeocodeAPI}) {
	const [wind, setWind] = useState(null);
	const [humidity, setHumidity] = useState(null);
	const [description, setDescription] = useState(null);

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
                setWind( Math.round(results.wind.speed) );
                setHumidity( Math.round(results.main.humidity) );
                setDescription( results.weather[0].main );
							});
						}
				})
			});
    }
  }, [weatherAPI, reverseGeocodeAPI]);

	return <ul className='daily-metrics bg-black py-4 px-4 rounded-2xl justify-around flex sm:w-[400px] w-[80vw] mt-6 mb-6'>
  <li className='daily-metric flex flex-col justify-center text-center items-center text-[#ffe142]'>
    <QueueListIcon className='w-10 h-10 mb-3' />
    <span className='font-bold text-lg'>{wind}mph</span>
    <span className='font-thin text-md'>Wind</span>
  </li>

  <li className='daily-metric flex flex-col justify-center text-center items-center text-[#ffe142]'>
    <EyeDropperIcon className='w-10 h-10 mb-3' />
    <span className='font-bold text-lg'>{humidity}%</span>
    <span className='font-thin text-md'>Humidity</span>
  </li>

  <li className='daily-metric flex flex-col justify-center text-center items-center text-[#ffe142]'>
    <EyeIcon className='w-10 h-10 mb-3' />
    <span className='font-bold text-lg'>{description}</span>
    <span className='font-thin text-md'>Looks</span>
  </li>
</ul>
}

export default DailyMetrics;
