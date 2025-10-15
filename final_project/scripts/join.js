


const openButton = document.getElementById('openButton')
const dialogBox = document.getElementById('dialogBox')
const closeButton = document.getElementById('closeButton')
const modalText = document.getElementById('modalText');
const openButton1 = document.getElementById('openButton1');
const openButton2 = document.getElementById('openButton2');
const openButton3 = document.getElementById('openButton3');
const submitButton = document.querySelector('.submitButton');
const date = document.getElementById('date');

// openButton.addEventListener('click', () => {
//   dialogBox.showModal();
//   modalText.textContent = `This is the Non-profit membership level`
// });

// openButton1.addEventListener('click', () => {
//   dialogBox.showModal();
//   modalText.textContent = `This is the Bronze membership level`
// })

// openButton2.addEventListener('click', () => {
//   dialogBox.showModal();
//   modalText.textContent = `This is the Silver membership level`
// })

// openButton3.addEventListener('click', () => {
//   dialogBox.showModal();
//   modalText.textContent = `This is the Gold membership level`
// })

// closeButton.addEventListener('click', () => {
//   dialogBox.close();
// })

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
