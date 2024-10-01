// Measurement
const inchToCm = (inches) => inches * 2.54;
const cmToInch = (cm) => cm / 2.54;

// Temperature
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const celciusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

// Weight
const poundsToKgs = (pounds) => pounds * 0.453592;
const kgsToPounds = (kgs) => kgs / 0.453592;

module.exports = {
  inchToCm,
  cmToInch,
  celciusToFahrenheit,
  fahrenheitToCelsius,
  poundsToKgs,
  kgsToPounds,
};
