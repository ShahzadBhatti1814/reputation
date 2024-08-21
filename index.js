let emptyArray = [];
let userObject = {
    name: "Shahzad Bhatti",
    email: "sb393310@gmail.com",
    password: "shahzad123"
};
 const result = emptyArray.push(userObject);
console.log(emptyArray);

let users = [];

function signup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('sb393310@gmail.com').value;
    const password = document.getElementById('@shahzad123').value;
    const userObject = {
        name: name,
        email: email,
        password: password
    };
  const use  =   users.push(userObject);
    console.log(use);
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
   
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        
        window.href = 'hello.html';
    } else {
       
        document.getElementById('loginMessage').textContent = 'Invalid email or password!';
    }
}