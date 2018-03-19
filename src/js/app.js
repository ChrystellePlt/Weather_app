//require the request package
const request = require('request');

let apiKey = 'd8230ded1f1b2b62ceb2af8d3046693d';
let city = 'paris';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}` // Open Weather App defaults its temperature to Kelvin. units=metric was added to use Celsius

//pass in a url and request returns a callback function with 3 arguments
request(url, function (err, response, body) {
  //check for an error
  if(err){
    console.log('error:', error);
  // if no error, log the entire contents of the response body
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`
    console.log(message);
  }
})
