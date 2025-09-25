


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
  today.textContent = `${forecastedData.list.main.temp}`;
}
