

import { places } from "../data/places.mjs";
console.log(places);

const pla = document.getElementById('places')

function displayItems(p) {
    p.forEach(place => {
        
        const section = document.createElement('section')
        
         const title = document.createElement('h2')
        const address = document.createElement('address')
        const descript = document.createElement('p')
        const image = document.createElement('img')
        
       title.textContent = place.name
        descript.innerHTML = place.description
        address.innerHTML = place.address
        image.setAttribute('src', `${place.photo_url}`)
        image.setAttribute('alt', `${place.name}`)


        section.appendChild(image)
        section.appendChild(title)
        section.appendChild(address)
        section.appendChild(descript);

        pla.append(section)
    
    })
};

displayItems(places)