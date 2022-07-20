// store resource URL in a const
const spotURL = "./js/data.json";
const i = getRandomIntInclusive(0, 9); //gold member random index
const j = getRandomIntInclusive(0, 8); // silver members random index
const k = getRandomIntInclusive(0, 18); // gold + silver members random index

// basic fetch( method) implementation
fetch(spotURL)
  .then(function (response) {
    return response.json();
  })
  // validate data received
  .then(function (jsonData) {
    // console.table(jsonData);
    const spotCo = jsonData["directory"];
    // console.log(spotCo)
    // filter gold members
    goldMembers = spotCo.filter((members) => members.memberLevel === 1);
    // console.log(goldMembers);
    // add to page
    setInterval(function () {
      spotlightLoad();
    }, 2000);

    // filter silver members
    silverMembers = spotCo.filter((members) => members.memberLevel === 2);
    allMembers = spotCo;
  });

function spotlightLoad() {
  // Load random Gold Member to spotlight 1
  document.querySelector(".spot1H2").textContent = goldMembers[i].companyname;
  document.querySelector(
    ".spot1phone"
  ).innerHTML = `Phone: +${goldMembers[i].phone}`;
  document.querySelector(".spot1email").textContent = goldMembers[i].website;
  document
    .querySelector(".spot1img")
    .setAttribute("src", goldMembers[i].logourl);
  document
    .querySelector(".spot1img")
    .setAttribute("alt", `${goldMembers[i].companyname} logo`);
  document.querySelector(".spot1img").setAttribute("loading", "lazy");

  // Load random Silver to spotlight 2
  document.querySelector(".spot2H2").textContent = silverMembers[j].companyname;
  document.querySelector(
    ".spot2phone"
  ).innerHTML = `Phone: +${silverMembers[j].phone}`;
  document.querySelector(".spot2email").textContent = silverMembers[j].website;
  document
    .querySelector(".spot2img")
    .setAttribute("src", silverMembers[j].logourl);
  document
    .querySelector(".spot2img")
    .setAttribute("alt", `${silverMembers[j].companyname} logo`);
  document.querySelector(".spot2img").setAttribute("loading", "lazy");

  // load spotlight3 only when it is on screen.
  if (document.documentElement.clientWidth >= 1100) {
    document.querySelector(".spot3H2").textContent = allMembers[k].companyname;
    document.querySelector(
      ".spot3phone"
    ).innerHTML = `Phone: +${allMembers[k].phone}`;
    document.querySelector(".spot3email").textContent = allMembers[k].website;
    document
      .querySelector(".spot3img")
      .setAttribute("src", allMembers[k].logourl);
    document
      .querySelector(".spot3img")
      .setAttribute("alt", `${allMembers[k].companyname} logo`);
    document.querySelector(".spot3img").setAttribute("loading", "lazy");
  }
  false;
}

// select random member
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
