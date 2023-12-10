const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {};

  for (const input of formEl.elements) {
    if (input.nodeName === 'INPUT' && input.name) {
      formData[input.name] = input.value.trim();
    }
  }

  if (Object.values(formData).every((value) => value !== '')) {
    console.log(formData);
    formEl.reset();
  } else {
    alert('All form fields must be filled in');
  }
});
