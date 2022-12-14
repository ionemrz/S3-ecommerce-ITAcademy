// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

function handleCartClick() {
    generateCart();
    applyPromotionsCart();
    printCart();

}

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (let i = 0; i < products.length; i++){
        if(i === id){
          cartList.push(products[i - 1]);
        }
               
        console.log(cartList);
           
    }
    document.getElementById("count_product").innerHTML ++;
}

// Exercise 2
function cleanCart() {
    cart.length = 0;
    cartList.length = 0;
    document.getElementById("count_product").innerHTML = 0;
    document.getElementById("total_price").innerHTML = 0; 
    document.getElementById("cart_list").innerHTML = "";
    
    console.log(cartList);

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i < cartList.length; i++){
        total += cartList[i].price;
    }
    console.log(total);
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    cartList.forEach((item) => {
        item.quantity = 1;
        item.subtotal = 0;
        item.subtotalWithDiscount = 0;
    });
    console.log(cartList);
    

    //         name: 'cooking oil',
    //         price: 10.5,
    //         type: 'grocery',
    //         quantity: 5,
    //         subtotal: 31.5,
    //         subtotalWithDiscount: 30
    

    cartList.sort((a, b) => {
        return a.id - b.id;
      });

    for (let i = 0; i < cartList.length; i++) {

        if (cart.length === 0) {
            cart.push(cartList[i])
        } else {
            let currentId = cartList[i].id;

            for (let j = 0; j < cart.length; j++) {
                let cartId;
                do {
                    cartId = cart[j].id;
                    if (currentId === cartId) {
                        cart[j].quantity ++;
                        break;
                    } else {
                        j++;
                    }
                } while (j < cart.length);

                if (currentId !== cartId) {
                    cart.push(cartList[i]);
                }

            } 
                

        }
    }
    // alert(JSON.stringify(cart));
    console.log(cart);
        
}


// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

console.log(cart);

    for (i = 0; i < cart.length; i++) {
        cart[i].subtotal = cart[i].price * cart[i].quantity;
        alert(`The price of ${cart[i].quantity} units of ${cart[i].name} is $${JSON.stringify(cart[i].subtotal)}.`);

        if (cart[i].id === 1 && cart[i].quantity >= 3) {
            cart[i].subtotalWithDiscount = cart[i].subtotal - 10;
            alert(`The price of ${cart[i].name} with discount is $${JSON.stringify(cart[i].subtotalWithDiscount)}.`);

        } else if (cart[i].id === 3 && cart[i].quantity >= 10){
            cart[i].subtotalWithDiscount = cart[i].subtotal / 3 * 2;
            alert(`The price of ${cart[i].name} with discount $${JSON.stringify(cart[i].subtotalWithDiscount)}.`);

        }

    }

}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    var cartModal = '';
    let totalPrice = 0;
    for (i = 0; i < cart.length; i++){
        
        if (cart[i].subtotalWithDiscount !== 0) {
            cartModal += `<tr><th scope="row"> ${cart[i].name}</th> <td>${cart[i].price}</td> <td>${cart[i].quantity}</td> <td>${cart[i].subtotalWithDiscount}</td></tr>` ;
            totalPrice += cart[i].subtotalWithDiscount;
            document.getElementById("cart_list").innerHTML = cartModal;
        } else {
            cartModal += `<tr><th scope="row"> ${cart[i].name}</th> <td>${cart[i].price}</td> <td>${cart[i].quantity}</td> <td>${cart[i].subtotal}</td></tr>` ;
            totalPrice += cart[i].subtotal;
            document.getElementById("cart_list").innerHTML = cartModal;
        }
        document.getElementById("total_price").innerHTML = totalPrice;   
    }
    
    
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}