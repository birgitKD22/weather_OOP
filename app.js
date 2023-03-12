const weather = new Weather('initCity')
const ui = new UI()
const ls = new LS()
const initCity = ls.getCity()

const form = document.querySelector('#change-city')
form.addEventListener('submit', changeWeather)

function changeWeather(event){
	const city = document.querySelector('#city-name').value
  	weather.changeCity(city)
	ls.setCity(city)
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
