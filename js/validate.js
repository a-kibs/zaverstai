// валидация форм
const messageField = document.querySelector(".input-text__big");
const submitButton = document.querySelector(".submit-button");
const errorMessage = document.querySelector(".error-message");

const validate = function(){
    if (messageField.value.length < 10 || messageField.value.length > 200) {
        messageField.classList.add("invalid-text");
        errorMessage.classList.remove("visually-hidden");
        submitButton.disabled = true;
        return false;
    } else {
        messageField.classList.remove("invalid-text");
        errorMessage.classList.add("visually-hidden");
        submitButton.disabled = false;
        return true;
    }
}

messageField.oninput = validate;

const form = document.querySelector(".form");
form.onsubmit = function(evt) {
    evt.preventDefault();
    if(validate()) this.submit();
}