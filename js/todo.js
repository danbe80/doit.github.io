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
  savedToDo();
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

  // 클릭 이벤트
  checkinput.addEventListener("click", checkToDo);
  xbtn.addEventListener("click", deleteToDo);

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

const checkToDo = (event) => {
  const check = event.target.parentElement;
  const removeSpan = check.nextElementSibling;
  const result = check.classList.toggle("line");

  if (result) {
    removeSpan.classList.add("line");
  } else {
    removeSpan.classList.remove("line");
  }
};

const deleteToDo = (event) => {
  const deleteTarget = event.target.parentElement;
  deleteTarget.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteTarget.id));
  savedToDo();
};

const savedToDo = () => {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos));
};

todolistForm.addEventListener("submit", onSubmitToDo);

const savedToDos = localStorage.getItem(TODOLIST_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(writeToDo);
}
