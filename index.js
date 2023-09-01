const form = document.querySelector('.form');
const emailInput = document.querySelector('.form__email');
const formMessage = document.querySelector('.form__message');
const emailValidation = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g);

const EMPTY_EMAIL = 'Email cannot be empty';
const INVALID_EMAIL = 'Please provide a valid email address';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (emailInput.value.trim() === '') {
        form.classList.add('form--error');
        formMessage.textContent = EMPTY_EMAIL;
    } else if (!emailInput.value.match(emailValidation)) {
        form.classList.add('form--error');
        formMessage.textContent = INVALID_EMAIL;
    } else {
        form.classList.remove('form--error');
        emailInput.value = '';
        formMessage.textContent = '';
    }
})