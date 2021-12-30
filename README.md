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

--> username으로 로그인을 할 수 있다면 로그아웃도 할 수 있으면 좋을 거 같다.
추후 변경 사항: 로그인 후 로그아웃 버튼 생성(localStorage에 값 삭제)

## 2. 시간 표시

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

## 3. 배경화면 랜덤설정

- 배경화면을 랜덤으로 설정

## 4. 명언 랜덤 설정

- 명언이 랜덤으로 설정
