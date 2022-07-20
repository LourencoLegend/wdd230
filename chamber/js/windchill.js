const lat = 44.6584;
const lng = -111.1005;

const params = "airTemperature,windSpeed";

let weatherData = {};

// const url = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
//   headers: {
//     'Authorization': 'example-api-key'
//   };

// async function getWindSpeed(url) {
//   const response = await fetch(url);

//   if(response.ok) {
//     const data = await response.json();
//     console.log(data);
//   }
// }

// *Using the Stormglass API to get current weather status
// fetch(
//   `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
//   {
//     headers: {
//       Authorization:
//         "e186e4f0-dd6e-11ec-bcd6-0242ac130002-e186e55e-dd6e-11ec-bcd6-0242ac130002",
//     },
//   }
// )
//   .then((response) => response.json())
//   .then((jsonData) => {
//     weatherData = jsonData;
//     console.log(weatherData);

//     output(weatherData);
//   });

// **For debugging without Stormglass API
const output = () => {
  // *Using the Stormglass API
  // const output = (data) => {
  // **For debugging without Stormglass API
  const tempC = 6.96;
  const windSpeedMps = 5.73;

  // *Using the Stormglass API
  // const windSpeedMps = data.hours[0].windSpeed.noaa;
  // const tempC = data.hours[0].airTemperature.noaa;

  // const windSpeedKph = windSpeedMpsToKph(windSpeedMps);
  const tempF = tempCtoF(tempC);
  const windSpeedMph = windSpeedMpsToMph(windSpeedMps);

  document.querySelector("#temp").textContent = `${tempF.toFixed(0)} °F`;
  document.querySelector("#windSpeedH4").textContent = `${windSpeedMph.toFixed(
    2
  )} mph`;

  let windChillH4 = document.querySelector("#windChillH4");
  windChillH4.textContent = getWindChill(windSpeedMph, tempF);
};

// Define the windSpeedMpsToMph function
const windSpeedMpsToMph = (mps) => mps / 0.44704;

// Define the windSpeedMpsToKph function
const windSpeedMpsToKph = (mps) => mps * 3.6;

// Convert km/h to mph
// const kphToMph = (kph) => kph * 0.621371;

// Convert mph to km/h
// const mphToKph = (mph) => mph / 0.621371;

// Convert Celsius to Fahrenheit
const tempCtoF = (cel) => cel * 1.8 + 32;

// Convert Fahrenheit to Celsius
const tempFtoC = (fahr) => (fahr - 32) / 1.8;

// Calculate the Wind Chill Factor
const getWindChill = (mph, temp) => {
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
    // console.log(`Wind chill: ${windChill} °F`);
    windChill = `${windChill} °F`;
  }

  return windChill;
};

// **For debugging without Stormglass API
output();