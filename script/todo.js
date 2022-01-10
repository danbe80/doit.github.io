const todolistForm = document.querySelector("#todoForm");
const enterToDo = document.querySelector("#todoForm input");
const todolist = document.querySelector("#todoList");



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

function checkToDo(event){
  const check = event.target;
  const result =  check.classList.toggle("line");

  if (result){
    check.nextElementSibling.classList.add("line");
  }
  else {
    check.nextElementSibling.classList.remove("line");
  }
}

function writeToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const xbtn = document.createElement("button");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  
  li.id = newTodo.id;
  span.innerText = newTodo.text;
  xbtn.innerText = "❌";
  checkbox.type = "checkbox";
  checkbox.id = "checkBox";
  label.for = checkbox.id;

  xbtn.addEventListener("click", deleteToDo);
  label.addEventListener("click", checkToDo);

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(span);
  li.appendChild(xbtn);
  todolist.prepend(li);

  enterToDo.blur();
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

