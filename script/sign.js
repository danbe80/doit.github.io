const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDoForm = document.querySelector("#todo-form");

const USERNAME_KEY = "username"
const HIDDEN_CLASS = "hidden"

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기본 동작을 막아주는 function
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem( USERNAME_KEY, username);
  logoutBtn();
  writeGreeting(username);
}

function writeGreeting(username) {
  greeting.innerText = `안녕하세요 ${username}님😊`;
  greeting.classList.remove(HIDDEN_CLASS);
  toDoForm.classList.remove(HIDDEN_CLASS);
}

function deleteUsername() {
  localStorage.clear();
  location.reload();
}

function logoutBtn() {
  const btn = document.createElement("img");
  const wrap = document.querySelector("#logout-wrap");
  btn.src = `images/icon1.png`
  btn.classList.add("logout");
  wrap.prepend(btn);

  btn.addEventListener("click", deleteUsername);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
}
else {
  writeGreeting(savedUsername);
}