
const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json"


async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets);
displayProphets(data.prophets); // note that you reference the prophets array of the JSON data object, not just the object
}

getProphetData();

// async function getProphetData() {
//   const response = await fetch(url);
//   const data = await response.json();
// //  console.table(data.prophets); // temporary testing of data response
// }

// getProphetData();



const cards = document.querySelector('#cards');



const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2'); // fill in the blank
    let portrait = document.createElement('img');

    // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet.name}`; // fill in the blank
      // fullName.textContent = `${prophet.length} ____________`;
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name}`); // fill in the blank
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '200');
    portrait.setAttribute('height', '200');

    // Append the section(card) with the created elements
    card.appendChild(fullName); //fill in the blank
    card.appendChild(portrait);

    cards.appendChild(card);
  }); // end of arrow function and forEach loop
}