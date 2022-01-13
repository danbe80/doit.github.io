const upload = document.querySelector("#fileUpload");
const profile = document.querySelector("#photoWrap > img");
const file = document.querySelector("#upLoadPhoto");
const profileBtn = document.querySelector("#profileBtn");
const closeBtn = document.querySelector("#closeWrap");
const profileWrap = document.querySelector("#firstWrap");

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
}

function handleCloseBtn() {
  profileWrap.style.left = '-600px'
}

profileBtn.addEventListener("click", handleProfileBtn);
closeBtn.addEventListener("click", handleCloseBtn);

