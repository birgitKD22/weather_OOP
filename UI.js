class UI {
	constructor(){
		this.description = document.querySelector('#description')
		this.temp = document.querySelector('#temp')
		this.city = document.querySelector('#location')
	}

	drawWeather( data ) {
  		let celcius = Math.round(parseFloat(data.main.temp)-273.15); 
  		let description = data.weather[0].description;
  
  		this.description.innerHTML = description;
  		this.temp.innerHTML = celcius + '&deg;';
  		this.city.innerHTML = data.name;
	}
}
