


const openButton = document.getElementById('openButton')
const dialogBox = document.getElementById('dialogBox')
const closeButton = document.getElementById('closeButton')
const modalText = document.getElementById('modalText');
const openButton1 = document.getElementById('openButton1');
const openButton2 = document.getElementById('openButton2');
const openButton3 = document.getElementById('openButton3');
const submitButton = document.querySelector('.submitButton');
const date = document.getElementById('date');



const hamButton = document.getElementById('ham-btn');
    const navigation = document.getElementById('nav-bar')
    hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navigation.classList.toggle('show');
    });

submitButton.addEventListener('click', () => {
  date.value = ds;
    })

    
// Get the current Year and last modified time.
        let ds = new Date().toString();
        let year = document.getElementById('year');
        let fullYear = new Date().getFullYear()
        let lastModified = document.getElementById('lastModified')
    
        year.textContent = fullYear;
lastModified.textContent = document.lastModified;
        
let numberOfVisits = document.getElementById("visit");

let visits = Number(window.localStorage.getItem('store'));

if (visits != 0) {
    numberOfVisits.textContent = visits;
}
    else {
            numberOfVisits.textContent = "First Visitor"
        }
visits ++ ;
localStorage.setItem('store', visits);
