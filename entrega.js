const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productList = document.getElementById('productList');
const productQty = document.getElementById('productQty');
const submitBtn = document.getElementById('submitBtn')

class Product {
    constructor (name, price){
        this.name = name
        this.price = price
    }
}

const productQtyArr = []

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const productNameValue = productName.value;
    const productPriceValue = productPrice.value;

    const product = new Product(productNameValue, productPriceValue);
    productQtyArr.push(product)

    productList.innerHTML += `<li>${productNameValue}: $${productPriceValue}</li>`
    productQty.innerHTML = `${productQtyArr.length}`
});