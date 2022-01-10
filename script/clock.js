const clock = document.querySelector("#clock");

function handleClock() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const am = `AM`;
  const pm = `PM`;
  let meridiem = ``;
  if(hours > 12){
    meridiem = pm;
    hours = hours - 12;
    clock.innerText = `${meridiem} ${hours}:${minutes}:${seconds}`;
  }
  else {
    meridiem = am;
    clock.innerText = `${meridiem} ${hours}:${minutes}:${seconds}`;
  }
}


setInterval(handleClock, 1000);

handleClock();