

const randMem = document.getElementById('randomMember');
// Fetches the data from the JSON array.
const dat = "./data/members.json"

// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`

async function getMembers() {
    const response = await fetch(dat)
    const data = await response.json()
    console.table(data.members)
    displayMembers(data.members);
}
getMembers();


// Displays the content of the JSON array.
const displayMembers = (members) => {
    members.forEach(member => {
        



// // let data = JSON.parse(dat)
// let randomIndex  = Math.ceil(Math.random() * dat.length)
//     const randObj = dat[randomIndex];
//      randMem.innerHTML = `${randObj.names}`;


        const cards = document.querySelector('.memberCardContainer')
        let card = document.createElement('section')
        let name = document.createElement('h3')
        let streetAddress = document.createElement('p')
       let website = document.createElement('h4')
       let email = document.createElement('h4')
       let phone = document.createElement('h4')
      let membershipLevel = document.createElement('h4')
        let image = document.createElement('img')
        
        image.setAttribute('src', member.image)
        image.setAttribute('alt', `Nice image`)
        image.classList.add('cards')
        image.classList.add('img')
        card.classList.add('ca');
        
        cards.classList.add('card')
        // image.setAttribute('width', 200);
       //  image.setAttribute('height', 120);
        name.textContent = `Name: ${member.names}`
        streetAddress.textContent = `Address: ${member.addresses}`;
        website.textContent = `Website: ${member.websiteURL}`
        email.textContent = `Email: ${member.email}`
        phone.textContent = `Phone number: ${member.phoneNumber}`
        membershipLevel.textContent = `Membership Level: Tier ${member.membershipLevel}.`


        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(streetAddress);
        card.appendChild(website);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(membershipLevel)
        
        cards.appendChild(card)
    
    });

    // Control for the Hamburger button.
    const hamButton = document.getElementById('ham-btn');
    const navigation = document.getElementById('nav-bar')
    hamButton.addEventListener('click', () => {
        hamButton.classList.toggle('show');
        navigation.classList.toggle('show');
    });

    // Controls the grid and list view
    const gridbutton = document.getElementById('grid');
    const listbutton = document.querySelector('#flex');
    const display = document.querySelector("article");
    
    gridbutton.addEventListener("click", () => {
    	display.classList.add("grid");
    	display.classList.remove("list");
    });
    
    listbutton.addEventListener("click", showList); // example using defined function
    
    function showList() {
    	display.classList.add("list");
    	display.classList.remove("grid");
    }
        // Get the current Year and last modified time.
        let year = document.getElementById('year');
        let fullYear = new Date().getFullYear()
        let lastModified = document.getElementById('lastModified')
    
        year.textContent = fullYear;
        lastModified.textContent = document.lastModified;
}
    





// console.log("d");