import { WiWindy, WiBarometer, WiRaindrops } from "weather-icons-react";

function DailyMetrics({weatherData}) {
	const wind = Math.round(weatherData.current.wind_speed_10m);
  const humidity = Math.round(weatherData.current.relative_humidity_2m);
  const precipitation = weatherData.current.precipitation;

	return <ul className='daily-metrics bg-black py-4 px-4 rounded-2xl justify-around flex sm:w-[400px] w-[80vw] mt-6 mb-6'>
  <li className='daily-metric flex flex-col justify-center text-center items-center text-white'>
    <WiWindy size={24} color='#fff' className='w-10 h-10 mb-3' />
    <span className='font-bold text-lg'>{wind}mph</span>
    <span className='font-thin text-md'>Wind</span>
  </li>

  <li className='daily-metric flex flex-col justify-center text-center items-center text-white'>
    <WiBarometer size={24} color='#fff' className='w-10 h-10 mb-3' />
    <span className='font-bold text-lg'>{humidity}%</span>
    <span className='font-thin text-md'>Humidity</span>
  </li>

  <li className='daily-metric flex flex-col justify-center text-center items-center text-white'>
    <WiRaindrops size={24} className='w-10 h-10 mb-3' />
    <span className='font-bold text-lg'>{precipitation}%</span>
    <span className='font-thin text-md'>Precipitation</span>
  </li>
</ul>
}

export default DailyMetrics;
