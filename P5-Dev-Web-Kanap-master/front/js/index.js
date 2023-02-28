// A revoir
fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return addProducts(data)
    })

// Add products in index page
function addProducts(data){
    // const _id = data[0]._id
    // const imageUrl = data[0].imageUrl
    // const altTxt = data[0].altTxt
    // const name = data[0].name
    // const description = data[0].description 

    // Après avoir tout préparé, comme ci-dessus pour le data[0] la boucle permet de faire de même pour toute les cards automatiquement
    data.forEach((kanap) => {        
        const { _id, imageUrl, altTxt, name, description} = kanap
        const anchor = makeAnchor(_id)
        const article = document.createElement("article")
        const image = makeImage(imageUrl, altTxt)
        const h3 = makeH3(name)
        const p = makeParagraphe(description)
        
        appendElementsToArticle(article, image, h3, p)
        appendArticleToAnchor(anchor, article)
    });
}

// Add function pour savoir que va faire appendElementsToArticle
function appendElementsToArticle(article, image, h3, p){
    article.appendChild(image)
    article.appendChild(h3)
    article.appendChild(p)
}

// cette function ajoute l'élément HTML <a> lui donne son href
function makeAnchor(id){
    const anchor = document.createElement("a")
    anchor.href = "./product.html?id=" +id
    return anchor
}

// Add function pour savoir que va faire appendArticleToAnchor
function appendArticleToAnchor(anchor, article){
    const items = document.querySelector("#items")
    if (items != null){
        items.appendChild(anchor)
        anchor.appendChild(article)
    }
}

// Add function pour savoir que va faire makeImage
function makeImage(imageUrl, altTxt){
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
    return image
}

// Add function pour savoir que va faire makeH3
function makeH3(name){
    const h3 = document.createElement("h3")
    h3.textContent = name
    h3.classList.add("productName")
    return h3
}

// Add function pour savoir que va faire makeParagraphe
function makeParagraphe(description){
    const p = document.createElement("p")
    p.textContent = description
    p.classList.add("productDescription")
    return p
}