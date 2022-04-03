// 로그인 form
const loginWrap = document.querySelector("#loginWrap");
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginInput");
const loginSubmit = document.querySelector("#loginSubmit");

const mainWrap = document.querySelector("#mainWrap");
const greeting = document.querySelector("#greeting");
const toDoWrap = document.querySelector("#todoWrap");

// KEY
const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

const onLoginSubmit = (event) => {
  event.preventDefault();
  const username = loginInput.value;
  writeGreeting(username);
  // class에 hidden을 추가해서 display:none; 으로 변경
  loginWrap.classList.add(HIDDEN_CLASS);
  mainWrap.classList.remove(HIDDEN_CLASS);
};
const writeGreeting = (username) => {
  greeting.innerText = `${username}님 반가워요!`;
};

// 이름 입력 후 실행
// function onLoginSubmit(event) {
//   event.preventDefault(); //브라우저의 기본 동작을 막아주는 function
//   const username = loginInput.value;
// localStorage.setItem(USERNAME_KEY, username);
// writeGreeting(username);
// loginInput.blur();
// }
/* 
function writeGreeting(username) {
  greeting.innerText = `반갑습니다 ${username}님😊`;
  mainWrap.classList.remove(HIDDEN_CLASS);
  loginWrap.classList.add(HIDDEN_CLASS);
  logoutBtn();
}

function logoutBtn() {
  const btn = document.createElement("img");
  const logoutWrap = document.querySelector("#logoutWrap");
  btn.src = `images/icon1.png`;
  btn.classList.add("logout");
  logoutWrap.prepend(btn);

  btn.addEventListener("click", deleteUsername);
}

function deleteUsername() {
  localStorage.clear();
  location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  writeGreeting(savedUsername);
}
 */
