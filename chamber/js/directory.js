// store resource URL in a const
const requestURL = "./js/data.json";
const cards = document.querySelector(".cards");
const lists = document.querySelector(".listTabs");

// basic fetch( method) implementation
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  // validate data received
  .then(function (jsonData) {
    // console.table(jsonData);
    const dirList = jsonData["directory"];

    const gridView = document.querySelector(".gridBtn");
    const listView = document.querySelector(".listBtn");
    // display default view
    dirList.forEach(displayDir);
    // display listView
    listView.addEventListener("click", function () {
      toggleList();
      dirList.forEach(displayList);
    });
    // display gridView
    gridView.addEventListener("click", function () {
      toggleCard();
      dirList.forEach(displayDir);
    });
  });

function displayDir(directory) {
  // create elements to add to the document
  let card = document.createElement("section");
  card.className = "cardSection";
  let name = document.createElement("h2");
  let logo = document.createElement("img");
  let address = document.createElement("p");
  let website = document.createElement("p");
  // add the directories name to the name textcontent
  name.textContent = directory.companyname;
  address.innerHTML = `<b></b> ${directory.phone}  <br> <b></b> ${directory.address} <br> `;
  logo.setAttribute("src", directory.logourl);
  logo.setAttribute("alt", `${directory.companyname} logo`);
  logo.setAttribute("loading", "lazy");
  website.setAttribute("class", "link");
  website.innerHTML =
    "<a href=" + `${directory.website}` + ">" + `${directory.website}`;
  // append to the section(card)
  card.appendChild(logo);
  card.appendChild(name);
  card.appendChild(address);
  card.appendChild(website);

  // add to existing HTML div
  cards.appendChild(card);
}

function displayList(directory) {
  let tr = document.createElement("tr");
  let website = document.createElement("p");
  tr.innerHTML = `<td>${directory.companyname} </td> <td>${directory.phone}</td> <td>${directory.address}</td> `;
  website.setAttribute("class", "link");
  website.innerHTML =
    "<a href=" + `${directory.website}` + ">" + `${directory.website}`;
  // add to existing HTML div
  tr.appendChild(website);
  lists.appendChild(tr);
}

function toggleCard() {
  document.getElementById("cardToggle").style.display = "grid";
  document.getElementById("listToggle").style.display = "none";
}
function toggleList() {
  document.getElementById("listToggle").style.display = "block";
  document.getElementById("cardToggle").style.display = "none";
}
