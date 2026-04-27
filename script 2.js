
let cart = [];
let total = 0;

function addToCart(itemName, price) {
    cart.push({name: itemName, price: price});
    total += price;
    updateUI();
    document.getElementById('checkout').scrollIntoView({behavior: 'smooth'});
}

function updateUI() {
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('total-price').innerText = total.toLocaleString();

    const cartItemsDiv = document.getElementById('cart-items');
    if(cart.length > 0) {
        cartItemsDiv.innerHTML = cart.map(item => `<p>✅ ${item.name} - ${item.price} SDG</p>`).join('');
    }
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if(cart.length === 0) {
        alert("السلة فارغة، اختر وجباتك أولاً!");
        return;
    }

    const name = document.getElementById('custName').value;
    const address = document.getElementById('custAddress').value;
    const messageDiv = document.getElementById('orderMessage');

    messageDiv.innerHTML = `
        <div style="background: #e9f7ef; color: #27ae60; padding: 20px; border-radius: 10px; margin-top: 20px; border: 1px solid #27ae60;">
            <h3>شكراً يا ${name}، تم تأكيد طلبك!</h3>
            <p>سيتم توصيل ${cart.length} وجبات إلى: <b>${address}</b></p>
            <p>المبلغ المطلوب عند الاستلام: <b>${total.toLocaleString()} SDG</b></p>
        </div>
    `;

    cart = [];
    total = 0;
    updateUI();
    this.reset();
});
