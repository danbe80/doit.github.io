const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("colors");
const initialColor = document.querySelector("#initialColor");

// 캔버스 크키와 색 초기화
const INITIAL_COLOR = initialColor.style.backgroundColor;
let CANVAS_WIDTH = canvas.offsetWidth;
let CANVAS_HEIGHT = canvas.offsetHeight;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// 선 크기 초기화
ctx.lineWidth = 3;

// 캔버스 색상 초기화
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

// 선, 채우기 색상 초기화
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

// 그리기, 채우기 동작 초기화
let painting = false;
let filling = false;

// 웹사이트 크키가 변할 시 일어날 함수
const checkCanvasSize = () => {
  location.reload();
};

// 그리기 동작 함수들
const stopPainting = () => {
  painting = false;
};
const startPainting = () => {
  painting = true;
};

// 모바일(터치 이벤트)
const handleTouchStart = (event) => {
  event.preventDefault();
  // 채우기가 참일 때
  if (filling) {
    handleCanvasClick();
  }
  // 그리기가 참일 때
  else {
    startPainting();
  }
};

const handleTouchMove = (event) => {
  event.preventDefault();
  // 클릭한 위치
  let touches = event.changedTouches[0];
  const x =
    touches.pageX - (touches.target.offsetTop + touches.target.offsetLeft);
  const y =
    touches.pageY -
    (touches.target.offsetParent.offsetTop + touches.target.offsetTop);
  if (!painting) {
    ctx.beginPath();
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

const handleTouchEnd = (event) => {
  event.preventDefault();
  stopPainting();
  ctx.beginPath();
};

// PC
const onMouseMove = (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

const handleCM = (event) => {
  event.preventDefault();
};

const handleCanvasClick = () => {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
};
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting); // 마우스 클릭 O
  canvas.addEventListener("mouseup", stopPainting); // 마우스 클릭 X
  canvas.addEventListener("mouseleave", stopPainting); // canvas 영역에서 벗어남
  canvas.addEventListener("contextmenu", handleCM); // 마우스 오른쪽 클릭
  // mobile
  canvas.addEventListener("touchstart", handleTouchStart);
  canvas.addEventListener("touchmove", handleTouchMove);
  canvas.addEventListener("touchend", handleTouchEnd);

  canvas.addEventListener("click", handleCanvasClick);
  window.addEventListener("resize", checkCanvasSize);
}

// const range = document.querySelector("#rangeBrush");
// const mode = document.querySelector("#fillOption");
// const saveBtn = document.querySelector("#downloadOption");
// const resetBtn = document.querySelector("#reBtn");

// let reset = false;

// /* 마우스(PC)) */
// function handleCM(event) {
//   event.preventDefault();
// }

// function handleColorClick(event) {
//   const chooseColor = event.target;
//   const color = chooseColor.style.backgroundColor;
//   Array.from(colors).forEach((col) => {
//     col.classList.remove("selete");
//   });
//   chooseColor.classList.add("selete");
//   ctx.strokeStyle = color;
//   ctx.fillStyle = color;
// }

// function handleCanvasClick() {
//   if (filling) {
//     ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//   }
// }
// function handleRangeChange(event) {
//   const size = event.target.value;
//   ctx.lineWidth = size;
// }
// function handleModeClick() {
//   if (filling === true) {
//     filling = false;
//     mode.innerText = "Fill";
//   } else {
//     filling = true;
//     mode.innerText = "Paint";
//   }
// }
// function handleSaveClick() {
//   const image = canvas.toDataURL();
//   const link = document.createElement("a");
//   link.href = image;
//   link.download = "Paint";
//   link.click();
// }

// function handleResetClick() {
//   ctx.fillStyle = `#ffffff`;
//   ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//   ctx.fillStyle = INITIAL_COLOR;
//   ctx.beginPath();
// }

// if (mode) {
//   mode.addEventListener("click", handleModeClick);
// }
// if (saveBtn) {
//   saveBtn.addEventListener("click", handleSaveClick);
// }
// if (range) {
//   range.addEventListener("input", handleRangeChange);
// }
// if (resetBtn) {
//   resetBtn.addEventListener("click", handleResetClick);
// }
// Array.from(colors).forEach((color) => {
//   color.addEventListener("click", handleColorClick);
// });

// function checkCanvasSize() {
//   CANVAS_WIDTH = canvas.offsetWidth;
//   CANVAS_HEIGHT = canvas.offsetHeight;

//   Array.from(colors).forEach((color) => {
//     color.classList.remove("selete");
//   });
//   initialColor.classList.add("selete");

//   canvas.width = CANVAS_WIDTH;
//   canvas.height = CANVAS_HEIGHT;

//   ctx.lineWidth = range.value;
//   ctx.fillStyle = "#ffffff";
//   ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//   ctx.fillStyle = INITIAL_COLOR;
// }
