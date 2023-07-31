const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const inputValidation = document.querySelector(".input-validation");
const emailValidation = document.querySelector(".email-validation");
const passValidation = document.querySelector(".pass-validation");
const emptyUsersList = document.querySelector(".empty-users-list");
let usersData = [];
let user;
loginBtn.addEventListener('click', checkStatus);
function checkStatus(event) {
    event.preventDefault();
    if (email.value.length === 0 && password.value.length === 0)
        emptyFeilds();
    else {
        if (isDataExist()) {
            let index = inputValidationFunc();
            if (index !== -1) {//means user is registered
                inputValidation.style.display = 'none';
                clearFieldsStyle();
                window.location.assign(`home.html?userIndex=${index}`);
            }
            else //means user is not registered so incorect username or password
                inputValidation.style.display = 'block';
        }
        else
            emptyUsersList.style.display = 'block';//means no list for any user.
    }
}

function emptyFeilds() {
    inputValidation.style.display = 'none';
    emptyUsersList.style.display = 'none';
    if (email.value.length === 0)
        emailValidation.style.display = 'block';
    if (password.value.length === 0)
        passValidation.style.display = 'block';
}
function isDataExist() {
    if (localStorage.getItem('usersList') !== null) {
        usersData = JSON.parse(localStorage.getItem('usersList'));
        return true;
    }
    else
        return false;
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
    if (email.value.length === 0) {
        emailValidation.style.display = 'block';
        inputValidation.style.display = 'none';
        emptyUsersList.style.display = 'none';

    }
    else {
        emailValidation.style.display = 'none';
    }

}
function passValidationFunc() {
    password.style.borderBottomColor = 'green';
    if (password.value.length === 0) {
        passValidation.style.display = 'block';
        inputValidation.style.display = 'none';
        emptyUsersList.style.display = 'none';

    }
    else {
        passValidation.style.display = 'none';
    }
}
