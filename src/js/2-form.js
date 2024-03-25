const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const emailInput = form.querySelector('input[type="email"]');

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", saveToLocalStorage);

populateTextarea();

function handleSubmit(event) {
    event.preventDefault();
    saveToLocalStorage();
    event.target.reset();
    //localStorage.removeItem(STORAGE_KEY);
}


function saveToLocalStorage() {
    const formData = {
        email: emailInput.value.trim(),
        message: textarea.value.trim()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function populateTextarea() {
    let localStorageData = localStorage.getItem(STORAGE_KEY);
    localStorageData = JSON.parse(localStorageData);

    if (localStorageData?.email) {
        emailInput.value = localStorageData.email;
    }
    if(localStorageData?.message) {
        textarea.value = localStorageData.message;
    }
}
