const express = require("express");
const cors = require("cors");

const {
  inchToCm,
  cmToInch,
  celciusToFahrenheit,
  fahrenheitToCelsius,
  poundsToKgs,
  kgsToPounds,
} = require("./converters.js");

const app = express();
app.use(
  cors({
    origin: "*", // Replace with your frontend's URL
  }),
);

const convertUnits = (rawValue, conversor) => {
  const value = parseFloat(rawValue);
  const result = conversor(value);
  return { originalValue: value, result };
};

app.get("/inch_to_cm/:inch", (req, res) => {
  res.send(convertUnits(req.params.inch, inchToCm));
});

app.get("/cm_to_inch/:inch", (req, res) => {
  res.send(convertUnits(req.params.inch, cmToInch));
});

app.get("/fahrenheit_to_celsius/:fahrenheit", (req, res) => {
  res.send(convertUnits(req.params.fahrenheit, fahrenheitToCelsius));
});

app.get("/celsius_to_fahrenheit/:celsius", (req, res) => {
  res.send(convertUnits(req.params.celsius, celciusToFahrenheit));
});

app.get("/pounds_to_kgs/:pounds", (req, res) => {
  res.send(convertUnits(req.params.pounds, poundsToKgs));
});

app.get("/kgs_to_pounds/:kgs", (req, res) => {
  res.send(convertUnits(req.params.kgs, kgsToPounds));
});

app.listen(3000, () => {
  console.log("API Started. Listening on port 3000");
});
