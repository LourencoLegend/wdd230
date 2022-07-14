// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const wind_speed = document.getElementById("wind");
var wind_chill = document.getElementById("wind_chill");
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Provo&units=imperial&appid=26e68319cfd447b4254c6a56af730573'

function displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    if (currentTemp <= 50 && wind_speed > 3) {
      let wind_chill_math = (35.74 + (0.6215 * currentTemp))-(35.75 * Math.pow(wind_speed,0.16)) + (0.4275*currentTemp*Math.pow(wind_speed,0.16));   
      let wind_chilltemp = Math.round((wind_chill_math + Number.EPSILON)*10)/100;
      wind_chill.textContent = `Wind Chill: ${wind_chilltemp}`;
    } else {
        wind_chill.textContent = "Wind Chill: N/A";
    }

    wind_speed.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

