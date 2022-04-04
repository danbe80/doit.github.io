/* 

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
*/

const logoutBtn = document.querySelector("#logoutBtn");

const onLogoutBtn = () => {
  localStorage.clear();
  location.reload();
};

logoutBtn.addEventListener("click", onLogoutBtn);
