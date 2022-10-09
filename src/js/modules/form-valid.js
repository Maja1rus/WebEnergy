import { sendForm } from "./send-form.js";

export function formValid(elt, className) {

    const inputContact = elt.querySelectorAll(`.${className}__input`);
    const phoneContact = elt.querySelector(`.${className}__input--phone`);
    const emailContact = elt.querySelector(`.${className}__input--email`);
    const btnSubmit = elt.querySelector('.contact-form__btn');

    function validateEmail(email) {
        let result =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return result.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        let result = /\D/;
        return result.test(String(phone));
    }

    function addError(input) {
        input.classList.add(`${className}__input--error`);
    }

    function removeError(input) {
        input.classList.remove(`${className}__input--error`);
    }

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault()
        let emailVal = emailContact.value;
        let phoneVal = phoneContact.value;
        let emtyInputs = Array.from(inputContact).filter(
            input => input.value === ''
        );

        inputContact.forEach(function (input) {
            if (input.value === '') {
                addError(input);
            } else {
                removeError(input);
            }
        });

        if (emtyInputs.length !== 0) {
            console.log('Inputs nor filled');
            return false;
        }

        if (!validateEmail(emailVal)) {
            console.log('email not valid');
            addError(emailContact);
            return false;
        } else {
            removeError(emailContact);
        }

        if (!validatePhone(phoneVal)) {
            console.log('phone not valid');
            addError(phoneContact);
            return false;
        } else {
            removeError(phoneContact);
        }

        sendForm(elt);
    });
}