// // let=[]

// // function signup() {
// //     const name = document.getElementById("name").value;
// //     const email = document.getElementById("email").value;
// //     const password = document.getElementById("password").value;

// //     if (!name || !email || !password) {
// //         alert("Please fill in all fields.");
// //         return;
// //     }

// //     const existingUsers = JSON.parse(localStorage.getItem("usersArray")) || [];
// //     const userExists = existingUsers.find(user => user.email === email);

// //     if (userExists) {
// //         alert("User with this email already exists. Please log in.");
// //         window.location.href = "login.html";
// //         return;
// //     }

// //     existingUsers.push({ name, email, password });
// //     localStorage.setItem("usersArray", JSON.stringify(existingUsers));
// //     alert("Sign up successful! Please log in.");
// //     window.location.href = "login.html";
// // }
// // function login() {
// //     const email = document.getElementById("email").value;
// //     const password = document.getElementById("password").value;
// //     const users = JSON.parse(localStorage.getItem("usersArray")) || [];

// //     if (!email || !password) {
// //         alert("Please fill in all fields.");
// //         return;
// //     }

// //     const user = users.find(user => user.email === email && user.password === password);

// //     if (user) {
// //         localStorage.setItem("loggedInUser", JSON.stringify(user));
// //         window.location.href = "hello.html";
// //     } else {
// //         alert("Invalid email or password. Please try again.");
// //     }
// // }
// // document.addEventListener("DOMContentLoaded", function () {
// //     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
// //     const currentPath = window.location.pathname;
// //     if (currentPath.endsWith("signup.html") || currentPath.endsWith("login.html")) {
// //         if (loggedInUser) {
// //             window.location.href = "hello.html";
// //         }
// //     } else if (currentPath.endsWith("hello.html")) {
// //         if (!loggedInUser) {
// //             window.location.href = "hello.html";
// //         } else {
// //             const userNameElement = document.getElementById("username");
// //             if (userNameElement) {
// //                 userNameElement.textContent = loggedInUser.name;
// //             }
// //         }
// //     }
// // });

// document.addEventListener("DOMContentLoaded", function () {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     const currentPath = window.location.pathname;

//     if (loggedInUser) {
//         // If user is logged in, redirect away from signup and login pages
//         if (currentPath.endsWith("signup.html") || currentPath.endsWith("login.html")) {
//             window.location.href = "hello.html";
//         } else if (currentPath.endsWith("hello.html")) {
//             // Display the user's name on the hello page
//             const userNameElement = document.getElementById("username");
//             if (userNameElement) {
//                 userNameElement.textContent = loggedInUser.name;
//             }
//         }
//     } else {
//         // If user is not logged in, redirect to login page if they try to access hello.html
//         if (currentPath.endsWith("hello.html")) {
//             window.location.href = "login.html";
//         }
//     }
// });

// function signup() {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     if (!name || !email || !password) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     const existingUsers = JSON.parse(localStorage.getItem("usersArray")) || [];
//     const userExists = existingUsers.find(user => user.email === email);

//     if (userExists) {
//         alert("User with this email already exists. Please log in.");
//         window.location.href = "login.html";
//         return;
//     }

//     existingUsers.push({ name, email, password });
//     localStorage.setItem("usersArray", JSON.stringify(existingUsers));
//     alert("Sign up successful! Please log in.");
//     window.location.href = "login.html";
// }

// function login() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const users = JSON.parse(localStorage.getItem("usersArray")) || [];

//     if (!email || !password) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     const user = users.find(user => user.email === email && user.password === password);

//     if (user) {
//         localStorage.setItem("loggedInUser", JSON.stringify(user));
//         window.location.href = "hello.html";
//     } else {
//         alert("Invalid email or password. Please try again.");
//     }
// }

document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
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
            window.location.href = "login.html";
        }
    }
);

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
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "hello.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}