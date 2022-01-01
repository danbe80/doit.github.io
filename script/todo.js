const todolistForm = document.querySelector("#todo-form");
const enterToDo = document.querySelector("#todo-form input");
const todolist = document.querySelector("#todolist");



const TODOLIST_KEY = "todos"

let toDos = [];
let newToDoObj = {
  text: '',
  id: Date.now(),
  check: false
}

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
  const check = event.target.nextElementSibling;
  const result =  check.classList.toggle("line");
  const targetCheck = event.target.parentElement;
  const getData = JSON.parse(localStorage.getItem(TODOLIST_KEY));
  for(i in getData) {
    
  }

  
  if (result){
    check.style.textDecoration = "line-through";
    check.style.color = "#afafaf";
    // a = a.filter((t) => t.id === parseInt(targetCheck.id) )
  }
  else {
    check.style.textDecoration = "none"
    check.style.color = "inherit";
  }
}

function writeToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const xbtn = document.createElement("button");
  const checkbox = document.createElement("input");
  
  li.id = newTodo.id;
  span.innerText = newTodo.text;
  xbtn.innerText = "❌";
  checkbox.type = "checkbox";

  xbtn.addEventListener("click", deleteToDo);
  checkbox.addEventListener("click", checkToDo);

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(xbtn);
  todolist.prepend(li);
}

function onSubmitToDo(event){
  event.preventDefault();
  const newTodo = enterToDo.value;
  enterToDo.value = "";
  newToDoObj = {
    text: newTodo,
    id: Date.now(),
    check: false
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

