const temperature = document.getElementById("temp");
const wind_speed = document.getElementById("wind");
var wind_chill = document.getElementById("wind_chill");
//const temperature = 51;
//const wind_speed = 2


if (temperature < 50 || wind_speed > 3) {
    wind_chill.textContent = "N/A!!";
} else {
    wind_chill.textContent = (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(wind_speed,0.16)) + (0.4275*temperature*Math.pow(wind_speed,0.16));
}