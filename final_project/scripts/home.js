

const uty = "./data/data.json"


const latest = document.getElementById('latest')
const mostPopular = document.getElementById('mostPopular')

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
    const twoLatest = datas.slice(0, 2);
    const twoMostPopular = datas.slice(39, 41)
    twoLatest.forEach(da => {
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

        image.classList.add('imgWidth');
        author.classList.add('space');
        publishedAt.classList.add('spaces');
        content.classList.add('spaces');
        title.classList.add('spaces');
        // full_name.textContent = `${da.url}`

        link.href = `${da.url}`;
        link.textContent = "Visit Now!";
        link.classList.add('link');
        author.textContent = `Author: ${da.author}`;
        publishedAt.textContent = `Published date: ${da.publishedAt}`;
        title.textContent = `Title: ${da.title}`;

        section.appendChild(image)
        section.appendChild(author);
        section.appendChild(title);
        section.appendChild(content)
        //shower.appendChild(description);
        section.appendChild(link);
        section.appendChild(publishedAt);
        
        latest.appendChild(section);
    })

    twoMostPopular.forEach(da => {
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

        image.classList.add('imgWidth');
        author.classList.add('space');
        publishedAt.classList.add('space');
        content.classList.add('space');
        title.classList.add('space');
        // full_name.textContent = `${da.url}`

        link.href = `${da.url}`;
        link.textContent = "Visit Now!";
        link.classList.add('link');
        author.textContent = `Author: ${da.author}`;
        publishedAt.textContent = `Published date: ${da.publishedAt}`;
        
        title.textContent = `Title: ${da.title}`;

        section.appendChild(image)
        section.appendChild(author);
        section.appendChild(title);
        section.appendChild(content)
        //shower.appendChild(description);
        section.appendChild(link);
        section.appendChild(publishedAt);
        
        mostPopular.appendChild(section);
    })

    let year = document.getElementById('year');
        let fullYear = new Date().getFullYear()
        let lastModified = document.getElementById('lastModified')
    
        year.textContent = fullYear;
        lastModified.textContent = document.lastModified;

    const hamButton = document.getElementById('ham-btn');
    const navigation = document.getElementById('nav-bar')
    hamButton.addEventListener('click', () => {
        hamButton.classList.toggle('show');
        navigation.classList.toggle('show');
    });
}