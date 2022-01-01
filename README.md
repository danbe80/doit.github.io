# Doit! - To Do List

## 1. username으로 접속하기

- input 칸에 username을 등록 시 환영문구가 나타남.

1. onLoginSubmit 함수는 event를 인자로 받아 input의 기본 동작을 막아주는 코드를 먼저 실행

```js
  function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 막아주는 fn
    ...
  }
```

2. username을 const로 정의 input에서 받은 value를 넣어줌

```js
  function onLoginSubmit(event) {
    ...
    const username = loginInputvalue;
    ...
  }
```

3. username을 입력시 입력창(input)이 사라지고 환연문구가 등장함

- 먼저 css파일에 hidden클래스 시 조건을 입력

```css
.hidden {
  display: none;
}
```

- form element에 hidden 클래스명을 추가

```js

  function onLoginSubmit(event){
    ...
    loginForm.classList.add(HIDDEN_CLASS);
    // HIDDEN_CLASS = "hidden"
    // loginForm = document.querySeletor("#login-form") html에서 form 태그
    writeGreeting(username); // 환영문구 fn
    ...
  }
  function writeGreeting(username) {
    greeting.innerText = `Hello ${username}!`; // h2태그에 텍스트를 넣어줌
    greeting.classlist.remove(HIDDEN_CALSS); // hidden 클래스명 지워주기
    //greeting = document.querySeletor("#greeting") html에서 h2 태그
  }
```

4. 새로고침 시 username이 reset된다 그것을 방지하기 위해 localstorage에 저장

```js
  function onLoginSubmit(event){
    ...
    localStorage.setItem(USERNAME_KEY, username);
    // USERNAME_KEY = "username"
  }

  const savedUsername = localStorage.getItem(USERNAME_KEY);
  // localStorage에 저장된 값을 변수에 저장

  // localStorage에 값이 있는지 확인
  if(savedUsername === null){// localStorage가 비어 있다면
    loginForm.classlist.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
  }
  else { // 비어 있지 않다면
    writeGreeting(savedUsername);
  }
```

### 추가사항

1. username으로 로그인 시 TO DO LIST 입력창이 나타남
   (로그아웃 시에는 입력창이 보이지 않음)

```js
  const toDoForm = document.querySeletor("#todo-form");

  function writeGreeting(username) {
  ...
  toDoForm.classList.remove(HIDDEN_CLASS); // 추가
}
```

--> username으로 로그인을 할 수 있다면 로그아웃도 할 수 있으면 좋을 거 같다.
추후 변경 사항: 로그인 후 로그아웃 버튼 생성(localStorage에 값 삭제)

## 2. 현재 시각 표시

- 현재 시각을 나타남(컴퓨터 시간 기준)

1. new Date()를 이용하여 현재 시간을 가져옴

```js
const date = new Date();
//Tue(요일) Dec(월) 28(일) 2021(년) 02:27:38 GMT+0900 (한국 표준시)
```

2. Date()에 있는 getHours, getMinutes, getSeconds를 사용해 시분초만 가져옴
   그 후 html에 넣어준다.

- 숫자가 하나만 나오는 것을 방지하기 위해 padStart를 사용 ex) 2:20:38 (X)

```js
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
// padStart는 String에서만 사용 가능
// padStart의 첫번째 인자는 String의 길이 두번째 인자는 길이 만족하지 못할 시 설정 길이만큼 설정한 문자를 넣는다
// padStart(2, "0")은 String길이가 2이고 만족못할 시 "0"으로 길이를 만족 시킨다.
clock.innerText = `${hours} : ${minutes} : ${seconds}`;
// clock = document.querySelector("#clock");
```

3. setInterval()을 사용해 반복해준다.

```js
setInterval(handleClock, 1000);
// 첫번째 인자: function 두번째 인자: ms(초)
```

## 3. 배너 랜덤설정

- 배너 사진을 랜덤으로 설정
- 배너 사진 주제는 코로나/겨울로 잡았음

1. 배너로 사용할 사진을 array로 만듬

```js
  const bgimages = [
    {
      image: "0.png",
      image: "1.png",
      ...
    }
  ]
```

2. 배너를 감싸고 있는 div 안에 img element를 js로 생성

