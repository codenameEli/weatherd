import { useEffect, useState } from "react"
import CurrentCondition from "./components/CurrentCondition"
import CurrentDate from "./components/CurrentDate"
import CurrentLocation from "./components/CurrentLocation"
import CurrentTemp from "./components/CurrentTemp"
import DailyMetrics from "./components/DailyMetrics"
import DailySummary from "./components/DailySummary"
import WeeklyForecast from "./components/WeeklyForecast"
import ReverseGeocodeAPI from "./services/ReverseGeocodeAPI"
import WeatherAPI from "./services/WeatherAPI"

const reverseGeocodeAPI = new ReverseGeocodeAPI('AIzaSyAKnSRAB-vHYHrlgwvPje8IGlb05h1SAog');
const weatherAPI = new WeatherAPI('ab1272725b276e1dae8ab5a260d08d82');

function App() {
  const [color, setColor] = useState(null);

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
								setColor(weatherAPI.translateWeatherCodeToColor(results.current.weather_code));
							});
						}
				})
			});
    }
  }, [weatherAPI, reverseGeocodeAPI]);

  return (
    <div className={`bg-${color} items-center flex flex-col text-center py-6 px-6 min-w-screen min-h-screen`}>
     <CurrentLocation reverseGeocodeAPI={reverseGeocodeAPI}/>
     <CurrentDate />
     <CurrentCondition reverseGeocodeAPI={reverseGeocodeAPI} weatherAPI={weatherAPI} />
     <CurrentTemp reverseGeocodeAPI={reverseGeocodeAPI} weatherAPI={weatherAPI} /> 
     <DailySummary reverseGeocodeAPI={reverseGeocodeAPI} weatherAPI={weatherAPI}/>
     <DailyMetrics reverseGeocodeAPI={reverseGeocodeAPI} weatherAPI={weatherAPI}/>
     <WeeklyForecast reverseGeocodeAPI={reverseGeocodeAPI} weatherAPI={weatherAPI}/>
    </div>
  )
}

export default App
