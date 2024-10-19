import moment from "moment";

class WeatherAPI {
	key: string;
	units: string;
	weatherCodeLegend: {code: number, text: string, color: string}[];

	constructor(key: string) {
			this.key = key;
      this.units = 'imperial';
      this.weatherCodeLegend = [
        {
          code: 0,
          text: 'Clear',
          color: 'slate-150'
        },
        {
          code: 1,
          text: 'Mostly Clear',
        color: 'slate-250'
        },
        {
          code: 2,
          text: 'Partly Cloudy',
        color: 'slate-350'
        },
        {
          code: 3,
          text: 'Overcast',
        color: 'slate-450'
        },
        {
          code: 45,
          text: 'Fog',
        color: 'grey-350'
        },
        {
          code: 48,
          text: 'Icy Fog',
        color: 'grey-550'
        },
        {
          code: 51,
          text: 'L.Drizzle',
        color: 'azure-200'
        },
        {
          code: 53,
          text: 'Drizzle',
        color: 'azure-300'
        },
        {
          code: 55,
          text: 'H.Drizzle',
        color: 'azure-400'
        },
        {
          code: 56,
          text: 'L.Icy Drizzle',
        color: 'indigo-200'
        },
        {
          code: 57,
          text: 'Icy Drizzle',
        color: 'indigo-400'
        },
        {
          code: 61,
          text: 'L.Rain',
        color: 'blue-350'
        },
        {
          code: 63,
          text: 'Rain',
        color: 'blue-450'
        },
        {
          code: 65,
          text: 'H.Rain',
        color: 'blue-550'
        },
        {
          code: 66,
          text: 'L.Icy Rain',
        color: 'violet-350'
        },
        {
          code: 67,
          text: 'Icy Rain',
        color: 'violet-550'
        },
        {
          code: 71,
          text: 'L.Snow',
        color: 'fuchsia-350'
        },
        {
          code: 73,
          text: 'Snow',
        color: 'fuchsia-450'
        },
        {
          code: 75,
          text: 'H.Snow',
        color: 'fuchsia-550'
        },
        {
          code: 77,
          text: 'Snow Grains',
        color: 'purple-150'
        },
        {
          code: 80,
          text: 'L.Showers',
        color: 'azure-250'
        },
        {
          code: 81,
          text: 'Showers',
        color: 'azure-350'
        },
        {
          code: 82,
          text: 'H.Showers',
        color: 'azure-450'
        },
        {
          code: 85,
          text: 'L.Snow Showers',
        color: 'purple-250'
        },
        {
          code: 86,
          text: 'Snow Showers',
          color: 'purple-450'
        },
        {
          code: 95,
          text: 'Thunder Storm',
          color: 'pink-350'
        },
        {
          code: 96,
          text: 'T. Storm + L.Hail',
          color: 'pink-450'
        },
        {
          code: 99,
          text: 'T. Storm + Hail',
          color: 'pink-550'
        }
      ]
	}

  translateWeatherCodeToText(code) {
    let text;

    this.weatherCodeLegend.forEach((item) => {
      if (item.code == code) {
        text = item.text;
      }
    });

    return text;
  }

  translateWeatherCodeToColor(code) {
    let color;

    this.weatherCodeLegend.forEach((item) => {
      if (item.code == code) {
        color = item.color;
      }
    });

    return color;
  }

  getID(lat: number, lng: number) {
    return `weather_${lat}_${lng}`;
  }

  getExipreID(lat: number, lng: number) {
    return `expire_weather_${lat}_${lng}`;
  }

  setCache(lat: number, lng: number, payload: any) {
    localStorage.setItem(`${this.getID(lat, lng)}`, JSON.stringify(payload));
    this.setExpiry(lat,lng);
  }

  getCached(lat: number, lng: number) {
    let cached = localStorage.getItem(`${this.getID(lat, lng)}`);

    if (cached != 'undefined') cached = JSON.parse(cached)

    return cached;
  }

  setExpiry(lat: number, lng: number) {
    const currentDate = moment(new Date());
    
    currentDate.add('5', 'minutes');

    localStorage.setItem(`${this.getExipreID(lat, lng)}`, currentDate.toLocaleString());
  }

  getExpiry(lat: number, lng: number) {
    return localStorage.getItem(`${this.getExipreID(lat, lng)}`);
  }

  isExpired(lat: number, lng: number) {
    const cached = this.getExpiry(lat, lng);

    if (!cached) return true;

    const expiredDate = moment(cached);
    const currentDate = moment(new Date());

    if ( expiredDate.diff(currentDate, 'minutes') < 0 ) {
      return true;
    } else {
      return false;
    }
  }

	async query(lat: number, lng: number) {
    let results;

    await results;

    // TODO Chunk out what we are requesting here to get only what we need. Also may want to pass in additional params to add on through get()
		await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m,wind_direction_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York`)
      .then(res => res.json())
      .then((data) => {
        results = data
      })
      .catch((message) => {
        console.error(message);
      })

    return results
	}

  async get(lat: number, lng: number): Promise<{ any: any; }> {
    let cached = this.getCached(lat,lng);

    if (
      !cached ||
      this.isExpired(lat,lng)
    ) {
      const data = await this.query(lat, lng);

      console.log(data)

      this.setCache(lat,lng,data);
      
      cached = data;
    }

    return cached
	}
}

export default WeatherAPI;