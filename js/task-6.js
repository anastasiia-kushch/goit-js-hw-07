const inputEl = document.querySelector('#controls input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const parentDiv = document.querySelector('#boxes');

const createBoxes = () => {
  const divsArray = [];

  if (inputEl.value >= 1 && inputEl.value <= 100) {

    for (let i = 0; i < inputEl.value; i++) {
      const divEl = document.createElement('div');
      const size = 30 + i * 10;

      divEl.style.width = `${size}px`;
      divEl.style.height = `${size}px`;
      divEl.style.backgroundColor = getRandomHexColor();

      divsArray.push(divEl);
    }

    divsArray.forEach((div) => {
      parentDiv.appendChild(div);
    });
  }
};

const destroyBoxes = (event) => {
  parentDiv.innerHTML = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonCreate.addEventListener('click', createBoxes);

buttonDestroy.addEventListener('click', destroyBoxes);
