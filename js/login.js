// holder for email and password
var attempt = 0;

function clearTextbox() {
    document.getElementById("email").innerHTML = "";
    document.getElementById("password").innerHTML = "";
}
function openMainPage() {
    window.location.href = "main.html";
    return true;
}
// function login() {
//     // retrieve accounts
//     var email = document.getElementById("email").value;
//     var pass = document.getElementById("password").value;
//     if (email == "admin" && pass == "admin") {
//         attempt = 0;
//         window.location.href = "main.html";
//         document.getElementById("email").innerHTML = "";
//         document.getElementById("password").innerHTML = "";
//     } else {
//         attempt++;
//         // error
//         document.getElementById("email").value = "";
//         document.getElementById("password").value = "";
//         alert("Invalid email or password");
//         if (attempt == 3) {
//             document.getElementById("email").disabled = true;
//             document.getElementById("password").disabled = true;
//             document.getElementById("btnLogin").disabled = true;
//             document.getElementById("email").innerHTML = "";
//             document.getElementById("password").innerHTML = "";
//             document.getElementById("email").value = null;
//             document.getElementById("password").value = null;
//             alert("You have entered 3 consecutive wrong attempts. Please try again!");
//         }
//     }
// }

// signup

let userEmails = [];
let userPasswords = [];

// Sign up function
function signUp(email, password) {
    if (email.trim() === "" || password.trim() === "") {
        alert("Email and password cannot be empty");
    } else {
        alert(email + "  " + password);
        userEmails.push(email);
        userPasswords.push(password);
        // Convert the arrays to a JSON string and store it in local storage
        localStorage.setItem('userCredentials', JSON.stringify({ userEmails, userPasswords }));
        window.location.href = "index.html";
    }
}

// Login function
function login() {
    // Retrieve the JSON string from local storage and convert it back to arrays
    let userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
    userEmails = userCredentials.userEmails;
    userPasswords = userCredentials.userPasswords;

    // get input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "admin" && password == "admin") {
        attempt = 0;
        window.location.href = "main.html";
        document.getElementById("email").innerHTML = "";
        document.getElementById("password").innerHTML = "";
    } else {
        if (userEmails.includes(email) && userPasswords[userEmails.indexOf(email)] === password) {
            attempt = 0;
            window.location.href = "main.html";
            document.getElementById("email").innerHTML = "";
            document.getElementById("password").innerHTML = "";
        } else {
            attempt++;
            // error
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            alert("Invalid email or password");
            if (attempt == 3) {
                document.getElementById("email").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("btnLogin").disabled = true;
                document.getElementById("email").innerHTML = "";
                document.getElementById("password").innerHTML = "";
                document.getElementById("email").value = null;
                document.getElementById("password").value = null;
                alert("You have entered 3 consecutive wrong attempts. Please try again!");
            }
        }
    }
    
}
