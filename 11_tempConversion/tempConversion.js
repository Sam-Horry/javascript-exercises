const convertToCelsius = function (num) {
  var converted = (num - 32) * 5 / 9;
  converted = Math.round(converted * 10) / 10;
  return converted;
};

const convertToFahrenheit = function (num) {
  var converted = num * 9 / 5 + 32;
  converted = Math.round(converted * 10) / 10;
  return converted;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
