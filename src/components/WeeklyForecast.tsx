import {WiDaySunny, WiDaySunnyOvercast} from "weather-icons-react";

import { useEffect, useState } from 'react';
import moment from "moment";

function getIcon(weatherCode: number) {
	let icon;

	switch (weatherCode) {
		case (0 | 1):
			icon =  <WiDaySunny size={38} className="animate-[spin_7s_linear_infinite] mt-1 mb-1" />
			break;

		case (2 | 3):
			icon =  <WiDaySunnyOvercast size={38} className="animate-[spin_7s_linear_infinite] mt-1 mb-1" />
			break;
	
		default:
			break;
	}

	return icon;
}

function WeeklyForecast({weatherAPI, reverseGeocodeAPI}) {
	const [forecastDays, setForecastDays] = useState(null);

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
								const markup = results.daily.time.map((fd, i) => {
									const weatherCode = weatherAPI.translateWeatherCodeToText(results.daily.weather_code[i]);

									return <li key={i} className={`flex flex-col text-center justify-center items-center py-3 px-5 border-[3px] border-black rounded-2xl min-w-[90px] bg-${weatherAPI.translateWeatherCodeToColor(results.daily.weather_code[i])}`}>
										<span className="font-normal text-[10px] text-center">{weatherAPI.translateWeatherCodeToText(results.daily.weather_code[i])}</span> 
										<span className="temp font-bold text-[20px] text-center">{Math.round(results.daily.temperature_2m_max[i])}°</span>
										<span className="icon">
										<WiDaySunny size={38} className="animate-[spin_7s_linear_infinite] mt-1 mb-1" />
										</span>
										<span className="date text-sm font-bold mt-1">{moment(fd).format('DD MMM')}</span>
									</li>
								})
                setForecastDays(markup)
							});
						}
				})
			});
    }
  }, [weatherAPI, reverseGeocodeAPI]);

	return <div className="weekly-forecast max-w-[400px]">
	<div className="weekly-forecast__header flex min-w-full justify-between items-center mt-2">
		<h3 className="tex font-extrabold text-md">Weekly Forecast</h3>
	</div>

	<ul className="weekly-forecast__cards flex justify-between mt-2 gap-3 overflow-auto">
		{forecastDays}
	</ul>
</div>
}

export default WeeklyForecast;
