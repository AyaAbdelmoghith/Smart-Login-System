const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const inputValidation = document.querySelector(".input-validation");
const emailValidation = document.querySelector(".email-validation");
const passValidation = document.querySelector(".pass-validation");
let usersData = JSON.parse(localStorage.getItem('usersList'));
let user;
loginBtn.addEventListener('click', checkStatus);
function checkStatus(event) {
    event.preventDefault();
    emptyFeilds();
    let index = inputValidationFunc();
    if (index !== -1) {
        inputValidation.style.display = 'none';
        clearFieldsStyle();
        window.location.assign(`home.html?userIndex=${index}`);
    }
    else if (index === -1 && email.value.length !== 0 && password.value.length !== 0)
        inputValidation.style.display = 'block';
}

function emptyFeilds() {
    if (email.value.length === 0)
        emailValidation.style.display = 'block';
    else
        emailValidation.style.display = 'none';
    if (password.value.length === 0)
        passValidation.style.display = 'block';
    else
        passValidation.style.display = 'none';
}
function inputValidationFunc() {
    const inputEmail = email.value.trim().toLowerCase();
    const inputPass = password.value.trim();
    const foundIndex = usersData.findIndex((userObj) => {
        return (userObj.email === inputEmail) && (userObj.password === inputPass)
    });
    return foundIndex;
}

function clearFieldsStyle() {
    email.style.borderBottomColor = '#FFF';
    password.style.borderBottomColor = '#FFF';
}
email.addEventListener('blur', emailValidationFunc);
email.addEventListener('input', emailValidationFunc);

password.addEventListener('blur', passValidationFunc);
password.addEventListener('input', passValidationFunc);

function emailValidationFunc() {
    email.style.borderBottomColor = 'green';
    if (email.value.length === 0)
        emailValidation.style.display = 'block';
    else
        emailValidation.style.display = 'none';

}
function passValidationFunc() {
    password.style.borderBottomColor = 'green';
    if (password.value.length === 0)
        passValidation.style.display = 'block';
    else
        passValidation.style.display = 'none';
}
