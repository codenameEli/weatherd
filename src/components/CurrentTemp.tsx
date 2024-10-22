function CurrentTemp({weatherData}) {
	const temp = Math.round(weatherData.current.temperature_2m);

	return <div className='current-temp tracking-tighter text-[200px] leading-snug mt-[-30px] flex'>{temp}°</div>;
}

export default CurrentTemp;