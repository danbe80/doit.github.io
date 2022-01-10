const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("colors");
const mode = document.querySelector("#fillMode");
const saveBtn = document.querySelector("#saveBtn");

const INITIAL_COLOR = "#000000";

const CANVAS_SIZE = 300;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting(){
  painting = false;
}
function startPainting(){
  painting = true;
}
function onMouseMove(event){
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting){
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
  else{
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
function handleCM(event){
  event.preventDefault();
} 

function handleColorClick(event){
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}
function handleCanvasClick(){
  if(filling){
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}
Array.from(colors).forEach(color => {
  color.addEventListener("click", handleColorClick);
})

if(canvas){
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting); // 마우스 클릭 O
  canvas.addEventListener("mouseup", stopPainting); // 마우스 클릭 X
  canvas.addEventListener("mouseleave", stopPainting); // canvas 영역에서 벗어남
  canvas.addEventListener("contextmenu", handleCM); // 마우스 오른쪽 클릭
  canvas.addEventListener("click", handleCanvasClick);
}