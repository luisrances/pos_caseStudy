//categpries
function showbadminton() {
    let container = document.querySelector("#badminton")
    container.scrollIntoView(true);
}
function showbasketball() {
    let container = document.querySelector("#basketball")
    container.scrollIntoView(true);
}
function showvolleyball() {
    let container = document.querySelector("#volleyball")
    container.scrollIntoView(true);
}
function showbaseball() {
    let container = document.querySelector("#baseball")
    container.scrollIntoView(true);
}
function showfootball() {
    let container = document.querySelector("#football")
    container.scrollIntoView(true);
}
// add to cart
let cart = [];
let current_product = "";
function addToCart() {
    cart.push(current_product);
    // Create a Set object from the array to remove duplicate values
    const setArr = new Set(cart);
    cart = Array.from(setArr);
    alert("Item added successfully to cart");
    popupContainer.style.display = "none";
}
function removeFromCart(index) {
    cart.splice(index, 1);
    showCart();
}
let productIndex = -1;
function showCart() {
    let htmlText = "";
    productIndex = -1;
    cart.forEach((itemIndex) => {
        productIndex = productIndex + 1;
        htmlText = htmlText + '<div id="product"><div class="product-img"><img src="' + itemIndex.image + '" height="80"></div><div class="product-details"><p>' + itemIndex.name + '</p><p>' + itemIndex.price + '</p></div><div class="product-edit"><button id="product-remove" onclick="removeFromCart(' + productIndex + ')">Remove</button><div class="number"><input type="number" min="1" value=1'  + ' id="txtQuantity-checkout"/></div></div></div>';
    });
    document.getElementById("cartList").innerHTML = htmlText;
    document.getElementById("cartContainer").style.display = "block";
}

// popup
const popupContainer = document.getElementById("popup-container");
const popupTrigger = document.getElementById("popup-trigger");
const popupContent = document.getElementById("popup-content");
const popupExit = document.getElementById("popup-exit");
// cart
const cartContainer = document.getElementById("cartContainer");
const cartExit = document.getElementById("cart-exit");
const buyNow_checkout = document.getElementById("buyNow_checkout");
// buy now
const buyNow = document.getElementById("buyNow");
const buyNowContainer = document.getElementById("buynow-container");
// order validated
const btnOk = document.getElementById("btnOk");
// delivery info
const addressContainer = document.getElementById("address-container");
const btnAddress = document.getElementById("btnAddress");

let price;
function displayProduct(product) {
    current_product = product;
    document.getElementById("product_img").src = product.image;
    document.getElementById("product_name").innerHTML = product.name;
    document.getElementById("product_price").innerHTML = "php " + product.price;
    price = product.price;
    quantityCounter = 1;
    document.getElementById("txtQuantity").value = quantityCounter;
    document.getElementById("lblPrice").innerHTML = "price: " + parseFloat((price * quantityCounter).toFixed(2));
    // Show the popup container
    popupContainer.style.display = "block";
}

// popup
popupExit.addEventListener("click", () => {
    popupContainer.style.display = "none";
});
// cart
cartExit.addEventListener("click", () => {
    cartContainer.style.display = "none";
});
// popup buynow
buyNow.addEventListener("click", () => {
    popupContainer.style.display = "none";
    addressContainer.style.display = "block";
});
// cart buynow
buyNow_checkout.addEventListener("click", () => {
    if (cart.length > 0) {
        cart.splice(0, cart.length);
        cartContainer.style.display = "none";
        addressContainer.style.display = "block";
    } else {
        alert("Your cart is empty! please add some items first");
        cartContainer.style.display = "none";
    }
});
// delivery info
btnAddress.addEventListener("click", () => {
let firstname = document.getElementById("firstname").value;
let lastname = document.getElementById("lastname").value;
let email = document.getElementById("email").value;
let contact = document.getElementById("contact").value;
let address = document.getElementById("address").value;
    if (firstname.trim().length == 0 || lastname.trim().length == 0 || email.trim().length == 0 || contact.trim().length == 0 || address.trim().length == 0) {
        alert("Please provide the required informations");
    } else {
        addressContainer.style.display = "none";
        buyNowContainer.style.display = "block";
    }
});
//order validated
btnOk.addEventListener("click", () => {
    buyNowContainer.style.display = "none";
});

