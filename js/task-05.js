const bodyEl = document.querySelector('body');
const buttonEl = bodyEl.querySelector('.change-color');
const spanEl = bodyEl.querySelector('.color');

const changingEvent = (event) => {
  buttonEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonEl.addEventListener('click', changingEvent);
