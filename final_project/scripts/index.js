
// const url = `
//  https://newsapi.org/v2/everything?q=tesla&from=2025-09-09&sortBy=publishedAt&apiKey=b87979ecf45a4c359290abaf5f05799c`

const uty = `scripts/data.json`

const shower = document.getElementById('shower')
const dialogBox = document.getElementById('dialogBox');
const openButton = document.getElementById('openButton');
const textArea = document.getElementById('textArea');
const description = document.getElementById('description');
const closeModal = document.getElementById('closeModal');



async function fetchData() {
    try {
        const response = await fetch(uty)
        const data = await response.json()
         console.log(data.articles)
        displayInfo(data.articles)
        
    } catch (error) {
        console.log(error)
    }

}
fetchData();

const displayInfo = (datas) => {
    datas.forEach(da => {
        // if (da.description == "") {
        //     da.description.textContent = "Nicer";
        // }
        
        // shower.textContent = `${da.camera.full_name}`;
        const section = document.createElement('section')
        const image = document.createElement('img');
        const link = document.createElement('a');
        // const description = document.createElement('h2');
        const name = document.createElement('h2');
        const publishedAt = document.createElement('h4')
        //  im.classList.add('nome')

        image.setAttribute('src', `${da.urlToImage}`)
        image.setAttribute('alt', `${da.title}`);
        image.classList.add('imgWidth');
        // full_name.textContent = `${da.url}`
        link.href = `${da.url}`;
        link.textContent = "Visit Now!";
        link.classList.add('link');
        name.textContent = `${da.author}`;
        publishedAt.textContent = `${da.publishedAt}`;
        // description.textContent = `${da.description}`;

        image.addEventListener('click', () => {
            dialogBox.showModal();
           description.textContent = `${da.description}`;
       })
      closeModal.addEventListener('click', () => {
          dialogBox.close();
      })
        
        
        section.appendChild(image)

        section.appendChild(link);
        section.appendChild(name);
        //shower.appendChild(description);
        section.appendChild(publishedAt);
        shower.appendChild(section);
    })

     const hamButton = document.getElementById('ham-btn');
    const navigation = document.getElementById('nav-bar')
    hamButton.addEventListener('click', () => {
        hamButton.classList.toggle('show');
        navigation.classList.toggle('show');
    });
};




// const displayInfos = (datas) => {
//   shower.innerHTML = datas.map(da => `
//     <div class="card">
//       <h3>${da.camera.full_name}</h3>
//       <p>ID: ${da.id}</p>
//       <img src="${da.img_src}" alt="${da.camera.full_name}">
//     </div>
//   `)
// };