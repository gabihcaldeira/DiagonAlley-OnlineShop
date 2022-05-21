let main = document.querySelector('main')
let card
let figureTag
let image
let figcaptionTag
let cardInfo
let category
let productName
let description
let price
let addToCart
let totalPrice = document.getElementById('priceOnCart')
let cartPrices
let productsCounter = 0;
let priceTextArray = [];
let cartProducts = document.getElementById('cartProducts')
let emptyCart = document.getElementById('emptyCart')
let quantity = document.getElementById('quantity')
let footer1 = document.getElementById('footer1')
let footer2 = document.getElementById('footer2')
let cartItemsArray = []

function priceText(array) {
    priceTextArray = []
    for (let j = 0; j < 3; j++) {
        if (array[j] > 0) {
            if (j == 0) {
                if (array[j] == 1) {
                    priceTextArray.push(`$${array[j]} Galeão`)
                } else {
                    priceTextArray.push(`$${array[j]} Galeões`)
                }
            } else if (j == 1) {
                if (array[j] == 1) {
                    priceTextArray.push(`$${array[j]} Sicle`)
                } else {
                    priceTextArray.push(`$${array[j]} Sicles`)
                }
            } else if (j == 2) {
                if (array[j] == 2) {
                    priceTextArray.push(`$${array[j]} Nuque`)
                } else {
                    priceTextArray.push(`$${array[j]} Nuques`)
                }
            }
        }
    }
    return priceTextArray.join(" e ")
}

function productSum(array) {
    let finalPrice = [0, 0, 0]
    for (let i = 0; i < array.length; i++) {
        finalPrice[0] += array[i][0]
        finalPrice[1] += array[i][1]
        finalPrice[2] += array[i][2]
    }
    return priceText(finalPrice)
}

function showProducts(array) {

    for (let i = 0; i < array.length; i++) {
        card = document.createElement(`div`)
        card.className = "card"
        main.appendChild(card)

        figureTag = document.createElement('figure')
        figureTag.className = "productImg"
        card.appendChild(figureTag)

        image = document.createElement('img')
        image.src = array[i].img
        image.className = "img"
        image.alt = array[i].nameItem
        figureTag.appendChild(image)

        figcaptionTag = document.createElement('figcaption')
        figcaptionTag.innerText = array[i].nameItem
        figureTag.appendChild(figcaptionTag)

        cardInfo = document.createElement('div')
        cardInfo.className = "cardInfo"
        card.appendChild(cardInfo)

        category = document.createElement('p')
        category.innerText = array[i].tag
        category.className = "category"
        cardInfo.appendChild(category)

        productName = document.createElement('h3')
        productName.className = "name"
        productName.innerText = array[i].nameItem
        cardInfo.appendChild(productName)

        description = document.createElement('p')
        description.className = "description"
        description.innerText = array[i].description
        cardInfo.appendChild(description)

        price = document.createElement('p')
        price.className = "price"
        price.innerText = priceText(array[i].value)
        cardInfo.appendChild(price)

        addToCart = document.createElement('a')
        addToCart.className = "addToCart"
        addToCart.id = array[i].id
        addToCart.innerHTML = array[i].addCart + ' <i class="fa-solid fa-cart-shopping"></i>'
        cardInfo.appendChild(addToCart)

        addToCart.addEventListener("click", getAddId)
    }
}


showProducts(data);

