let emptyArray = [];

function signup() {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	const userObject = {
		name: name,
		email: email,
		password: password,
	};
	localStorage.setItem("userObject", JSON.stringify(userObject));

	window.location.href = "login.html";
}
function login() {
	const users = [];
	const userData = localStorage.getItem("userObject");
	const userObject = JSON.parse(userData);
	users.push(userObject);
	console.log("checking");
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	const user = users.find(
		(user) => user.email === email && user.password === password,
	);

	if (user) {
		alert("Login successful!");
		window.location.href = "hello.html";
	} else {
		alert("Invalid email or password. Please try again.");
		window.location.href = "index.html";
	}
	localStorage.setItem("userName", user.name);
	return;
}
document.addEventListener("DOMContentLoaded", function() {
    const userData = localStorage.getItem("userObject");
    
    if (userData) {
        alert("the user open hello.html file without login go back to the login page")
        window.location.href = "login.html";
    }
});
function logout() {
    localStorage.removeItem("userObject");
    localStorage.removeItem("userName");
    window.location.href = "login.html";
}