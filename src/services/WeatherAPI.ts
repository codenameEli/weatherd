import moment from "moment";

class WeatherAPI {
	key: string;
	units: string;

	constructor(key: string) {
			this.key = key;
      this.units = 'imperial'
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

		await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=${this.key}`)
      .then(res => res.json())
      .then((data) => {
        results = data
      })
      .catch((message) => {
        console.error(message);
      })

    return results
	}

  async get(lat: number, lng: number) {
    let cached = this.getCached(lat,lng);

    if (
      !cached ||
      this.isExpired(lat,lng)
    ) {
      const data = await this.query(lat, lng);

      this.setCache(lat,lng,data);

      cached = data;
    }

    return cached
	}
}

export default WeatherAPI;