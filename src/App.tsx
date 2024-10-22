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

import { ReactComponent as Logo } from './assets/weatherd-logo.svg';

const reverseGeocodeAPI = new ReverseGeocodeAPI('AIzaSyAKnSRAB-vHYHrlgwvPje8IGlb05h1SAog');
const weatherAPI = new WeatherAPI('ab1272725b276e1dae8ab5a260d08d82');

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [color, setColor] = useState(null);
  const [loading, setLoading] = useState(true);

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
              setLocation(data);

              
							weatherAPI.get(position.coords.latitude, position.coords.longitude).then((results) => {
                setWeatherData(results);

								setColor(weatherAPI.translateWeatherCodeToColor(results.current.weather_code));

                setLoading(false);
							});
						}
				})
			});
    }
  }, [weatherAPI, reverseGeocodeAPI]);

  if (loading) {
    return (
      <div className="splashscreen bg-white flex justify-center items-center min-h-screen w-screen">
        <div className="splashscreen__logo max-w-32 animate-pulse">
          <img src="./weatherd-logo.svg" />
        </div>
      </div>
    );
  } else {
    return (
      <div className={`bg-${color} items-center flex flex-col text-center py-6 px-6 min-w-screen min-h-screen`}>
      <CurrentLocation location={location}/>
      <CurrentDate />
      <CurrentCondition weatherData={weatherData} weatherAPI={weatherAPI} />
      <CurrentTemp weatherData={weatherData} /> 
      <DailySummary weatherData={weatherData}/>
      <DailyMetrics weatherData={weatherData}/>
      <WeeklyForecast weatherData={weatherData} weatherAPI={weatherAPI}/>
     </div>
    );
  }
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
