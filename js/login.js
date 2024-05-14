// holder for email and password
var attempt = 0;

function clearTextbox() {
    document.getElementById("email").innerHTML = "";
    document.getElementById("password").innerHTML = "";
}
function openMainPage() {
    window.location.href = "main.html";
}
function login() {
    // retrieve accounts
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if (email == "admin" && pass == "admin") {
        window.location.href = "main.html";
    } 
    else {
        attempt++;
        // error
        document.getElementById("email").innerHTML = "";
        document.getElementById("password").innerHTML = "";
        alert("Wrong attempt " + attempt);
        if (attempt == 3) {
            alert("You have entered 3 consecutive wrong attempts. Please try again!");
        }
    }
}