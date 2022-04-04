// link 부분

const links = document.querySelector("#links");
const link = document.querySelector("#link");
const linksList = document.querySelector("#linksList");

const onClickLink = () => {
  const result = linksList.classList.toggle("hidden");
  if (result) {
    linksList.classList.add("hidden");
  } else {
    linksList.classList.remove("hidden");
  }
};
const onClickOther = () => {
  linksList.classList.add("hidden");
};
links.addEventListener("click", onClickLink);
link.addEventListener("click", onClickLink);

// username 부분

const user = document.querySelector("#user");
const logoutWrap = document.querySelector("#logoutWrap");

const opneLogOutBtn = () => {
  const result = logoutWrap.classList.toggle("hidden");
  if (result) {
    logoutWrap.classList.add("hidden");
  } else {
    logoutWrap.classList.remove("hidden");
  }
};
user.addEventListener("click", opneLogOutBtn);
