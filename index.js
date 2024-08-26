// let emptyArray = [];

// function signup() {
// 	const name = document.getElementById("name").value;
// 	const email = document.getElementById("email").value;
// 	const password = document.getElementById("password").value;
// 	const userObject = {
// 		name: name,
// 		email: email,
// 		password: password,
// 	};
// 	localStorage.setItem("userObject", JSON.stringify(userObject));

// 	window.location.href = "login.html";
// }
// function login() {
// 	const users = [];
// 	const userData = localStorage.getItem("userObject");
// 	const userObject = JSON.parse(userData);
// 	users.push(userObject);
// 	console.log("checking");
// 	const email = document.getElementById("email").value;
// 	const password = document.getElementById("password").value;
// 	const user = users.find(
// 		(user) => user.email === email && user.password === password,
// 	);

// 	if (user) {
// 		alert("Login successful!");
// 		window.location.href = "hello.html";
// 	} else {
// 		alert("Invalid email or password. Please try again.");
// 		window.location.href = "index.html";
// 	}
// 	localStorage.setItem("userName", user.name);
// 	return;
// }
// document.addEventListener("DOMContentLoaded", function() {
//     const userData = localStorage.getItem("userObject");
    
//     if (!userData) {
//         window.location.href = "login.html";
//     }
// });
// function logout() {
//     localStorage.removeItem("userObject");
//     localStorage.removeItem("userName");
//     window.location.href = "login.html";
// }

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
    alert("Signup successful! Please login.");
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
        alert("Login successful!");
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "hello.html";
    } else {
        alert("Invalid email or password. Please try again.");
        window.location.href = "login.html";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    
    if (!loggedInUser) {
        alert("You need to log in first!");
        window.location.href = "login.html";
    } else {
        
        const userNameElement = document.getElementById("username");
        if (userNameElement) {
            userNameElement.textContent = loggedInUser.name;
        }
    }
});