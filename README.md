# Doit!

개인적인 공부를 위해 개발한 사이트입니다.

## <a href="https://danbe80.github.io/doit.github.io/" target="_blank">두잇(Doit)</a> - 완성된 사이트

[ Tech ]

<img src="https://img.shields.io/badge/-html-%23E34F26?style=flat-square&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/-css-%231572B6?style=flat-square&logo=css3">
<img src="https://img.shields.io/badge/-javascript-%23F7DF1E?style=flat-square&logo=JavaScript&logoColor=eee">

<br>

모바일, 패드, PC 환경에서 사용 가능

---

## 목표

> vanilla Javascript만을 사용해 웹사이트 만들기 \
> localStorage를 이용한 데이터 저장

---

- 목차 \
  ☝. 서비스 소개 \
  ✌. 개발과정 중(어려웠던 점과 해결방안) \
  👌. 최종

---

## 서비스 소개

---

### <details><summary>Description</summary> **_ToDoList_** 가 메인인 웹입니다.<br> 서브 서비스로 **_Paint_** 와 **_Login_** 서비스를 지원합니다.</details>

---

### ① 로그인 서비스

> 🙋‍♀️ 회원가입 없이 이름만으로 로그인할 수 있다.
>
> > 💻PC버전 <br><img src="https://user-images.githubusercontent.com/85651246/149752386-b5e83327-ed09-4b3f-8f33-82a0aa100023.PNG" alt="로그인 화면" width="300px"><img src="https://user-images.githubusercontent.com/85651246/149753506-dfbf238f-75bd-4f15-a399-15fe77e779a9.gif" width="600px">

> > 📱모바일 버전 <br> <img src="https://user-images.githubusercontent.com/85651246/149754439-c3d6e9a0-7e3d-42f2-a4ba-2be1bf5b559b.PNG" width="300px"> <img src="https://user-images.githubusercontent.com/85651246/149754750-0bdc1c74-5749-4e11-85dd-d74f2d99bd0a.gif" width="300px">

<hr>

### ① - 1. localStorage

- [localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)란?
  - 데이터를 브라우저에 저장하며, 브라우저를 종료 후에 재시작해도 데이터가 남아있다.
  - 개발자 도구 Application탭에서 데이터 확인이 가능하다.

```js
const username = Input.value; // Input에 입력한 username
localStorage.setItem(USERNAME_KEY, username); // key와 함께 username을 저장
```

<hr>

### ① - 2. profile

- 1. logout
  - 로그아웃 버튼을 클릭 시 localStorage에 저장되어 있는 user정보가 삭제되며 로그인 화면 상태로 돌아가게 된다.

<img src="https://user-images.githubusercontent.com/85651246/149808014-3387c8ba-a82a-4fbd-90c2-7214d2ff037c.png" width="300px">

<img src="https://user-images.githubusercontent.com/85651246/149808988-460edd40-e5fd-41da-b088-7e2237157049.gif">

<hr>

- 2. profile photo

  - 원하는 프로필 사진을 설정할 수 있고, localStorage에 프로필 사진이 저장되어 페이지 종료 후 재접속해도 설정된 프로필 사진이 보여진다.

  <img src="https://user-images.githubusercontent.com/85651246/149810731-bdc13b67-3244-4275-a49c-2b523e53bbeb.png">

  <img src="https://user-images.githubusercontent.com/85651246/149812881-dbd3c2e8-0625-4706-be5e-6ea17602a13a.gif">

### ② Clock & Weather API

<br>

