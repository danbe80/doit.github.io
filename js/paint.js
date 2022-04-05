const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("colors");
const initialColor = document.querySelector("#initialColor");
const paintModalWrap = document.querySelector("#paintModalWrap");
const fill = document.querySelector("#fillOption");
const brush = document.querySelector("#brushOption");
const range = document.querySelector("#rangeBrush");
const saveBtn = document.querySelector("#downloadOption");

// 캔버스 크키와 색 초기화
const INITIAL_COLOR = initialColor.style.backgroundColor;
let CANVAS_WIDTH = canvas.offsetWidth;
let CANVAS_HEIGHT = canvas.offsetHeight;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// paintModal창 오픈, 닫기
let paintModal = false;

const onPaintModal = () => {
  if (!paintModal) {
    paintModalWrap.style.transform = "translateX(0px)";
    paintModal = true;
  } else {
    paintModalWrap.style.transform = "translateX(-10000px)";
    paintModal = false;
  }
};

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
  CANVAS_WIDTH = canvas.offsetWidth;
  CANVAS_HEIGHT = canvas.offsetHeight;

  Array.from(colors).forEach((color) => {
    color.classList.remove("selete");
  });
  initialColor.classList.add("selete");

  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  ctx.lineWidth = range.value;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillStyle = INITIAL_COLOR;
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

// 브러쉬, 채우기 모드 변경
const handleModeClick = (event) => {
  const target = event.target.classList[1];
  if (target === "bi-brush-fill") {
    filling = false;
    range.removeAttribute("disabled", "");
  } else if (target === "bi-paint-bucket") {
    filling = true;
    range.setAttribute("disabled", "");
  }
};

fill.addEventListener("click", handleModeClick);
brush.addEventListener("click", handleModeClick);

// 컬러 변경
const handleColorClick = (event) => {
  const chooseColor = event.target;
  const color = chooseColor.style.backgroundColor;
  Array.from(colors).forEach((col) => {
    col.classList.remove("selete");
  });
  chooseColor.classList.add("selete");
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};

// color가 여러개이기 때문에 for으로 돌려줌
Array.from(colors).forEach((color) => {
  color.addEventListener("click", handleColorClick);
});

// 그림 파일 다운로드
const handleSaveClick = () => {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "Paint";
  link.click();
};

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}

const handleRangeChange = (event) => {
  const size = event.target.value;
  ctx.lineWidth = size;
};

if (range) {
  range.addEventListener("input", handleRangeChange);
}

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

paintWrap.addEventListener("click", onPaintModal);
