const weather = new Weather(weatherLocation)
const ui = new UI()

const form = document.querySelector('#change-city')
form.addEventListener('submit', changeCityWeather)

function changeCityWeather(event){
	const city = document.querySelector('#city-name').value
   weather.changeCity(city)
	getWeather()
	document.querySelector('#city-name').value = ''
	event.preventDefault()

// get city weather
function getWeather() {
   weather.getWeather()
  .then(data => {
  	ui.drawWeather(data)
  }) 
  .catch(error => console.log(error));
}

getWeather()