// Add an event listener to the popup container to close it when clicked outside
popupContainer.addEventListener("click", (e) => {
    if (e.target === popupContainer) {
        popupContainer.style.display = "none";
    }
});
cartContainer.addEventListener("click", (e) => {
    if (e.target === cartContainer) {
        cartContainer.style.display = "none";
    }
});
buyNowContainer.addEventListener("click", (e) => {
    if (e.target === buyNowContainer) {
        buyNowContainer.style.display = "none";
    }
});
addressContainer.addEventListener("click", (e) => {
    if (e.target === addressContainer) {
        addressContainer.style.display = "none";
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

// for delivery info container fynamic mode of payment
function handlePaymentMethod() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    const paymentDetailsContainer = document.getElementById("paymentDetails");

    // Clear existing payment details fields
    paymentDetailsContainer.innerHTML = "";

    switch (paymentMethod) {
        case "cash":
            // No additional fields needed for cash on delivery
            break;
        case "ewallet":
            // Add fields for e-wallet (e.g., wallet ID)
            paymentDetailsContainer.innerHTML = `
            <label for="ewalletId">E-Wallet ID:</label>
            <input type="text" id="ewalletId" name="ewalletId">
        `;
            break;
        case "creditcard":
            // Add fields for credit card (e.g., card number, CVV)
            paymentDetailsContainer.innerHTML = `
            <label for="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber">
            <br>
            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv">
        `;
            break;
        case "onlinebanking":
            // Add fields for online banking (e.g., bank account number)
            paymentDetailsContainer.innerHTML = `
            <label for="bankAccount">Bank Account Number:</label>
            <input type="text" id="bankAccount" name="bankAccount">
        `;
            break;
        default:
            // Handle other cases or show an error message
            break;
    }
}

// The product data
let index1 = {
    image: "css/images/a1.png",
    name: "YONEX Mavis 350",
    price: 600.00
};
let index2 = {
    image: "css/images/a2.jpg",
    name: "YONEX AS 30",
    price: 400.00
};
let index3 = {
    image: "css/images/a3.jpg",
    name: "RSL Tourney 4",
    price: 600.00
};
let index4 = {
    image: "css/images/a4.jpg",
    name: "HEAD Glider 505",
    price: 500.00
};
let index5 = {
    image: "css/images/a5.jpg",
    name: "Li-Ning Champ",
    price: 600.00
};
let index6 = {
    image: "css/images/a6.jpg",
    name: "Yonex Astrox 100 ZZ",
    price: 2200.00
};
let index7 = {
    image: "css/images/a7.jpg",
    name: "Victor JetSpeed S 12",
    price: 2100.00
};
let index8 = {
    image: "css/images/a8.jpg",
    name: "Yonex Astrox 88D PRO",
    price: 2000.00
};
let index9 = {
    image: "css/images/b1.png",
    name: "Wilson NBA Authentic Series",
    price: 2500.00
};
let index10 = {
    image: "css/images/b2.png",
    name: "Champion Sports Pro Style",
    price: 1500.00
};
let index11 = {
    image: "css/images/b3.png",
    name: "Wilson Evolution Game",
    price: 4000.00
};
let index12 = {
    image: "css/images/b4.png",
    name: "Spalding Marble Series Outdoor",
    price: 2000.00
};
let index13 = {
    image: "css/images/b5.png",
    name: "Wilson NCAA Killer Crossover",
    price: 2700.00
};
let index14 = {
    image: "css/images/c1.jpg",
    name: "Mikasa V200W",
    price: 6300.00
};
let index15 = {
    image: "css/images/c2.jpg",
    name: "Mikasa MR2 Sports",
    price: 3900.00
};
let index16 = {
    image: "css/images/c3.jpeg",
    name: "Molten V5M5000",
    price: 6100.00
};
let index17 = {
    image: "css/images/c4.jpg",
    name: "Molten MIKASA V300W",
    price: 1400.00
};
let index18 = {
    image: "css/images/d1.png",
    name: "Kipsta 11 BA100 Foam Baseball Single Ball",
    price: 150.00
};
let index19 = {
    image: "css/images/d2.png",
    name: "All-American Blank",
    price: 500.00
};
let index20 = {
    image: "css/images/d3.png",
    name: "SKLZ Baseball",
    price: 450.00
};
let index21 = {
    image: "css/images/d4.png",
    name: "Marucci CAT9 CONNECT",
    price: 14050.00
};
let index22 = {
    image: "css/images/d5.png",
    name: "Louisville Slugger 2022",
    price: 10100.00
};
let index23 = {
    image: "css/images/d6.png",
    name: "DeMarini 2022",
    price: 22300.00
};
let index24 = {
    image: "css/images/d7.png",
    name: "Louisville Slugger 2019",
    price: 23600.00
};
let index25 = {
    image: "css/images/d8.png",
    name: "EASTON Ghost X Evolution",
    price: 24700.00
};
let index26 = {
    image: "css/images/e1.png",
    name: "Nike Premier League Skills ball",
    price: 1000.00
};
let index27 = {
    image: "css/images/e2.png",
    name: "Nike USA Skills ball",
    price: 800.00
};
let index28 = {
    image: "css/images/e3.png",
    name: "Puma Orbita 1 La Liga Mini ball",
    price: 900.00
};
let index29 = {
    image: "css/images/e4.png",
    name: "adidas MLS Club ball",
    price: 1100.00
};
let index30 = {
    image: "css/images/e5.png",
    name: "Nike NWSL Academy ball",
    price: 2000.00
};
let index31 = {
    image: "css/images/e6.png",
    name: "Nike Flight ball",
    price: 9300.00
};
let index32 = {
    image: "css/images/e7.png",
    name: "New Balance Dynamite Team ball",
    price: 1700.00
};

