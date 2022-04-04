const weather = document.querySelector("#weather");
const city = document.querySelector("#city");
const API_KEY = "4aa557b576c9f3bcd8b17a9fa3d98b0d"; // 나의 API key

function onGeoOk(position) {
  // 성공시
  const lat = position.coords.latitude; // 경도
  const lon = position.coords.longitude; // 위도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // units=metric => 화씨를 섭씨로

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  // 실패시
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
