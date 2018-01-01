import document from "document";
import { Barometer } from "barometer";

console.log("Altimeter starting!");

// Fetch UI elements we will need to change
var altitudeLabel = document.getElementById("altitude");
var pressureLabel = document.getElementById("pressure");

// Initialize the UI with some values
altitudeLabel.text = "-";

// Create a new instance of the Barometer
var bar = new Barometer();

bar.onreading = function() {
  altitudeLabel.text = altitudeFromPressure(bar.pressure / 100) + " ft";
  pressureLabel.text = Math.round(bar.pressure / 100) + " hPa";
}

// Begin monitoring the sensor
bar.start();

// Converts pressure in millibars to altitude in feet
// https://en.wikipedia.org/wiki/Pressure_altitude
function altitudeFromPressure(pressure) {
  return (1 - (pressure/1013.25)**0.190284)*145366.45;
}
