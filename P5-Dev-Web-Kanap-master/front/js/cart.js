fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return main(data)
    })

function main() {
    makeImage(imageUrl, altTxt)
}

function makeImage(imageUrl, altTxt){
    const image = document.createElement('img')
    image.src = imageUrl
    image.alt = altTxt
    const parent = document.querySelector('.cart__item__img')
    if(parent != null) parent.appendChild(image)
}


