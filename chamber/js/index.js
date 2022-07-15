//hamburguer menu
function toggleMenu() {
  document.getElementById("navBar").classList.toggle("open");
  document.getElementById("hamburguerButton").classList.toggle("open");
}
const x = document.getElementById("hamburguerButton");
x.onclick = toggleMenu;
//current date
const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
  now
);
datefield.innerHTML = `<em>${fulldate}</em>`;
//banner
const banner = document.getElementById("banner");
let today = new Date();
day = today.getDay();

const showBanner = () => {
  banner.style.display = "block";
};

if (day === 1 || day === 2) {
  showBanner();
}
//current year
document.addEventListener("DOMContentLoaded", function () {
  const yrSpan = document.querySelector("#currentyear");
  const currentYr = new Date().getFullYear();
  yrSpan.textContent = currentYr;
});
//last modified date and hour
const options = {
  month: "numeric",
  day: "numeric",
  year: "numeric",
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
document.getElementById("lastmodified").textContent = new Date(
  document.lastModified
).toLocaleDateString("en-US", options);
//locale storage
const daysVisited = document.getElementById("container");
const timestamp = today.getTime();

document.addEventListener("DOMContentLoaded", () => {
  populateStorage();
});

const populateStorage = () => {
  try {
    let theDay = localStorage.getItem("daysVisited");
    if (theDay != timestamp) {
      // (1.000 miliseconds x 60 seconds x 60 minutes x 24 hours)
      let days = Math.round((timestamp - theDay) / 86400000);
      daysVisited.textContent = `Amount of time in days between user visits: ${days} days`;
      setStyles();
    }
  } catch (er) {
    setStyles();
  }
};

const setStyles = () => {
  localStorage.setItem("daysVisited", timestamp);
};
// //hidden form
// let dForm = new Date()
// document.querySelector("#subDatetime").value = dForm;
