function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const spanCol = document.querySelector(".color");
const bodyEl = document.querySelector("body");

btnEl.addEventListener("click", changeColor);

function changeColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanCol.textContent = bodyEl.style.backgroundColor;

  console.log(bodyEl.style.background);
}
