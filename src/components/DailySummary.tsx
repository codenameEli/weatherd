import moment from 'moment';

function DailySummary({weatherData}) {
	const summary = `Today has a high of ${Math.round(weatherData.daily.temperature_2m_max[0])}° & a low of ${Math.round(weatherData.daily.temperature_2m_min[0])}°.`
	const sunriseSunset = `Sunrise is at ${moment(weatherData.daily.sunrise[0]).format('LT')} and sunset is at ${moment(weatherData.daily.sunset[0]).format('LT')}.`

	return <div className='daily-summary text-left max-w-6xl'>
    <h3 className='tex font-extrabold text-md'>Daily Summary</h3>
    <p className=''>{summary}</p>
    <p className=''>{sunriseSunset}</p>
  </div>;
}

export default DailySummary;
