const counterValue = document.querySelector("#value");

let counter = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');

const handlerClickMinus = () => {
  counter -= 1;
  counterValue.textContent = counter;
  // console.log(handlerClickMinus())
};




decrementButton.addEventListener("click", handlerClickMinus);

const incrementButton = document.querySelector('[data-action="increment"]');

const handlerClickPlus = () => {
  counter += 1;
  counterValue.textContent = counter;
};

incrementButton.addEventListener("click", handlerClickPlus);
