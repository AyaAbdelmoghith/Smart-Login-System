const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const signUpBtn = document.getElementById('signUpBtn');
const nameTaken = document.querySelector(".name-taken");
const nameValidation = document.querySelector(".name-validation");
const emailTaken = document.querySelector(".email-taken");
const emailValidation = document.querySelector(".email-validation");
const passValidation = document.querySelector(".pass-validation");
const registered = document.querySelector('.registered');
let usersList = [];
if (localStorage.getItem("usersList") === null)
    usersList = [];
else {
    usersList = JSON.parse(localStorage.getItem('usersList'));
}

signUpBtn.addEventListener('click', addUser);
function addUser(event) {
    event.preventDefault();
    let user = {
        name: userName.value.trim().toLowerCase(),
        email: userEmail.value.trim().toLowerCase(),
        password: userPassword.value
    };
    emptyFeilds();

    if (nameRegexFunc() && emailRegexFunc() && passRegexFunc() && isUniqueName() && isUniqueEmail()) {
        usersList.push(user);
        localStorage.setItem('usersList', JSON.stringify(usersList));

        clearFieldsStyle();
        registered.style.display = 'block'
        window.setTimeout(() => {
            registered.style.display = 'none';
        }, 6000);

        reset();
    }
}
function reset() {
    userName.value = '';
    userEmail.value = '';
    userPassword.value = '';
}
function clearFieldsStyle() {
    userName.style.borderBottomColor = '#FFF';
    userEmail.style.borderBottomColor = '#FFF';
    userPassword.style.borderBottomColor = '#FFF';
}
function emptyFeilds() {
    if (userName.value.length === 0)
        nameValidation.style.display = 'block';
    else
        nameValidation.style.display = 'none';
    if (userEmail.value.length === 0)
        emailValidation.style.display = 'block';
    else
        emailValidation.style.display = 'none';
    if (userPassword.value.length === 0)
        passValidation.style.display = 'block';
    else
        passValidation.style.display = 'none';
}
userName.addEventListener('input', nameValidationFunc);
userName.addEventListener('blur', nameValidationFunc);

userEmail.addEventListener('input', emailValidationFunc);
userEmail.addEventListener('blur', emailValidationFunc);

userPassword.addEventListener('input', passValidationFunc);
userPassword.addEventListener('blur', passValidationFunc);
function nameRegexFunc() {
    const nameRegex = /^[a-zA-Z]{3,}$/;
    return nameRegex.test(userName.value);
}
function emailRegexFunc() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(userEmail.value);
}
function passRegexFunc() {
    const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passRegex.test(userPassword.value);
}
userName.addEventListener('input', isUniqueName);
userName.addEventListener('blur', isUniqueName);
function isUniqueName() {
    const newName = userName.value.trim().toLowerCase();
    return !usersList.some(user => user.name === newName);
}
userEmail.addEventListener('input', isUniqueEmail);
userEmail.addEventListener('blur', isUniqueEmail);
function isUniqueEmail() {
    const newEmail = userEmail.value.trim().toLowerCase();
    return !usersList.some(user => user.email === newEmail);//some will return true if found an existing email so !true to be false it's not unique
}

function nameValidationFunc() {
    userName.style.borderBottomColor = 'blue';
    if (nameRegexFunc())
        nameValidation.style.display = 'none';
    else 
        nameValidation.style.display = 'block';
    
    if (isUniqueName())
        nameTaken.style.display = 'none';
    else
        nameTaken.style.display = 'block';

}

function emailValidationFunc() {
    userEmail.style.borderBottomColor = 'green';
    if (emailRegexFunc())
        emailValidation.style.display = 'none';
    else
        emailValidation.style.display = 'block';
    if (isUniqueEmail())
        emailTaken.style.display = 'none';
    else
        emailTaken.style.display = 'block';
}
function passValidationFunc() {
    userPassword.style.borderBottomColor = 'red';
    if (passRegexFunc())
        passValidation.style.display = 'none';
    else
        passValidation.style.display = 'block';

}
