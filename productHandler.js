document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId || !products[productId]) {
        document.querySelector('main').innerHTML = `
            <div class="product-not-found" style="width:100%;text-align:center;padding:40px;">
                <h2>Product not found</h2>
                <p>We couldn't find the product you're looking for.</p>
                <a href="index.html" style="color:black;text-decoration:underline;">Return to homepage</a>
            </div>
        `;
        return;
    }

    const product = products[productId];
    
    document.title = `${product.name} | Nike`;
    
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.name;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-description').textContent = product.description;
});