```js
const baseImg = document.querySelector("#background-images");
// html에 있는 div 불러오기
const todayIsbg = bgimages[Math.floor(Math.random() * bgimages.length)];
// 오늘 사용할 사진 선택
// Math.random() : 0 ~ 1 사이의 난수를 return해준다.
// Math.random() * bgimages.length -> 이미지 배열의 길이 만큼 곱해주면 0 ~ 이미지 길이 사이의 난수를 return
// Math.floor()를 사용한 것은 random()이 소수점도 같이 return해주기 때문에 소수점을 없애줘야 한다.
const img = document.createElement("img");
// js에서 html 만드는 방법: createElement() 사용

img.src = `images/${todayIsbg.image}`;
// img element의 src에 이미지 넣어준다
baseImg.appendChild(img);
// 만든 img element를 div에 append해준다.
```

---- 움짤 넣어야징 ----

## 4. 명언 랜덤 설정

- 명언이 랜덤으로 설정

1. 배너 사진과 비슷한 방식으로 진행 (명언도 array로)

```js
  const sayings = [
    {
      eng: "영언명언",
      kr: "해석"
    },
    ...
  ]
```

2. Math.random()로 명언으로 랜덤으로 넣어줌.

```js
const waltDisneySayingEng = document.querySelector("span#waltDisney-eng");
const waltDisneySayingKr = document.querySelector("span#waltDisney-kr");

const todaySaying = sayings[Math.floor(Math.random() * sayings.length)];

waltDisneySayingEng.innerText = todaySaying.eng;
waltDisneySayingKr.innerText = todaySaying.kr;
```

## 5. Main - To Do List!

- to do list 브라우저 localStorage에 저장 / 삭제 기능

1. html에 form 태그(todo 입력)와 ul 태그(입력받은 값 보여줌) 생성

```html
<form class="todolistWrap" id="todo-form">
  <h3 class="todo-title">TO DO LIST</h3>
  // title <input type="text" placeholder="Enter your to-do" /> // todo enter
  <input type="submit" value="등록" /> // submit button
</form>
<ul id="todolist">
  // to do list
</ul>
```

2. ToDo(할 일) 입력/수정/저장/삭제<br>
   (1) onSubmitToDo() 함수

```js
let toDos = []; // list 담아둘 배열
function onSubmitToDo(event) {
  event.preventDefault(); // 브라우저 동작 멈추기
  const newTodo = enterToDo.value;
  //enterToDo = document.querySelector("#todo-form input") / html
  enterToDo.value = ""; // 입력 후 입력창 비워주기

  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  // newTodo를 object로 만들어 보냄
  // 이유는 삭제 시 같은 text들이 같이 지워지는 것을 방지해 각 li마다 다른 id를 주기 위해서
  toDos.push(newToDoObj);
  writeToDo(newToDoObj); // 브라우저에 보여질 함수
  savedToDo(); // todo 저장 함수
}
```

(2) writeToDo() 함수

```js
const li = document.createElement("li");
const span = document.createElement("span");
const xbtn = document.createElement("button");
// ul에 추가할 Element 생성
span.innerText = newTodo;
xbtn.innerText = "❌";

xbtn.addEventListener("click", deleteToDo);
// 삭제 버튼 클릭 시 일어나는 이벤트 함수

li.appendChild(span);
li.appendChild(xbtn);
// li에 span, button 추가
todolist.appendChild(li);
//ul 안에 li 추가
//todolist = document.querySelector("#todolist") / html
```

(3) deleteToDo() 함수

```js
const del = event.target.parentElement;
// 클릭 한 버튼의 부모 element를 del 변수에 저장
del.remove(); // del변수 삭제
toDos = toDos.filter((toDo) => toDo.id !== parseInt(del.id));
// toDo.id와 del.id가 같다면 toDos에 저장되지 않는다.
savedToDo(); // 새로 만들어진 toDos배열을 다시 저장
```

(4) savedToDo() 함수

```js
function savedToDo() {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos));
  // stringify()는 string형태로 변형
}
```

3. localStroage 값 확인

```js
const savedToDos = localStorage.getItem(TODOLIST_KEY);

if (savedToDos !== null) {
  // 비어 있다면
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos; // 저장되어 있는 값을 다시 배열에 넣어줌
  parseToDos.forEach(writeToDo); // 화면에 저장되어 있는 TODO를 보여줌
  //forEach()는 각각의 변수를 반복 실행해준다.
  // ex) arr=[1,2,3,4] arr.forEach((item) => console.log(item)) => 출력 : 1 2 3 4
}
```

-> 수정 기능 추가
