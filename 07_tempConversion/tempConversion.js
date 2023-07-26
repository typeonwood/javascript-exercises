const convertToCelsius = function(tempFahrenheit) {
  let celsius = (tempFahrenheit - 32) / 9 * 5
  let roundCelsius = Math.round(celsius * 10) / 10
  return roundCelsius
};  

const convertToFahrenheit = function(tempCelsius) {
  let fahrenheit = tempCelsius / 5 * 9 + 32
  let roundFahrenheit = Math.round(fahrenheit * 10) / 10
  return roundFahrenheit
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
