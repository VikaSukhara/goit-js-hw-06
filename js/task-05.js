const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(element) {
  if (!event.currentTarget.value) {
    nameEl.textContent = "Anonymous";
  } else {
    nameEl.textContent = element.currentTarget.value;
  }
}





//     console.log(element.currentTarget.value);
//     nameEl.textContent = element.currentTarget.value;

// if (nameEl.textContent = false){
//     nameEl.textContent = 'Anonymous';
// }
// nameEl.textContent = element.currentTarget.value;
// }

// nameEl.textContent = element.currentTarget.value;

// if(element.currentTarget.value === false){
//  nameEl.textContent === "Anonymous";
// } }
