const requestInfo = "json/data.json";
const cards = document.querySelector('.cards');

fetch(requestInfo)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        console.log(jsonObject);
        const companies = jsonObject['companies'];
        companies.forEach(displayCompanies);
    })

function displayCompanies (company){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let logo = document.createElement('img');

    h2.textContent = `${company.name}`;
    p1.textContent = `${company.address}`;
    p2.textContent = `${company.phone}`;
    p3.textContent = `${company.website}`;

    logo.setAttribute('src', company.imageName);
    logo.setAttribute('alt', `Logo for ${company.name}`);
    logo.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p2);
    card.appendChild(logo);

    document.querySelector('div.cards').appendChild(card);
}

//to get buttons working//
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("cards");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("cards");
})