// TODO remove old caches when new ones are set

class ReverseGeocodeAPI {
	key: string;
  resultType: string;

	constructor(key: string) {
			this.key = key;
      this.resultType = 'political|locality|postal_code';
	}

  getID(lat: number, lng: number) {
    return `reverse_geocode_${lat}_${lng}`;
  }

  setCache(lat: number, lng: number, payload: any) {
    localStorage.setItem(`${this.getID(lat,lng)}`, JSON.stringify(payload));
  }

  getCached(lat: number, lng: number): {results: any} {
    const cached = JSON.parse(localStorage.getItem(`${this.getID(lat,lng)}`));

    return cached;
  }

	async query(lat: number, lng: number) {
    let results;

    await results;

		await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${this.key}&result_type=${this.resultType}`)
      .then(res => res.json())
      .then((data) => {
        results = data
      })
      .catch((message) => {
        console.error(message);
      })

    return results
	}

  async get(lat: number, lng: number): Promise<{ results: any; }> {
    // let cached = this.getCached(lat,lng);

    // if (!cached) {
      const data = await this.query(lat, lng);

      // this.setCache(lat,lng,data);

      // cached = data;
    // }

    return data
	}
}

export default ReverseGeocodeAPI;