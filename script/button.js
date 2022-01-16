const paint = document.querySelector("#paintWrap");
const list = document.querySelector("#todolistWrap");
const paintBtn = document.querySelector("#paintBtn");
const listBtn = document.querySelector("#listBtn");
const navi = document.querySelector("#navigationMenu");


function checkBtn(){
  const li = document.getElementsByClassName("buttons"); 
  Array.from(li).forEach(btn => btn.classList.remove("check"));
}

function checkPaint(){
  checkBtn();
  paintBtn.parentElement.classList.add("check");
  openPaint();
}

function checkList(){
  checkBtn();
  listBtn.parentElement.classList.add("check");
  openList();
}

function openPaint(){
  list.classList.remove("check-list");
  paint.classList.add("check-paint");
}
function openList(){
  paint.classList.remove("check-paint");
  list.classList.add("check-list");
}

paintBtn.addEventListener("click", checkPaint);
listBtn.addEventListener("click", checkList);