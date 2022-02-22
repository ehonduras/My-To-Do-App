const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');
const signupUsername = document.getElementById('signup-password');
const signupEmail = document.getElementById('signup-email');
const signupName = document.getElementById('signup-name');
const signupPassword = document.getElementById('signup-password');
const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('login-btn');
const inputError = document.getElementById('input-error');
const signupForm = document.getElementsByClassName('signup-form');
const loginForm = document.getElementsByClassName('login-form');
const authenticatedUser = document.getElementById('authenticated-user');
const headerContainer = document.getElementById('header-container');

//Signup

const users = [];

function User (name, username, email, password){
    this.name = name, 
    this.username = username,
    this.email = email,
    this.password = password
}

function validateEmail(email){
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateUsername(username){
    let re = /^[a-z0-9_\.]+$/;
    return re.test(username);
}

function removeErrorMsg(){
    inputError.classList.add('hidden');
}

function createNewUser(){
    if(validateEmail(signupEmail.value) && validateUsername(signupUsername.value)){
        let user = new User(signupName.value, signupUsername.value, signupEmail.value, signupPassword.value);
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        inputError.classList.remove('hidden');
    }
    signupForm[0].reset();
    setTimeout(removeErrorMsg, 3000);
}

//login

function checkCredentials(){
    let allUsers = JSON.parse(localStorage.getItem('users'));
    allUsers.forEach(user => {
        if(loginUsername.value == user.username && loginPassword.value == user.password){
            authenticatedUser.textContent = `Hi ${user.name}!`;
            authenticatedUser.style.marginRight = '300px';
            headerContainer.appendChild(authenticatedUser);
            document.querySelectorAll('.login-buttons').forEach(x => x.remove());
            loginForm[0].reset();
            loginFormContainer.classList.add('hidden');
            appContainer.classList.remove('hidden');
        }
    });
    
}

signupBtn.addEventListener('click', createNewUser);
loginBtn.addEventListener('click', checkCredentials);