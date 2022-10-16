const btn = document.querySelector('.form__btn');
const fName = document.querySelector('#fName');
const warningFirstName = document.querySelector('.warning-fName');
const lName = document.querySelector('#lName');
const warningLastName = document.querySelector('.warning-lName');
const email = document.querySelector('#email');
const warningEmail = document.querySelector('.warning-email');
const password = document.querySelector('#password');
const warningPassword = document.querySelector('.warning-password');

btn.addEventListener('click', () => {
    if (fName.value == '') {
        warningFirstName.classList.remove('hidden');
        fName.classList.add('warning--input');
    }
    if (lName.value == '') {
        warningLastName.classList.remove('hidden');
        lName.classList.add('warning--input');
    }
    if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        warningEmail.classList.remove('hidden');
        email.classList.add('warning--input');
    }
    if (password.value == '') {
        warningPassword.classList.remove('hidden');
        password.classList.add('warning--input');
    }
})