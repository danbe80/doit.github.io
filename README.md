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

## 2. 시간 표시

- 현재 시각을 나타남(컴퓨터 시간 기준)

## 3. 배경화면 랜덤설정

- 배경화면을 랜덤으로 설정

## 4. 명언 랜덤 설정

- 명언이 랜덤으로 설정
