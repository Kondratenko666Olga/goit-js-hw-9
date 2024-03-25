const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const emailInput = form.querySelector('input[type="email"]');

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", onTextareaInput);

populateTextarea();

function handleSubmit(event) {
    event.preventDefault();
    console.log("send");
    const formData = {
        email: emailInput.value,
        message: textarea.value
    };
    console.log("Form data:", formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
    const message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message);
}


function populateTextarea() {
    const savedEmail = localStorage.getItem("email");
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedEmail) {
        emailInput.value = savedEmail;
    }
    if(savedMessage) {
        textarea.value = savedMessage;
    }
}
