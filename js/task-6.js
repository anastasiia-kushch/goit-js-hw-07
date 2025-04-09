const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
const parentDiv = document.getElementById('boxes');

createButton.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyButton.addEventListener('click', () => {
  parentDiv.innerHTML = '';
});

function createBoxes(amount) {
  const divs = [];
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const childDiv = document.createElement('div');
      const size = 30 + 10 * i;
      childDiv.style.width = `${size}px`;
      childDiv.style.height = `${size}px`;
      childDiv.style.backgroundColor = getRandomHexColor();
      divs.push(childDiv);
    }
  }
  parentDiv.style.margin = `10px`;
  parentDiv.append(...divs);

  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
