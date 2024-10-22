import { useEffect, useState } from 'react';

function CurrentCondition({weatherData, weatherAPI}) {
	const [condition, setCondition] = useState(null);

	useEffect(() => {
    if (
			weatherAPI &&
			weatherData
		) {
			setCondition( weatherAPI.translateWeatherCodeToText(weatherData.current.weather_code) );
    }
  }, []);

	return <div className="current-condition text-lg font-bold mt-3">{condition}</div>;
}

export default CurrentCondition;
