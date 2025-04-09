const output = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', () => {
  const color = getRandomHexColor();
  output.textContent = color;
  document.body.style.backgroundColor = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
