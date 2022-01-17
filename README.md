# Doit!

개인적인 공부를 위해 개발한 사이트입니다.

[두잇(Doit)](https://danbe80.github.io/doit.github.io/) - 완성된 사이트

[Usage]
html/css/javascript
<br>

---

## 목표

> vanilla Javascript로만 사용해 서비스를 개발하기 위함

---

- 목차 \
  ☝. 서비스 소개 \
  ✌. 개발과정(어려웠던 점과 해결방안) \
  👌. 최종

---

## 서비스 소개

---

### <details><summary>Description</summary>ToDoList가 메인인 웹입니다.<br> 서브 서비스로 Paint와 Login 서비스를 지원합니다.</details>

---

### ① 로그인 서비스

> 🙋‍♀️ 회원가입 없이 이름만으로 로그인할 수 있다.
>
> > 💻PC버전 <br><img src="https://user-images.githubusercontent.com/85651246/149752386-b5e83327-ed09-4b3f-8f33-82a0aa100023.PNG" alt="로그인 화면" width="300px"><img src="https://user-images.githubusercontent.com/85651246/149753506-dfbf238f-75bd-4f15-a399-15fe77e779a9.gif" width="600px">

> > 📱모바일 버전 <br> <img src="https://user-images.githubusercontent.com/85651246/149754439-c3d6e9a0-7e3d-42f2-a4ba-2be1bf5b559b.PNG" width="300px"> <img src="https://user-images.githubusercontent.com/85651246/149754750-0bdc1c74-5749-4e11-85dd-d74f2d99bd0a.gif" width="300px">

<hr>

### ① - 1. localStorage

- localStorage란?
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

cursor pointer not working 문제
-> z-index 충돌 정리

PM AM 추가 문제
-> const 는 값이을 변환할 수 없는 변수였기 때문에
hours의 변수 형태를 let으로 바꾸어 주어야 실행가능

weather API는 openweathermap.org 사이트를 이용
Current Weather Data API를 사용
API는 다른 사이트와 대화(응답)을 주고받음

그림판이 스마트폰에선 사용이 불가
-> 그 이유는 mouse 이벤트를 사용해서이기 때문
폰에서도 사용이 가능한 이벤트를 사용해야 한다.
touch Events 사용해줄 예정 -> 1월 17일 수정 완료

iphone(IOS) safari 기준 복수 탭 쓰면 아래 하얀 여백이 생성
-> 단일탭 사용시에는 여백이 없어짐

2021년 1월 17일 최종 1.0 ver 완성
