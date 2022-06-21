const requestURL = 'scripts/data.json';
const grid = document.querySelector('.grid');

function displaybusniess(busniess) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let img = document.createElement('img');
    let url = document.createElement('a');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let membership = document.createElement('p');

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    img.setAttribute('src', busniess.imageurl);
    img.setAttribute('alt', `logo of ${busniess.name}`);
    img.setAttribute('loading', 'lazy');
    
    // name, address and url of the busniess
    name.textContent = `${busniess.name}`;
    address.textContent = `${busniess.address}`;
    phone.textContent = `${busniess.phone}`;
    membership.textContent = `Membership Level: ${busniess.membership_level}`;
    var linkText = document.createTextNode("Details");
    url.appendChild(linkText);
    url.title = "Details";
    url.href = `${busniess.url}`;

    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(membership);
    card.appendChild(url);

    // Add/append the existing HTML div with the cards class with the section(card)
    grid.appendChild(card);
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    
    .then(function (jsonObject) {
        const busniess = jsonObject['busniess'];
        busniess.forEach(displaybusniess);
    });