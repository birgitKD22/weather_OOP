class Weather{
	constructor(city){
		this.key = '77f97b598769bf8861004c74e30ebbba';
		this.city = city;
	}

	async getWeather(){
		const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responceData = await responce.json()
		return responceData
	}

	changeCity(city){
		this.city = city;
	}
}
