# Doit!

<br>

---

- 목차 \
  ☝. 서비스 소개 \
  ✌. 개발과정(어려웠던 점과 해결방안) \
  👌. 최종

---

## 서비스 소개

### ① 로그인 서비스

- 회원가입 없이 이름만으로 로그인할 수 있다.

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
touch Events 사용해줄 예정

https://danbe80.github.io/doit.github.io/
