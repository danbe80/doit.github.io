const upload = document.querySelector("#fileUpload");
const profile = document.querySelector("#photoWrap > img");
const file = document.querySelector("#upLoadPhoto");
const profileBtnLg = document.querySelector("#profileBtn-lg");
const profileBtnSm = document.querySelector("#profileBtn-sm");
const closeBtn = document.querySelector("#closeWrap");
const profileWrap = document.querySelector("#firstWrap");

const body = document.querySelector("body");

const PROFILE_KEY = `photo`;

// change event
function changeProfile(event){
  const reader = new FileReader();

  reader.onload = function(event) {
    profile.setAttribute("src", event.target.result);
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile.src));
  }
  reader.readAsDataURL(event.target.files[0]);
}

if(localStorage.getItem(PROFILE_KEY) !== null){
  profile.src = JSON.parse(localStorage.getItem(PROFILE_KEY));
}

function handleProfileBtn(){
  profileWrap.style.left = 0;
;}

function handleCloseBtn() {
  profileWrap.style.left = `-${profileWrap.offsetWidth}px`;
}
function onResized(){
  profileWrap.style = "";
}
profileBtnLg.addEventListener("click", handleProfileBtn);
profileBtnSm.addEventListener("click", handleProfileBtn);
closeBtn.addEventListener("click", handleCloseBtn);
window.addEventListener("resize", onResized);
