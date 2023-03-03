const loginForm = document.querySelector("login-form");
const loginInput = document.querySelector("login-form input");

function onLoginSubmit(event) {
  CloseEvent.perventDefault();
  console.log(loginInput.value);
}

loginButton.addEventListener("submit", onLoginSubmit);