- 1. Clock \
     <사용 함수>

  - [new Date()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date) : 1970년 1월 1일 UTC(협정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값
  - [getHours()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours) : 주어진 날짜의 현지 시간 기준 시를 반환
  - [getMinutes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes) : Date 인스턴스의 분을 현지 시간 기준으로 반환
  - [getSeconds()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds) : 현지 시간 기준 초를 나타내는 0에서 59 사이의 정수 반환
  - [padStart()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) : 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환, 채워넣기는 대상 문자열의 시작(좌측)부터 적용
  - [setInterval(callback Fn, time)](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) : 고정된 시간마다 함수를 반복적으로 호출하거나 코드 조각을 실행

<br>

- AM & PM

```js
if (hours > 12) {
  // 12시 초과
  meridiem = pm;
  hours = hours - 12;
  clock.innerText = `${meridiem} ${hours}:${minutes}:${seconds}`;
} else {
  // 12시 이하
  meridiem = am;
  clock.innerText = `${meridiem} ${hours}:${minutes}:${seconds}`;
}
```

---

<br>

- 2. Weather API(Application Programming Interface)

  - [Weather API](https://openweathermap.org/) : 날씨 정보를 받아올 사이트
  - [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation) : 사용자의 디바이스에서 위치 정보를 제공할 수 있는 모든 종류의 서비스로부터 위치 정보를 반환

  ```js
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  // 첫번째 인자: 위치 정보를 받아오는데 성공 시
  // 두번째 인자: 위치 정보를 받아오지 못했을 시
  ```

  - onGeoOk() \
    [fetch ~ .then절](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch) : Request나 Response와 같은 HTTP의 파이프라인을 구성하는 요소를 조작하는것이 가능, 비동기 네트워크 통신을 알기쉽게 기술

  ```js
  const lat = position.coords.latitude; // 경도
  const lon = position.coords.longitude; // 위도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // 'units=metric' => 화씨를 섭씨로

  fetch(url) // 주소로 부터
    .then((response) => response.json()) //응답이 오면
    .then((data) => {
      // 데이터를 내보낸다.
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
  ```

---

### ③ To Do List - main service

- To Do List 등록 \
  <img src="https://user-images.githubusercontent.com/85651246/149884418-527af8f3-7016-4204-854b-b841ee89a103.gif" width="300px">
- 새로 고침 시 \
  <img src="https://user-images.githubusercontent.com/85651246/149884841-fe7c146d-4cc9-48c0-86eb-24a678d8fe0a.gif" width="300px">

- localStorage에 배열로 저장

  ```js
  let toDos = [];

  const newToDoObj = {
    text: newTodo,
    id: Date.now(), // 삭제 시 같은 내용의 할 일을 구분하기 위해
  };
  toDos.push(newToDoObj);
  ```

  <img src="https://user-images.githubusercontent.com/85651246/149885679-c8fe526b-3e02-425d-b85e-bf9f2b96afdc.PNG" width="350px">

  <br>

- 삭제(delete) \
   <img src="https://user-images.githubusercontent.com/85651246/149887796-f171475e-25cd-4614-bfa4-d9ac42d1e51b.gif" width="300px">

  ```js
  function deleteToDo(event) {
    const del = event.target.parentElement;
    del.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(del.id));
    savedToDo();
  }
  ```

  '❌' 아이콘을 클릭한 target의 부모 element를 찾아 제거한다.
  이렇게만 하는 것은 보여지는 것만 삭제된 것이고 localStorage도 삭제 해주어야 한다.
  선택된 target의 부모의 id와 toDos에 담겨 있는 데이터들의 id를 비교하고 같은 것을 제외하고 다시 toDos 배열에 데이터들을 담는다.

  - [filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) : callback 테스트를 통과하지 못한 배열 요소는 그냥 건너뛰며 새로운 배열에 포함되지 않음

<br>

- 체크(check) \
  <img src="https://user-images.githubusercontent.com/85651246/149898041-4ca940e6-dc9f-4b16-89a2-73c58a0c45ab.gif" width="300px">

  ```js
  const check = event.target; // 클릭한 element
  const result = check.classList.toggle("line");

  if (result) {
    check.nextElementSibling.classList.add("line");
  } else {
    check.nextElementSibling.classList.remove("line");
  }
  ```

  ### ④ Paint (그림판) - [CANVAS API](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API)

  - 전체적인 기능 \
    <img src="https://user-images.githubusercontent.com/85651246/149898934-7f7ea815-a909-4cd5-b9ef-e603c886463e.gif" width="300px"> \
    <저장 기능> \
    <img src="https://user-images.githubusercontent.com/85651246/149899781-9560be31-49ae-4e1b-8505-92025958c592.gif" width="500px"> \
    <실제 저장된 그림> \
    <img src="https://user-images.githubusercontent.com/85651246/149900344-289cc5db-4836-464f-abb4-1a3abd011b6e.png" width="300px">

    ***

  - **_canvas 사용시 주의할 점_** \
    style에 직접 크기를 정해주어야 함

    ***

  - colors (색상 선택)

    <img src="https://user-images.githubusercontent.com/85651246/150081856-5e8890be-8dfc-405f-a591-fab0ac4e354b.PNG" width="300px">

    초기 기본 선택은 검정색으로 설정되어 있음

    ```html
    <li
      id="initialColor"
      class="colors selete"
      style="background-color: #0F0E0E;"
    ></li>
    ```

    ```js
    const INITIAL_COLOR = initialColor.style.backgroundColor;
    ```

    - selete color \
      <img src="https://user-images.githubusercontent.com/85651246/150082063-91d1cafa-6d78-4c2d-97e5-0d5b8c9dcf95.PNG" width="100px">

    선택된 색상은 하얀색 border가 들어가 있음

    ```js
    const chooseColor = event.target;
    const color = chooseColor.style.backgroundColor;
    Array.from(colors).forEach((col) => {
      col.classList.remove("selete");
    }); // class중 selete 제거
    chooseColor.classList.add("selete"); // 선택된 컬러에 class 추가
    ```

    - basic color \
      <img src="https://user-images.githubusercontent.com/85651246/150082676-7b88bf02-824f-42fb-8454-fb367bd8028a.PNG" width="100px">

    선택되지 않은 색상은 border가 none이 되어 있음

---

- Fill & Paint (모드 변경)

   <img src="https://user-images.githubusercontent.com/85651246/150113502-d37f2a72-f577-4ee6-b275-00022b9a4952.PNG">
  : 버튼이 'fill'인 상태에선 line이 사용

    <img src="https://user-images.githubusercontent.com/85651246/150113392-4d78bf37-f627-4fdc-8c30-229588c6a02e.PNG">
  : 버튼이 'paint'인 상태에선 fill이 사용

- Reset (초기화)

  <img src="https://user-images.githubusercontent.com/85651246/150115661-b0f6a4cc-2302-489e-a6cb-0c7bba475a67.PNG">
  :버튼 클릭 시 그림판 초기화

- Save (그림 저장)

  <img src="https://user-images.githubusercontent.com/85651246/150115788-a6ba314f-be20-4a13-a0fb-c8a7f03da027.PNG">

- Range (브러쉬 사이즈)

  <img src="https://user-images.githubusercontent.com/85651246/150115977-1e9626d9-dfa4-4aba-bfca-f6a8de408fbb.PNG">

---

### ④ 바로가기 (Links)

<img src="https://user-images.githubusercontent.com/85651246/150114878-d25bf74b-905c-41da-a4f0-b1802ff32e2a.PNG">

아이콘 클릭 시 새로운 탭에서 해당 웹페이지로 이동

---

- 그 외

  - 배경화면 랜덤설정

    배경화면 이미지를 배열로 저장
    명언과 똑같이 [Math함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math)를 사용

  ```js
  const todayIsbg = bgimages[Math.floor(Math.random() * bgimages.length)];
  ```

  ***

  - 명언
  - 랜덤으로 나오는 영문 명언과 해석
    <img src="https://user-images.githubusercontent.com/85651246/149876762-a4b1a688-e052-49ca-8f52-7fc7c0198ce7.gif">

  'sayings'라는 변수에 명언을 담은 배열을 저장 \
  [Math함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math)를 사용해

  ```js
  const todaySaying = sayings[Math.floor(Math.random() * sayings.length)];
  ```

  [Math.random()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 함수는 0 ~ 1 사이의 숫자를 return해준다. \
  그렇기 때문에 배열의 길이 만큼을 곱하여 0 ~ sayings.length 사이의 숫자가 return되게 해준다. \
  return받은 숫자를 [Math.floor()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) 함수를 사용하여 무조건 내림으로 정수를 받는다.

<hr>

## 개발과정 중 어려웠던 점(해결방안)

1. cursor: pointer; not working

   - 원인 : z-index의 충돌로 인한 오류
   - 해결 방안 : element의 z-index를 정리해줌

2. clock service PM AM 추가 시 변수 오류 발생

   - 원인 : 모든 변수들을 const로 설정해놨기 때문에 값을 변경할 수 없다.
   - 해결 방안 : AM/PM을 추가할 시 hours(시)에 따라 결정되며 13시 부터는 값을 변경해주어야 하므로 hours만 const -> let으로 변경해 값을 변경할 수 있도록 했다.

3. **_canvas touch event_** - 제일 고생한 부분

   - 원인 : mouse event를 사용해 모바일에선 그림판 사용이 안됨
   - 해결 방안 : touch event를 사용하면 모바일에서도 사용이 가능

   ```js
   // mobile 이벤트 추가
   canvas.addEventListener("touchstart", handleTouchStart);
   canvas.addEventListener("touchmove", handleTouchMove);
   canvas.addEventListener("touchend", handleTouchEnd);

   /* 터치(모바일) */
   function handleTouchStart(event) {
     event.preventDefault();
     if (filling) {
       // 채우기 모드가 true이면
       handleCanvasClick();
     } else {
       // painting 모드가 true이면
       startPainting();
     }
   }
   function handleTouchMove(event) {
     // 터치 후 움직임 감지 이벤트
     event.preventDefault();
     let touches = event.changedTouches;
     const x = touches[0].pageX - canvas.offsetLeft;
     const y = touches[0].pageY - canvas.offsetTop;

     if (!painting) {
       ctx.beginPath();
     } else {
       ctx.lineTo(x, y);
       ctx.stroke();
     }
   }
   function handleTouchEnd(event) {
     event.preventDefault();
     stopPainting();
     ctx.beginPath();
   }
   ```

---

## 최종

<아직 수정되지 않은 점>

- 현재 Iphone(IOS) safari 기준 복수탭 기능이 생기면서 복수탭 상태에선 아래 하얀 여백이 생성되는 것을 확인

  하지만 단일탭 사용으로 바꿀 시 여백이 없어지는 것을 확인
