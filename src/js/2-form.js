
const formData = {
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
    const saveData = localStorage.getItem(STORAGE_KEY);
    if (saveData) {
      const parseData = JSON.parse(saveData);
      formData.email = parseData.email || '';
      formData.message = parseData.message || '';
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
  console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
}
