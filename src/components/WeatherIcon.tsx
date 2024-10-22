import {
	WiDaySunny,
	WiNightPartlyCloudy,
	WiDaySunnyOvercast,
	WiFog,
	WiRainMix,
	WiRain,
	WiSnow,
	WiShowers,
	WiThunderstorm,
	WiHail
} from "weather-icons-react";

function getIcon(weatherCode = 0) {
	switch (weatherCode) {
		case 2:
			return (
				<WiNightPartlyCloudy
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 3:
			return (
				<WiDaySunnyOvercast
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 45:
			return (
				<WiFog
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 48:
			return (
				<WiFog
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 51:
			return (
				<WiRainMix
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 53:
			return (
				<WiRainMix
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 55:
			return (
				<WiRainMix
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 56:
			return (
				<WiRainMix
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 57:
			return (
				<WiRainMix
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 61:
			return (
				<WiRain
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 63:
			return (
				<WiRain
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 65:
			return (
				<WiRain
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 66:
			return (
				<WiRain
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 67:
			return (
				<WiRain
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 71:
			return (
				<WiSnow
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 73:
			return (
				<WiSnow
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 75:
			return (
				<WiSnow
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 77:
			return (
				<WiSnow
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 80:
			return (
				<WiShowers
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 81:
			return (
				<WiShowers
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 82:
			return (
				<WiShowers
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 85:
			return (
				<WiSnow
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 86:
			return (
				<WiSnow
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 95:
			return (
				<WiThunderstorm
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 96:
			return (
				<WiHail
					size={38}
					className="mt-1 mb-1"
				/>
			);

		case 97:
			return (
				<WiHail
					size={38}
					className="mt-1 mb-1"
				/>
			);

		default:
			return (
				<WiDaySunny
					size={38}
					className="animate-[spin_7s_linear_infinite] mt-1 mb-1"
				/>
			);

			break;
	}
}

function WeatherIcon({ weatherCode = 0 }) {
	return (
		getIcon(weatherCode)
	);
}

export default WeatherIcon;
