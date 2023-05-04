const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productList = document.getElementById('productList');
const productQty = document.getElementById('productQty');
const submitBtn = document.getElementById('submitBtn')


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const productNameValue = productName.value;
    const productPriceValue = productPrice.value;



    productList.innerHTML += `<li>${productNameValue}: $${productPriceValue}</li>`
});