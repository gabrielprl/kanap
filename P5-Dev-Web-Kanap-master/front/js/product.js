// A revoir
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get("id")
if (id != null){
    let itemPrice = 0
}

// A revoir
fetch(`http://localhost:3000/api/products/${id}`)
.then((response) => response.json())
.then((res) => handleData(res))

// Add items in panier
function handleData(kanap){
    const altTxt = kanap.altTxt
    const colors = kanap.colors
    const description = kanap.description
    const imageUrl = kanap.imageUrl
    const name = kanap.name
    const price = kanap.price
    itemPrice = price
    makeImage(imageUrl, altTxt)
    makeTitle(name)
    makePrice(price)
    makeDescription(description)
    makeColors(colors)
}

// Add image in panier
function makeImage(imageUrl, altTxt){
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
    const parent = document.querySelector(".item__img")
    if (parent != null) parent.appendChild(image)
}

// Add name in panier
function makeTitle(name){
    const h1 = document.getElementById("title")
    if (h1 != null) h1.textContent = name
}

// Add price in panier
function makePrice(price) {
    const span = document.getElementById("price")
    if (span != null) span.textContent = price
}

// Add description in panier
function makeDescription(description) {
    p = document.getElementById("description")
    if (p != null) p.textContent = description
}

// Récupère les options de couleur
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

function isFormNotValid(color, quantity){
    if(color === null || color === '' || quantity == 0 || quantity > 100){
      alert('Please document.querySelector a color and a valid quantity')
      return true
    }
    return false
  }

  const button = document.querySelector('#addToCart')
  if (button != null){
      
      button.addEventListener('click', () => {
          const color = document.querySelector('#colors').value
          let quantity = document.querySelector('#quantity').value
          
          if (!isFormNotValid(color, quantity)){
            if(localStorage.getItem('kanap') === null){
                let localStorageData = [{
                  'id': id,
                  'color': color,
                  'quantity': quantity,
                }]
                localStorage.setItem('kanap', JSON.stringify(localStorageData))
              }else{
                let localStorageData = JSON.parse(localStorage.getItem('kanap'));
                localStorageData.map((object, index) => {
                    if(object.quantity === id && object.color === color){
                        localStorageData[index] = {
                            ...object, 'quantity' : object.quantity + quantity
                        }
                    }
                })
                localStorageData = [...localStorageData, {
                  'id': id,
                  'color': color,
                  'quantity': quantity,
                }]
                localStorage.setItem('kanap', JSON.stringify(localStorageData))
              }
        window.location.href = 'cart.html'
      }
    })
  }

