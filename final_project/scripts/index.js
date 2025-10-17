
// const url = `
//  https://newsapi.org/v2/everything?q=tesla&from=2025-09-09&sortBy=publishedAt&apiKey=b87979ecf45a4c359290abaf5f05799c`

const uty = "./data/data.json"

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
        const author = document.createElement('h2');
        const publishedAt = document.createElement('h3')
        const content = document.createElement('h3')
        const title = document.createElement('h3')

        //  im.classList.add('nome')

        image.setAttribute('src', `${da.urlToImage}`)
        image.setAttribute('alt', `${da.title}`);
        image.loading = "lazy";

        image.classList.add('imgWidth');
        author.classList.add('space');
        publishedAt.classList.add('space');
        content.classList.add('space');
        title.classList.add('space');
        section.classList.add('section')
        // full_name.textContent = `${da.url}`

        link.href = `${da.url}`;
        link.textContent = "Visit Now!";
         link.classList.add('link');
        author.textContent = `Author: ${da.author}`;
        publishedAt.textContent = `Published date: ${da.publishedAt}`;
        content.textContent = `Content: ${da.content}`;
        title.textContent = `Title: ${da.title}`;

        // description.textContent = `${da.description}`;

        image.addEventListener('click', () => {
            dialogBox.showModal();
           description.textContent = `${da.description}`;
       })
      closeModal.addEventListener('click', () => {
          dialogBox.close();
      })
        
        
        section.appendChild(image)
        section.appendChild(author);
        section.appendChild(title);
        section.appendChild(content)
        //shower.appendChild(description);
        section.appendChild(link);
        section.appendChild(publishedAt);
        
        shower.appendChild(section);
    })

     const hamButton = document.getElementById('ham-btn');
    const navigation = document.getElementById('nav-bar')
    hamButton.addEventListener('click', () => {
        hamButton.classList.toggle('show');
        navigation.classList.toggle('show');
    });

    let year = document.getElementById('year');
        let fullYear = new Date().getFullYear()
        let lastModified = document.getElementById('lastModified')
    
        year.textContent = fullYear;
        lastModified.textContent = document.lastModified;
};




