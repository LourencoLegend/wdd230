/*code for getting current date, in format Wednesday, May 11, 2022*/
let now = new Date();
let fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

/*putting date in date section at the top*/ 
document.getElementById('date').textContent = fulldate;
/*putting date in hidden input field in join page*/
document.querySelector('#visitTime').value = fulldate;


/* code for getting copywright date*/
let c = new Date()
let year = c.getFullYear()
console.log(year);
document.getElementById("copyright").textContent = `${year}`


/*code for getting last modified*/
let d = new Date(document.lastModified)
let date = `Last Updated: ${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
document.getElementById("lastmodified").textContent = date


/*code for responsive hamburger menu*/
/** This needs to be modified to querySelectorAll then something else to run through the new list. right now it is only applying to the last instances of .hamburgerBtn and .navigation. Currently the dropdown only works on the last page -- the join page*/
const hambutton = document.querySelector('.hamburgerBtn');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
hambutton.addEventListener('click', () => {hambutton.classList.toggle('pressed')}, false);


/*code for getting day of week written out*/
let weekday = new Date(c).toLocaleString('en-us', {weekday:'long'});
console.log(weekday);

/*code to toggle invite banner based on day of week being Tuesday or Wednesday*/
const invite = document.querySelector('.classInvite')
if (weekday == "Monday" || weekday == "Tuesday") {invite.style.display = 'block';}