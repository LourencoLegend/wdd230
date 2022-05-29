/* f = 35.74 + .6215t - 35.75s^.16 + .4275ts^.16, 
f = wind chill factor
t = average air temperature
s = wind speed in miles per hour
*/
function findWindChill() {
    var wind = 5; /*document.getElementById("windSpeed").textContent*/
    var temperature = 35; /*document.getElementById("highTemp").textContent*/
    var windChill =
      (35.74 +
      (0.6215 * temperature)) -
      (35.75 * Math.pow(wind,0.16)) +
      (0.4275 * temperature * Math.pow(wind,0.16));
    console.log(Math.round(windChill * 10) / 10);
  }