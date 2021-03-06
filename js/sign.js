// 로그인 form
const loginWrap = document.querySelector("#loginWrap");
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginInput");
const loginSubmit = document.querySelector("#loginSubmit");

const mainWrap = document.querySelector("#mainWrap");
const greeting = document.querySelector("#greeting");
const toDoWrap = document.querySelector("#todoWrap");

const paintWrap = document.querySelector("#paintWrap");
const emailWrap = document.querySelector("#emailWrap");

// KEY
const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

// 이름 입력
const onLoginSubmit = (event) => {
  event.preventDefault();
  const username = loginInput.value;
  writeGreeting(username);
  // localStorage 저장
  localStorage.setItem(USERNAME_KEY, username);
};

// 입력 후
const writeGreeting = (username) => {
  greeting.innerText = `${username}님 보람찬 하루 보내세요`;
  // class에 hidden을 추가해서 display:none; 으로 변경
  user.innerText = username;
  loginWrap.classList.add(HIDDEN_CLASS);
  mainWrap.classList.remove(HIDDEN_CLASS);
  paintWrap.style.visibility = "visible";
  emailWrap.style.visibility = "visible";
};

// localStorage
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginWrap.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  writeGreeting(savedUsername);
}
