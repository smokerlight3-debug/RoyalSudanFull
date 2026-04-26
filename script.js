let cart=[];let total=0;
function addToCart(n,p){cart.push({name:n,price:p});total+=p;updateCartUI();}
function updateCartUI(){document.getElementById('cart-count').innerText=cart.length;}
