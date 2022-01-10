const upload = document.querySelector("#fileUpload");
const profile = document.querySelector("#photoWrap > img");
const file = document.querySelector("#upLoadPhoto");

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


