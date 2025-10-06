
let formData = {
    email: '',
    message: ''
}
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', onTextForm);
form.addEventListener('submit', handleSubmit);
populateForm();


function onTextForm(event) {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}

function populateForm() {
    const message = localStorage.getItem(STORAGE_KEY);
    if (message) {
        formData = JSON.parse(message);
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const { email, message } = form.elements;
    if (!email.value.trim()  || !message.value.trim()) {
        alert('Fill please all fields');
        return;
    }
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
