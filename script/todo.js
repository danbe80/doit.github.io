const todolistForm = document.querySelector("#todo-form");
const enterToDo = document.querySelector("#todo-form input");
const todolist = document.querySelector("#todolist");

const TODOLIST_KEY = "todos"

let toDos = [];

function savedToDo() {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const del = event.target.parentElement;
  del.remove();
  toDos = toDos.filter((toDo)=>toDo.id !== parseInt(del.id));
  savedToDo();
}

function writeToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const xbtn = document.createElement("button");
  li.id = newTodo.id;
  span.innerText = newTodo.text;
  xbtn.innerText = "❌";

  xbtn.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(xbtn);
  todolist.appendChild(li);
}

function onSubmitToDo(event){
  event.preventDefault();
  const newTodo = enterToDo.value;
  enterToDo.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newToDoObj);
  writeToDo(newToDoObj);
  savedToDo();
}

todolistForm.addEventListener("submit", onSubmitToDo);

const savedToDos = localStorage.getItem(TODOLIST_KEY);

if(savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos
  parseToDos.forEach(writeToDo);
}