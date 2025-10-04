

const dat = "./data/members.json"
const randMem = document.getElementById('randomMember')

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
//const captionDesc = document.querySelector('figcaption');
const description = document.getElementById('description')
const maxTemp = document.getElementById('high');
const minTemp = document.getElementById('low');
const humidity = document.getElementById('humidity');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const today = document.getElementById('today');

const myLat = "49.75"
const myLong = "6.64"
const myKey = "81cd0e7e7b648d756506c9d382f0072b"

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`
const forecastURL =`https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}`
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`


async function Fetch() {
  try {
    const response = await fetch(url);
    const forecastResponse = await fetch(forecastURL)
    if (response.ok || forecastResponse.ok) {
      const data = await response.json();
      const forecastData = await forecastResponse.json();
      console.log(data);
      console.log(forecastData); // testing only
      displayResults(data); 
      displayResults(forecastData);
    } else {
      //throw Error(await response.text());
      throw Error(await forecastResponse.text());
    }
  } catch (error) {
      console.log(error);
  }
}

Fetch();


function displayResults(data) {
  console.log("Hello");
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  description.textContent =  `${data.weather[0].description}`;
  maxTemp.innerHTML = `${data.main.temp_max}`;
  minTemp.textContent = `${data.main.temp_min}`;
  humidity.innerHTML = `${data.main.humidity}`;
  sunrise.textContent = `${data.sys.sunrise}am`;
  sunset.textContent = `${data.sys.sunset}pm`;
//   today.textContent = `${data.sys.sunrise}`;
//   maxTemp.textContent = `${maxTemp}`
}

function displayForcastResults(forecastedData) {
  today.textContent = 'NIce';
}

// Fetches the data from the JSON array.
async function getRandomMembers() {
  const response = await fetch(dat)
  const data = await response.json()
  console.table(data.members)
  displayMembers(data.members);


  //  let datas = JSON.parse(dat)
  // let r =  random(() => {
    
  }

getRandomMembers();



// Displays the content of the JSON array.
const displayMembers = (members) => {
    members.forEach(member => {
             
      const randMem = document.getElementById('randomMember');
      let randomIndex = Math.floor(Math.random() * member.length);
    const randObj = member[randomIndex];
      ///randMem.innerHTML = `${randObj}`;
      
       let infos = document.createElement('div')
        let phone = document.createElement('h4')
        let membershipLevel = document.createElement('h4')
        let name = document.createElement('h3')
        let streetAddress = document.createElement('p')
       let website = document.createElement('h4')
       let email = document.createElement('h4')
       
        let image = document.createElement('img')
  

       
      if (member.membershipLevel > 2) {
        name.textContent = `Name: ${member.names}`
        streetAddress.textContent = `Address: ${member.addresses}`;
        website.textContent = `Website: ${member.websiteURL}`
        email.textContent = `Email: ${member.email}`
        // phone.textContent = `Phone number: ${member.phoneNumber}`
        // membershipLevel.textContent = `Membership Level: Tier ${member.membershipLevel}.`
        phone.textContent = `Phone number: ${member.phoneNumber}`
        membershipLevel.textContent = `Membership Level: Tier ${member.membershipLevel}.`
      }

       infos.appendChild(image);
        infos.appendChild(name);
        infos.appendChild(streetAddress);
        infos.appendChild(website);
        infos.appendChild(email);
        infos.appendChild(phone);
      infos.appendChild(membershipLevel)
      
      infos.classList.add('cl');

        
        randMem.appendChild(infos)

    
    });

    

    // Control for the Hamburger button.
    const hamButton = document.getElementById('ham-btn');
    const navigation = document.getElementById('nav-bar')
    hamButton.addEventListener('click', () => {
        hamButton.classList.toggle('show');
        navigation.classList.toggle('show');
    });

    
        // Get the current Year and last modified time.
        let year = document.getElementById('year');
        let fullYear = new Date().getFullYear()
        let lastModified = document.getElementById('lastModified')
    
        year.textContent = fullYear;
        lastModified.textContent = document.lastModified;
}
    





// console.log("d");