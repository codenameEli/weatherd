import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/solid";

function WeeklyForecast() {
	return (
		<div className="weekly-forecast max-w-[400px]">
			<div className="weekly-forecast__header flex min-w-full justify-between items-center mt-2">
				<h3 className="tex font-extrabold text-md">Weekly Forecast</h3>
				<ArrowLongRightIcon className="w-10 h-10" />
			</div>

			<ul className="weekly-forecast__cards flex justify-between mt-2">
				<li className="flex flex-col text-center justify-center items-center py-3 px-5 border-[3px] border-black rounded-2xl">
					<span className="temp font-bold text-[20px] text-center">26°</span>
					<span className="icon">
						<SunIcon className="animate-[spin_7s_linear_infinite] w-7 h-10" />
					</span>
          <span className="date text-sm font-bold mt-1">21 Jan</span>
				</li>

        <li className="flex flex-col text-center justify-center items-center py-3 px-5 border-[3px] border-black rounded-2xl">
					<span className="temp font-bold text-[20px] text-center">26°</span>
					<span className="icon">
						<SunIcon className="animate-[spin_7s_linear_infinite] w-7 h-10" />
					</span>
          <span className="date text-sm font-bold mt-1">21 Jan</span>
				</li>

        <li className="flex flex-col text-center justify-center items-center py-3 px-5 border-[3px] border-black rounded-2xl">
					<span className="temp font-bold text-[20px] text-center">26°</span>
					<span className="icon">
						<SunIcon className="animate-[spin_7s_linear_infinite] w-7 h-10" />
					</span>
          <span className="date text-sm font-bold mt-1">21 Jan</span>
				</li>

        <li className="flex flex-col text-center justify-center items-center py-3 px-5 border-[3px] border-black rounded-2xl">
					<span className="temp font-bold text-[20px] text-center">26°</span>
					<span className="icon">
						<SunIcon className="animate-[spin_7s_linear_infinite] w-7 h-10" />
					</span>
          <span className="date text-sm font-bold mt-1">21 Jan</span>
				</li>
			</ul>
		</div>
	);
}

export default WeeklyForecast;
