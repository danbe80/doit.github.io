const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username"
const HIDDEN_CLASS = "hidden"

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기본 동작을 막아주는 function
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem( USERNAME_KEY, username);
  writeGreeting(username);
}

function writeGreeting(username) {
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASS);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
}
else {
  writeGreeting(savedUsername);
}