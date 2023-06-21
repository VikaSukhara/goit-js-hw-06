const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

// const valueInput = inputEl.value;

function onInputChange() {
  const valueInput = inputEl.value;
  const textSize = `${valueInput}px`;

  textEl.style.fontSize = textSize;
}

inputEl.addEventListener("input", onInputChange);
