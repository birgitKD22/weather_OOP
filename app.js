const weather = new Weather(weatherLocation)
const ui = new UI()

// get city weather
function getWeather() {
   weather.getWeather()
  .then(data => {
  	ui.drawWeather(data)
  }) 
  .catch(error => console.log(error));
}

getWeather()
