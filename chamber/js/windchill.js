/*This is to use the weather API */
const tempIn = document.querySelector("#temp");

const condition  = document.querySelector("#condition");
const weatherIcon = document.querySelector("#weatherIcon");
const windSpeedIn = document.querySelector("#windSpeed");

const url = "https://api.openweathermap.org/data/2.5/weather?id=4517586&appid=00ea60318b73a6283c6a3e0101a40d75&units=imperial"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //to test the call
            displayResults(data);
            allWindChill(tempIn, windSpeedIn);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(weatherData) {
    tempIn.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    //tempIn.innerHTML = `5`
    windSpeedIn.innerHTML = `${weatherData.wind.speed}`;
    //windSpeedIn.innerHTML = `20`
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    //to capatilize each word in the description:
    const words = desc.split(" ");
    for (let i = 0; i <words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);}
    //must put it into a different variable bc .join doesn't change the original array.
    let formattedWords = words.join(' ');

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', formattedWords);
    condition.textContent = formattedWords;
  }



/*The following is to calculate the windchill*/
/*Get the temp from the page and make it into a number*/
//var temp = parseFloat(document.querySelector('#temp').textContent)
//console.log(temp)

/*Get the windSpeed from the page and make it into a number*/
//var windSpeed = parseFloat(document.querySelector('#windSpeed').textContent)
//console.log(windSpeed)

//function for all of the functions of calculating and displaying windchill:
function allWindChill (tempIn, windSpeedIn) {
/*define a function to calculat the windSpeed*/
function calcWindChill(tempIn, windSpeedIn){

    var windChill = 35.74 + 0.6215*tempIn - (35.75*windSpeedIn**0.16) + 0.4275 * tempIn * windSpeedIn**0.16
    return windChill
}

/*call the function and round the result if conditions are met, else give 'NA'*/
var f = ''
if (parseFloat(tempIn.innerText) <= 50 && parseFloat(windSpeedIn.innerText) >= 3) {f = roundToTwo(calcWindChill(parseFloat(tempIn.innerText), parseFloat(windSpeedIn.innerText)))}
else {f = "N/A"}
console.log(f)

/*function to accurately round a number to two decimals*/
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

/*place the wind chill number or NA on the page as needed.*/
document.querySelector('#windChill').textContent = f
}