const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", OnInputBlur);

function OnInputBlur() {
  const dataLength = inputEl.getAttribute("data-length");
  const inputLength = inputEl.value.length;

  if (Number(dataLength) === Number(inputLength)) {
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.add("valid");
    }
    inputEl.classList.replace("invalid", "valid");
  } else {
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.replace("valid", "invalid");
    }
    inputEl.classList.add("invalid");
  }
}
