const products = [];

const productElements = document.querySelectorAll('.product')

productElements.forEach(product => {
    const id = product.getAttribute('data-id');
    const imgSrc = product.querySelector('img').getAttribute('src');
    const title = product.querySelectorAll('.product-title').innerText;
    const originalPrice = product.querySelectorAll('.original-price').innerText;
    const discountPrice = product.querySelectorAll('discount-price').innerText;

    products.push({
        id,
        imgSrc,
        title,
        originalPrice,
        discountPrice
    });
});

function displayRandomProduct() {
    const randomProduct = products[Math.floor(Math.random() * products.length)];

    const productContainer = document.querySelector('.random-product-container');

    productContainer.innerHTML =`
        <div class="product">
            <img src="${randomProduct.imgSrc}" alt="${randomProduct.title}" />
            <p>${randomProduct.title}</p>
            <p>${randomProduct.discountPrice}</p>
            <a href="product-batik-${randomProduct.id}.html" class="button-buy">Lihat Detail</a>
        </div>
        `;
}

window.onload = displayRandomProduct;