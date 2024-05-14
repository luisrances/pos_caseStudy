// let cart = []
// let cartPrice = []
// function addToCart(index) {
//     cart.push(index);
//     let price = document.getElementsByClassName("card__by").value
//     document.getElementById("try").innerHTML = cart;
// }
// function deleteFromCart(index) {
//     let i = 0;
//     while (i < cart.length) {
//         if (cart[i] === value) {
//             cart.splice(i, 1);
//         } else {
//             i++;
//         }
//     }
//     document.getElementById("try").innerHTML = cart;
// }

// add to cart
let cart = [];
let current_product = "";
function addToCart() {
    cart.push(current_product);
    alert("Item added successfully to cart");
    popupContainer.style.display = "none";
}
function removeFromCart(index) {
    cart.splice(index, 1);
    showCart();
}

function showCart() {
    const cartList = document.getElementById("cartList");
    let hmtlText = "";
    cart.forEach((itemIndex) => {
        hmtlText = hmtlText + '<div class="product"><p>' + itemIndex.name + '</p><p>Price: '+ itemIndex.price + '</p></div>';
    });
    // let text = document.createTextNode("gumana");
    // cartList.appendChild(text);
    document.getElementById("cartList").innerHTML = hmtlText;


    // Show the cart popup
    document.getElementById("cartContainer").style.display = "block";
}

// modal popup
// Get the popup container and trigger button elements
const popupContainer = document.getElementById("popup-container");
const popupTrigger = document.getElementById("popup-trigger");
const popupContent = document.getElementById("popup-content");
const popupExit = document.getElementById("popup-exit");
// for cart
const cartContainer = document.getElementById("cartContainer");
const cartExit = document.getElementById("cart-exit");

let price;
function displayProduct(product) {
    current_product = product;
    document.getElementById("product_img").src = product.image;
    document.getElementById("product_name").innerHTML = product.name;
    document.getElementById("product_price").innerHTML = "php " + product.price;
    price = product.price;
    document.getElementById("product_desc").innerHTML = product.desc;


    quantityCounter = 1;
    document.getElementById("txtQuantity").value = quantityCounter;
    document.getElementById("lblPrice").innerHTML = "price: " + parseFloat((price * quantityCounter).toFixed(2));
    // Show the popup container
    popupContainer.style.display = "block";
}
// Add an event listener to the popup container to close it when clicked outside
popupContainer.addEventListener("click", (e) => {
    if (e.target === popupContainer) {
        popupContainer.style.display = "none";
    }
});
//cart container
cartContainer.addEventListener("click", (e) => {
    if (e.target === cartContainer) {
        cartContainer.style.display = "none";
    }
});
popupExit.addEventListener("click", () => {
    popupContainer.style.display = "none";
});
cartExit.addEventListener("click", () => {
    cartContainer.style.display = "none";
});
//buy now clicked
const buyNow = document.getElementById("buyNow");
const buyNowContainer = document.getElementById("buynow-container");
const btnOk = document.getElementById("btnOk");
const addressContainer = document.getElementById("address-container");
const btnAddress = document.getElementById("btnAddress");
// contact and delivery informations 
buyNow.addEventListener("click", () => {
    popupContainer.style.display = "none";
    addressContainer.style.display = "block";
});
btnAddress.addEventListener("click", () => {
    addressContainer.style.display = "none";
    buyNowContainer.style.display = "block";
});
// Add an event listener to the popup container to close it when clicked outside
addressContainer.addEventListener("click", (e) => {
    if (e.target === addressContainer) {
        addressContainer.style.display = "none";
    }
});
//order validated
btnOk.addEventListener("click", () => {
    buyNowContainer.style.display = "none";
});
// Add an event listener to the popup container to close it when clicked outside
buyNowContainer.addEventListener("click", (e) => {
    if (e.target === buyNowContainer) {
        buyNowContainer.style.display = "none";
    }
});

// quantity and price
document.getElementById("txtQuantity").value = 1;
let quantityCounter = 1;
function add(){
    quantityCounter += 1;
    document.getElementById("txtQuantity").value = quantityCounter;
    document.getElementById("lblPrice").innerHTML = "price: " + parseFloat((price * quantityCounter).toFixed(2));
}
function minus(){
    if(quantityCounter == 1) {
    } else {
        quantityCounter -= 1;
        document.getElementById("txtQuantity").value = quantityCounter;
    document.getElementById("lblPrice").innerHTML = "price: " + parseFloat((price * quantityCounter).toFixed(2));
    }
}

// The product data
let index1 = {
    image: "css/images/Picture1.png",
    name: "Yonex",
    price: 99.99,
    desc: "This is a product description."
};