const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("всі поля повинні бути заповнені");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  }

  formEl.reset();
}
