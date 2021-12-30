const bgimages = [
  { image: "0.png"},
  { image: "1.png"},
  { image: "2.jpg"},
  { image: "3.jpg"}
]
const baseImg = document.querySelector("#background-images");
const todayIsbg = bgimages[Math.floor(Math.random() * bgimages.length)];
const img = document.createElement("img");

img.src = `images/${todayIsbg.image}`;
baseImg.appendChild(img);
