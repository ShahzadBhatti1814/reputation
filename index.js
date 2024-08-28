let usersArray = [];

function signup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const existingUsers = JSON.parse(localStorage.getItem("usersArray")) || [];
    const userExists = existingUsers.find(user => user.email === email);

    if (userExists) {
        alert("User with this email already exists. Please login.");
        window.location.href = "login.html";
        return;
    }

    const userObject = {
        name: name,
        email: email,
        password: password,
    };

    existingUsers.push(userObject);
    localStorage.setItem("usersArray", JSON.stringify(existingUsers));
    window.location.href = "login.html";
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const users = JSON.parse(localStorage.getItem("usersArray")) || [];

    const user = users.find(
        (user) => user.email === email && user.password === password
    );

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store logged-in user
        window.location.href = "hello.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const currentPath = window.location.pathname;

    console.log("Logged in user:", loggedInUser); 
    console.log("Current Path:", currentPath); 

    if (!loggedInUser && currentPath.endsWith("hello.html")) {
        console.log("Redirecting to login because user is not logged in");
        window.location.href = "login.html";
    } else if (loggedInUser && currentPath.endsWith("login.html")) {
        console.log("Redirecting to hello because user is logged in");
        window.location.href = "hello.html";
    } else if (loggedInUser && currentPath.endsWith("hello.html")) {
        console.log("Displaying username on hello.html");
        const userNameElement = document.getElementById("username");
        if (userNameElement) {
            userNameElement.textContent = loggedInUser.name;
        }
    }
});
