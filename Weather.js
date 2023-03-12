class Weather{
	constructor(city){
		this.key = '8c5970635a367c3807587c04fbc0f958';
		this.city = city;
	}
async getWeather(){
	const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
	const responceData = await responce.json()
	return responceData
	}