function addCartItem(addArrayItem) {
    emptyCart.classList.add("hidden")
    footer1.classList.remove("hidden")
    footer2.classList.remove("hidden")
    cartProducts.innerText = ""
    cartPrices = []
    for (let j = 0; j < addArrayItem.length; j++) {
        let item = document.createElement('div')
        item.className = "cartItem"
        cartProducts.appendChild(item)

        let itemImg = document.createElement('img')
        itemImg.className = " itemImg"
        itemImg.src = addArrayItem[j].img
        itemImg.alt = addArrayItem[j].nameItem
        item.appendChild(itemImg)

        let itemInfo = document.createElement('div')
        itemInfo.className = "itemInfo"
        item.appendChild(itemInfo)

        let itemName = document.createElement('p')
        itemName.innerText = addArrayItem[j].nameItem
        itemInfo.appendChild(itemName)

        let itemPrice = document.createElement('p')
        itemPrice.innerText = priceText(addArrayItem[j].value)
        itemInfo.appendChild(itemPrice)
        cartPrices.push(addArrayItem[j].value)

        let removeBtn = document.createElement('button')
        removeBtn.id = j
        removeBtn.className = "removeBtn"
        removeBtn.innerHTML = `Remover produto <i class="fa-solid fa-trash-can"></i>`
        itemInfo.appendChild(removeBtn)
        removeBtn.addEventListener("click", getRemoveId)
    }
    quantity.innerText = addArrayItem.length
    totalPrice.innerText = productSum(cartPrices)
    if (addArrayItem.length == 0) {
        emptyCart.classList.remove('hidden')
        footer1.classList.add('hidden')
        footer2.classList.add('hidden')
    }
}

function getAddId(event) {
    let id = event.target.id
    let filter = data.filter((item) => item.id == id ? item : null)
    cartItemsArray.push(filter[0])
    return addCartItem(cartItemsArray)
}

function getRemoveId(event) {
    let idRemove = event.target.id
    cartItemsArray.splice(idRemove, 1)
    addCartItem(cartItemsArray)
}


function filterBooks() {
    main.innerHTML = ""
    let books = []
    for (let j = 0; j < data.length; j++) {
        if (data[j].tag == "Livro") {
            books.push(data[j])
        }
    }
    return showProducts(books)
}
let booksFilter = document.getElementById('books')
booksFilter.addEventListener("click", filterBooks)
let booksTags = document.getElementsByClassName('category')


function filterWeasley() {
    main.innerHTML = ""
    let weasley = []
    for (let j = 0; j < data.length; j++) {
        if (data[j].tag == "Gemialidades Weasley") {
            weasley.push(data[j])
        }
    }
    return showProducts(weasley)
}
let weasleyFilter = document.getElementById('weasley')
weasleyFilter.addEventListener("click", filterWeasley)

function filterWands() {
    main.innerHTML = ""
    let wands = []
    for (let j = 0; j < data.length; j++) {
        if (data[j].tag == "Varinha") {
            wands.push(data[j])
        }
    }
    return showProducts(wands)
}
let wandsFilter = document.getElementById('wands')
wandsFilter.addEventListener("click", filterWands)

function filterQuidditch() {
    main.innerHTML = ""
    let quidditch = []
    for (let j = 0; j < data.length; j++) {
        if (data[j].tag == "Quadribol") {
            quidditch.push(data[j])
        }
    }
    return showProducts(quidditch)
}
let quidditchFilter = document.getElementById('quidditch')
quidditchFilter.addEventListener("click", filterQuidditch)

let allFilter = document.getElementById('all')
allFilter.addEventListener("click", function () {
    main.innerHTML = ""
    return showProducts(data)
});

let searchBar = document.getElementById('searchBar')
let searchButton = document.getElementById('searchBtn')
searchButton.addEventListener("click", function () {
    let searchProducts = []
    let typedSearch = searchBar.value
    typedSearch = typedSearch.toLowerCase()
    for (let i = 0; i < data.length; i++) {
        let infoArray = Object.values(data[i])
        for (let j = 0; j < infoArray.length; j++) {
            infoArray[j] = infoArray[j].toString().toLowerCase()
            if (infoArray[j].includes(typedSearch)) {
                searchProducts.push(data[i])
            }
        }
    }
    let set = new Set(searchProducts)
    searchProducts = [...set]
    main.innerHTML = ""
    if (searchProducts.length == 0) {
        return main.innerHTML = "<p>Produto não encontrado. Tente outro produto!</p>"
    } else {
        return showProducts(searchProducts)
    }

});

let addProducts = document.getElementById('addProducts')
addProducts.addEventListener("click", function () {
    searchBar.focus()
});





