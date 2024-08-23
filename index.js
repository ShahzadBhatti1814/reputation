let emptyArray = [];

console.log(localStorage.getItem("userObject"));
let users = [];
function signup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userObject = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem("userObject",JSON.stringify(userObject))
    
    users.push(userObject);
    window.location.href = "save.html";
}

function login() {
    //yar kinta band mara howa ha yar tmna
    console.log("checking")
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = "hello.html";
    } else {
        alert('Invalid email or password. Please try again.');
    }
    localStorage.setItem("userName", user.name);
    return;
}