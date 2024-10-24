import moment from "moment";
import WeatherIcon from "./WeatherIcon";

function HourlyForecast({ weatherData, weatherAPI }) {
	const markup = weatherData.hourly.time.map((fd, i) => {
		return (
			<li
				key={i}
				className={`flex flex-col text-center justify-center items-center py-2 px-2 border-[3px] border-black rounded-2xl min-w-[90px] bg-${weatherAPI.translateWeatherCodeToColor(
					weatherData.hourly.weather_code[i]
				)}`}
			>
				<span className="font-normal text-[10px] text-center">
					{weatherAPI.translateWeatherCodeToText(
						weatherData.hourly.weather_code[i]
					)}
				</span>
				<span className="temp font-bold text-[20px] text-center">
					{Math.round(weatherData.hourly.temperature_2m[i])}°
				</span>
				<span className="icon">
					<WeatherIcon weatherCode={weatherData.hourly.weather_code[i]} />
				</span>
				<span className="date text-sm font-bold mt-1">
					{moment(fd).format("hA")}
				</span>
				<span className="date--day text-xs font-normal mt-1">
					{moment(fd).format("dddd")}
				</span>
			</li>
		);
	});
	const forecastDays = markup;

	return (
		<div className="hourly-forecast w-11/12 sm:w-[400px] mb-5">
			<div className="hourly-forecast__header flex min-w-full justify-between items-center mt-2">
				<h3 className="tex font-extrabold text-md">Hourly Forecast</h3>
			</div>

			<ul className="hourly-forecast__cards flex justify-between mt-2 gap-3 overflow-auto">
				{forecastDays}
			</ul>
		</div>
	);
}

export default HourlyForecast;
