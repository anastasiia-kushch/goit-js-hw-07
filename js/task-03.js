const nameInput = document.querySelector('#name-input');

const greeting = (event) => {
  const nameOutput = document.querySelector('#name-output');
  const trimmedValue = nameInput.value.trim();

  if (trimmedValue === '' || trimmedValue === ' ') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmedValue;
  }
};

nameInput.addEventListener('input', greeting);
