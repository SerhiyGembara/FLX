var User = prompt ("Please enter your login", "Login");
if (User === "") {
    alert ("Canceled");
} else if (User.length < 4) { 
    alert ("I don't know any users having name length less than 4 symbols"); 
} else if (User === "User" || User === "Admin") {
    var pass = prompt ("Please enter your password", "Password");
} else {
    alert ("I don't know you");
}
if ((User === "User" && pass ==="UserPass") || (User === "Admin" && pass ==="RootPass")) {
    var time = new Date().getHours();
    if (User === "User" && time < 20) {
        alert ("Good day, dear User!");
    } else if (User === "User") {
        alert ("Good evening, dear User!");
    }
    if (User === "Admin" && time < 20) {
        alert ("Good day, dear Admin!");
    } else if (User === "Admin") {
        alert ("Good evening, dear Admin!");
    }
} else if (pass === "" || pass === null) {
    alert ("Canceled");
} else {
    alert ("Wrong password")
}
