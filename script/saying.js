const sayings = [
  {
    eng: "First, Think. Second, believe. Third, dream, And finally, dare.",
    kr: "첫째, 생각하라. 둘째, 믿어라. 셋째, 꿈꿔라. 그리고 마지막으로 덤벼들어라."
  },
  {
    eng: "All our dreams can come true, if you have the courage to pursue them.",
    kr: "꿈을 끝까지 추구할 용기가 있다면 우리의 꿈들은 모두 실현될 수 있다."
  },
  {
    eng: "If yo u can dream it, you can do it. Always remember that this whole thing was started with a dream and a mouse.",
    kr: "꿈꿀 수 있다면, 이룰 수 있다. 내 모든 것이 꿈과 생쥐 한 마리로 시작했다는 것을 늘 기억하라."
  },
  {
    eng: "The way to get started is to quit talking and begin doing.",
    kr: "무엇인가 시작하려면 입을 다물고 몸을 움직여라. "
  },
  {
    eng: "Get a good idea and stay with it. Dog it, and work at it until it’s done right.",
    kr: "아이디어가 떠오르면 늘 함께 해라. 아이디어를 놓치지 말고, 제대로 구현될 때까지 굴려라."
  },
  {
    eng: "웃음은 유행을 타지 않고, 상상력은 나이를 따지지 않고, 꿈은 영원하다.",
    kr: "Laughter is timeless, Imagination has no age, and Dreams are forever."
  },
  {
    eng: "It’s kind of fun to do the impossible.",
    kr: "불가능한 일을 하는 게 쏠쏠한 재미다."
  },
  {
    eng: "When you’re curious, you find lots of interesting things to do.",
    kr: "호기심이 있다면 수많은 흥미로운 일들을 발견할 수 있다. "
  },
  {
    eng: "Why worry? If you’ve done the very best you can, worrying won’t make it any better.",
    kr: "왜 걱정하는가? 최선을 다했다면, 걱정한다고 더 나아지지 않는다."
  },
  {
    eng: "There is more treasure in books than in all the pirate’s loot on Treasure Island.",
    kr: "책 속에는 보물섬에 있는 모든 해적들의 노획물보다 더 소중한 보물이 있다."
  },

]

const waltDisneySayingEng = document.querySelector("p#waltDisney-eng");
const waltDisneySayingKr = document.querySelector("p#waltDisney-kr");

const todaySaying = sayings[Math.floor(Math.random() * sayings.length)];

waltDisneySayingEng.innerText = todaySaying.eng;
waltDisneySayingKr.innerText = todaySaying.kr;