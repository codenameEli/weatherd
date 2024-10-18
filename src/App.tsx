import CurrentCondition from "./components/CurrentCondition"
import CurrentDate from "./components/CurrentDate"
import CurrentLocation from "./components/CurrentLocation"
import CurrentTemp from "./components/CurrentTemp"
import DailyMetrics from "./components/DailyMetrics"
import DailySummary from "./components/DailySummary"
import Nav from "./components/Nav"
import WeeklyForecast from "./components/WeeklyForecast"
import ReverseGeocodeAPI from "./services/ReverseGeocodeAPI"
import WeatherAPI from "./services/WeatherAPI"

const reverseGeocodeAPI = new ReverseGeocodeAPI('AIzaSyAKnSRAB-vHYHrlgwvPje8IGlb05h1SAog');
const weatherAPI = new WeatherAPI('ab1272725b276e1dae8ab5a260d08d82');

function App() {

  return (
    <div className='bg-[#ffe142] items-center flex flex-col text-center py-6 px-6 w-screen h-screen'>
     {/* <Nav /> */}
     <CurrentLocation reverseGeocodeAPI={reverseGeocodeAPI}/>
     <CurrentDate />
     <CurrentCondition reverseGeocodeAPI={reverseGeocodeAPI} weatherAPI={weatherAPI} />
     <CurrentTemp reverseGeocodeAPI={reverseGeocodeAPI} weatherAPI={weatherAPI} /> 
     <DailySummary />
     <DailyMetrics />
     <WeeklyForecast />
    </div>
  )
}

export default App
