const emailModalWrap = document.querySelector("#emailModalWrap");
const deleteP = document.querySelector("#deleteP");
const thankyouMessage = document.getElementsByClassName("thankyou_message");
const formElement = document.querySelector(".form-elements");

let emailModal = false;
const onEmailModal = () => {
  if (!emailModal) {
    emailModalWrap.style.transform = "translateX(0px)";
    emailModal = true;
  } else {
    emailModalWrap.style.transform = "translateX(-10000px)";
    emailModal = false;
  }
};

const onDeleteSuccessNotice = () => {
  thankyouMessage[0].style.display = "none";
  formElement.style.display = "block";
  disableAllButtons(false);
};

// 이메일 유효성 검사
const checkEmail = () => {
  let email = document.querySelector("#exampleFormControlInput1").value;
  if (email != "") {
    let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (exptext.test(email) == false) {
      alert("입력한 메일 형식이 올바르지 않습니다.");
      document.querySelector("#exampleFormControlInput1").focus();
      return false;
    }
  }
  return true;
};

emailWrap.addEventListener("click", onEmailModal);
deleteP.addEventListener("click", onDeleteSuccessNotice);
