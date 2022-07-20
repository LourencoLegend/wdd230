// select HTML elements to edit
const currentTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#textImg");
const captionDesc = document.querySelector("#tempConditions");
const windSpeed = document.querySelector("#windSpeedH4");
const windChill = document.querySelector("#windChillH4");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Sao Paulo,SP,BR&units=imperial&appid=47b6a434ebf8169e3efc3593184ee675";

async function fetchWeather() {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();

      displayWeather(data);
    } else {
      throw Error(await res.text());
    }
  } catch (err) {
    console.log(err);
  }
}

fetchWeather();

function displayWeather(data) {
  fixTemp = data.main.temp.toFixed(0);

  currentTemp.textContent = `${fixTemp}°F`;

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;
  const speed = data.wind.speed;

  const words = desc.split(" ");

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = addCaps(words);

  windSpeed.textContent = `${speed} mph`;
  windChill.textContent = getWindChill(speed, fixTemp);
}

function addCaps(words) {
  const capitalized = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  return capitalized;
}

// Calculate the Wind Chill Factor
function getWindChill(mph, temp) {
  // Set value of windChill to "N/A"
  let windChill = "N/A";

  // Only calculate wind chill if wind is strong enough and temp is low enough
  if (mph > 3.0 && temp <= 50) {
    windChill = (
      35.74 +
      0.6215 * temp -
      35.75 * mph ** 0.16 +
      0.4275 * temp * mph ** 0.16
    ).toFixed(2);

    windChill = `${windChill} °F`;
  }

  return windChill;
}