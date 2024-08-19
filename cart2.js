// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cart = [];

    // Function to update cart UI
    const updateCartUI = () => {
        cartItemsList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(listItem);
            total += item.price;
        });

        totalPriceElement.textContent = total;
    };

    // Handle adding products to the cart
    document.querySelectorAll('.product-list button').forEach(button => {
        button.addEventListener('click', () => {
            const price = parseFloat(button.getAttribute('data-price'));
            const name = button.getAttribute('data-name');

            cart.push({ name, price });
            updateCartUI();
        });
    });
});
