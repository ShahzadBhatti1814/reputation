
let=[]

function signup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("usersArray")) || [];
    const userExists = existingUsers.find(user => user.email === email);

    if (userExists) {
        alert("User with this email already exists. Please log in.");
        window.location.href = "login.html";
        return;
    }

    existingUsers.push({ name, email, password });
    localStorage.setItem("usersArray", JSON.stringify(existingUsers));
    alert("Sign up successful! Please log in.");
    window.location.href = "login.html";
}
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const users = JSON.parse(localStorage.getItem("usersArray")) || [];

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "hello.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    function checkUserAuthentication() {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        const currentPath = window.location.pathname;
        if (loggedInUser) {
            if (currentPath.endsWith("signup.html") || currentPath.endsWith("login.html")) {
                window.location.href = "hello.html";
            } else if (currentPath.endsWith("hello.html")) {
                const userNameElement = document.getElementById("username");
                if (userNameElement) {
                    userNameElement.textContent = loggedInUser.name;
                }
            }
        } else {
            if (currentPath.endsWith("hello.html")) {
                window.location.href = "login.html";
            }
        }
    }
    checkUserAuthentication();
});