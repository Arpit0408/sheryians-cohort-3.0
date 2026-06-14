// addItem("Notebook", 50, 2);

// let cartitem={
//  item:String,
//  price:Number,
//  quantity:Number
// }

let cart = [];

function addItem(name, price, qty = 1) {
    let existingCart = cart.find((item) => item.name === name);
    if (existingCart) {
        existingCart.qty += qty
    }
    else {
        cart.push({ name, price, qty })
    }
}


function removeItem(name) {
    let existItem = cart.find((i) => i.name === name)
    if (existItem) {
        const index = cart.indexOf(existItem);
        cart.splice(index, 1);
    }
}

function getTotal() {
    cart.reduce((acc, item) => acc + item.price * item.qty, 0)
}

function showCart() {
    cart.forEach((item) => {
        console.log(`${item.name} x${item.qty} = ₹${item.price * item.qty}`);

    })
}

addItem("Notebook", 50, 2);
addItem("Pen", 10, 5);
addItem("Notebook", 50);   // adds to existing
showCart();