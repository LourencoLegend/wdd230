const requestInfo = "json/data.json";

fetch(requestInfo)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);
        const companies = jsonObject['companies']
        console.log(companies);
        //function to get filtered array
        var filteredCos = [companies[2], companies[3], companies[6], companies[7]]
        console.table(filteredCos);

        //get 3 random companies from filtered array
    ///1st company    
        const randomCompany = getRandomCo(filteredCos);
        console.log(randomCompany);
           //find index of randomly selected company
        const randomCompanyIndex = filteredCos.indexOf(randomCompany)
        console.log(randomCompanyIndex);

            //remove selected company from list so it doesn't repeat
        filteredCos.splice(randomCompanyIndex, 1)
        console.table(filteredCos)

    ///2nd company    
        const randomCompany1 = getRandomCo(filteredCos);
        console.log(randomCompany1);

           //find index of randomly selected company
           const randomCompanyIndex1 = filteredCos.indexOf(randomCompany1)
           console.log(randomCompanyIndex1);

        filteredCos.splice(randomCompanyIndex1, 1)
        console.table(filteredCos)
    ///3rd company    
        const randomCompany2 = getRandomCo(filteredCos);
        console.log(randomCompany2);
            //find index of randomly selected company
           const randomCompanyIndex2 = filteredCos.indexOf(randomCompany2)
           console.log(randomCompanyIndex2);

        filteredCos.splice(randomCompanyIndex2, 1)
        console.table(filteredCos)
        
    //functions to display random companies on page
        //for spotlight 1
        document.querySelector('.spotlight1 h2').textContent = `${randomCompany.name}`;
            //for image
        let img1 = document.querySelector('.spotlight1 img')
        img1.setAttribute('src', randomCompany.imageName);
        img1.setAttribute('alt', `Logo for ${randomCompany.name}`);
        img1.setAttribute('loading', 'lazy');

        document.querySelector('.spotlight1 .phone').textContent = `${randomCompany.phone}`;

        document.querySelector('.spotlight1 .website').textContent = `${randomCompany.website}`;
    
        // for spotlight2
    
        document.querySelector('.spotlight2 h2').textContent = `${randomCompany1.name}`;

        let img2 = document.querySelector('.spotlight2 img')
        img2.setAttribute('src', randomCompany1.imageName);
        img2.setAttribute('alt', `Logo for ${randomCompany1.name}`);
        img2.setAttribute('loading', 'lazy');

        document.querySelector('.spotlight2 .phone').textContent = `${randomCompany1.phone}`;

        document.querySelector('.spotlight2 .website').textContent = `${randomCompany1.website}`;

        //for spotlight3

        document.querySelector('.spotlight3 h2').textContent = `${randomCompany2.name}`;

        let img3 = document.querySelector('.spotlight3 img')
        img3.setAttribute('src', randomCompany2.imageName);
        img3.setAttribute('alt', `Logo for ${randomCompany2.name}`);
        img3.setAttribute('loading', 'lazy');

        document.querySelector('.spotlight3 .phone').textContent = `${randomCompany2.phone}`;

        document.querySelector('.spotlight3 .website').textContent = `${randomCompany2.website}`;
    })

    
    
    
    function getRandomCo(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const comp = array[randomIndex];
        return comp;
    }