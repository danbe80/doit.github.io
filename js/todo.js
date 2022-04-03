const todolistForm = document.querySelector("#todoForm");
const enterToDo = document.querySelector("#todoInput");
const submitTodo = document.querySelector("#todoSubmit");
const todolist = document.querySelector("#todoList");

const TODOLIST_KEY = "todos";

let toDos = [];

const onSubmitToDo = (event) => {
  event.preventDefault();
  const newTodo = enterToDo.value;
  enterToDo.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  writeToDo(newTodoObj);
};

const writeToDo = (newTodo) => {
  const li = document.createElement("li");
  // 내용
  const span = document.createElement("span");
  // 취소 버튼
  const xbtn = document.createElement("button");
  // 체크박스
  const checkwrap = document.createElement("div");
  const checkinput = document.createElement("input");
  const checklabel = document.createElement("label");

  li.id = newTodo.id;
  // 내용
  span.innerText = newTodo.text;
  // 취소 버튼
  xbtn.classList.add("btn-close");
  xbtn.ariaLabel = "Close";
  // 체크박스
  checkwrap.classList.add("form-check");
  checkinput.classList.add("form-check-input");
  checkinput.type = "checkbox";
  checkinput.id = "flexCheckDefault";
  checklabel.classList.add("form-check-label");
  checklabel.for = "flexCheckDefault";

  // 체크박스 안에 자식들 먼저 넣어주고
  checkwrap.appendChild(checkinput);
  checkwrap.appendChild(checklabel);

  // 리스트에 체크박스를 넣어준다.
  li.appendChild(checkwrap);
  // 할일 추가
  li.appendChild(span);
  // 취소 버튼 추가
  li.appendChild(xbtn);
  // ul에 리스트 추가
  todolist.prepend(li);
};

// function writeToDo(newTodo){
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   const xbtn = document.createElement("button");
//   const checkbox = document.createElement("input");
//   const label = document.createElement("label");

//   li.id = newTodo.id;
//   span.innerText = newTodo.text;
//   xbtn.innerText = "❌";
//   checkbox.type = "checkbox";
//   checkbox.id = "checkBox";
//   label.for = checkbox.id;

//   xbtn.addEventListener("click", deleteToDo);
//   label.addEventListener("click", checkToDo);

//   li.appendChild(checkbox);
//   li.appendChild(label);
//   li.appendChild(span);
//   li.appendChild(xbtn);
//   todolist.prepend(li);

//   enterToDo.blur();
// }

// function savedToDo() {
//   localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const del = event.target.parentElement;
//   del.remove();
//   toDos = toDos.filter((toDo)=>toDo.id !== parseInt(del.id));
//   savedToDo();
// }

// function checkToDo(event){
//   const check = event.target;
//   const result =  check.classList.toggle("line");

//   if (result){
//     check.nextElementSibling.classList.add("line");
//   }
//   else {
//     check.nextElementSibling.classList.remove("line");
//   }
// }

// function onSubmitToDo(event){
//   event.preventDefault();
//   const newTodo = enterToDo.value;
//   enterToDo.value = "";
//   const newToDoObj = {
//     text: newTodo,
//     id: Date.now()
//   }
//   toDos.push(newToDoObj);
//   writeToDo(newToDoObj);
//   savedToDo();
// }

// todolistForm.addEventListener("submit", onSubmitToDo);

// const savedToDos = localStorage.getItem(TODOLIST_KEY);

// if(savedToDos !== null) {
//   const parseToDos = JSON.parse(savedToDos);
//   toDos = parseToDos
//   parseToDos.forEach(writeToDo);
// }
