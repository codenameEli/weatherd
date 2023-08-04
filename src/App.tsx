import CurrentCondition from "./components/CurrentCondition"
import CurrentDate from "./components/CurrentDate"
import CurrentLocation from "./components/CurrentLocation"
import CurrentTemp from "./components/CurrentTemp"
import DailyMetrics from "./components/DailyMetrics"
import DailySummary from "./components/DailySummary"
import Nav from "./components/Nav"
import WeeklyForecast from "./components/WeeklyForecast"

function App() {

  return (
    <div className='bg-[#ffe142] items-center flex flex-col text-center py-6 px-6'>
     <Nav />
     <CurrentLocation />
     <CurrentDate />
     <CurrentCondition />
     <CurrentTemp /> 
     <DailySummary />
     <DailyMetrics />
     <WeeklyForecast />
    </div>
  )
}

export default App
