let showWelcomMsg=document.getElementById('showWelcomMsg');
let users=JSON.parse(localStorage.getItem('usersList'));
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
document.addEventListener('DOMContentLoaded', function() {
    const userIndex = getQueryParam('userIndex');
    if (userIndex !== null) {
        showWelcomMsg.innerHTML=`<h1>Welcome ${users[userIndex].name}</h1>`;
    }
});