const loginWrap = document.querySelector("#loginWrap");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDoWrap = document.querySelector("#todoWrap");

const mainWrap = document.querySelector("#mainWrap");

// KEY
const USERNAME_KEY = "username" 
const HIDDEN_CLASS = "hidden"

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기본 동작을 막아주는 function
  const username = loginInput.value;
  localStorage.setItem( USERNAME_KEY, username);
  writeGreeting(username);
}

function writeGreeting(username) {
  greeting.innerText = `반갑습니다 ${username}님😊`;
  mainWrap.classList.remove(HIDDEN_CLASS);
  loginWrap.classList.add(HIDDEN_CLASS);
  logoutBtn();
}

function deleteUsername() {
  localStorage.clear();
  location.reload();
}

function logoutBtn() {
  const btn = document.createElement("img");
  const logoutWrap = document.querySelector("#logoutWrap");
  btn.src = `images/icon1.png`
  btn.classList.add("logout");
  logoutWrap.prepend(btn);

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