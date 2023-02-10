const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get("id")
if (id != null){
    let itemPrice = 0
}

fetch(`http://localhost:3000/api/products/${id}`)
.then((response) => response.json())
.then((res) => handleData(res))

function handleData(cannard){
    const altTxt = cannard.altTxt
    const colors = cannard.colors
    const description = cannard.description
    const imageUrl = cannard.imageUrl
    const name = cannard.name
    const price = cannard.price
    itemPrice = price
    makeImage(imageUrl, altTxt)
    makeTitle(name)
    makePrice(price)
    makeDescription(description)
    makeColors(colors)
}

function makeImage(imageUrl, altTxt){
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
    const parent = document.querySelector(".item__img")
    if (parent != null) parent.appendChild(image)
}

function makeTitle(name){
    const h1 = document.getElementById("title")
    if (h1 != null) h1.textContent = name
}

function makePrice(price) {
    const span = document.getElementById("price")
    if (span != null) span.textContent = price
}

function makeDescription(description) {
    p = document.getElementById("description")
    if (p != null) p.textContent = description
}

function makeColors(colors){
    const select = document.getElementById("colors")
    if (select != null) {
        colors.forEach((color) => {
            const option = document.createElement("option")
            option.value = color
            option.textContent = color
            select.appendChild(option)
        });
    }
}


// local storage 
const button = document.getElementById("addToCart")
if (button != null){
    button.addEventListener("click", () => {
        const color = document.getElementById("colors").value
        const quantity = document.getElementById("quantity").value
        if (color == null || color === "" || quantity == null || quantity == 0){
            alert("Please select a color and quantity")
        }
        const data = {
            id: id,
            color: color,
            quantity: Number(quantity),
            price: itemPrice,
        }
        localStorage.setItem(id, JSON.stringify(data))
        window.location.href = "cart.html"
    })
}