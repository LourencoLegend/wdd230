//count the number of page visits
var numVisits = Number(window.localStorage.getItem('numVisits'));


//add one each visit
numVisits++

//store the count in local storage as 'numVisits
console.log(numVisits)
window.localStorage.setItem('numVisits', numVisits);



//for each visit use numVisits as the key for each timestamp 
   //get element to put date into.
const todayDisplay = document.querySelector('.today');
    //set the content of the element to the date.
todayDisplay.textContent = Date.now();
    //check with console log
console.log(todayDisplay)

   //change date into number 
var numTodayDisplay = parseFloat(todayDisplay.textContent)
console.log(numTodayDisplay)

    //save date to local storage with visit number as the key.
window.localStorage.setItem(numVisits, numTodayDisplay);

//get today's timestamp as number
numTodayDisplay
//get last visits timestamp as number
var lastTimeStamp = window.localStorage.getItem(numVisits - 1,)
console.log(lastTimeStamp)
//subtract last visits timestamp from today's
var diffMiliSec = numTodayDisplay - lastTimeStamp
console.log(diffMiliSec)

//convert to seconds, min, hrs, days and round
var difSec = diffMiliSec / 1000
console.log(difSec, "seconds")

var difMin = difSec / 60
console.log(difMin)

var difHrs = difMin / 60
var difDays = Math.floor(difHrs / 24)
console.log(difHrs)
console.log(difDays, "days")

//display difDays onto webpage
document.querySelector('.differenceDays').textContent = difDays
