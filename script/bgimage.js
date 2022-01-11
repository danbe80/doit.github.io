const bgimages = [
  { image: "0.png",
    alt: "배경화면1"    
  },
  { image: "1.png",
    alt: "배경화면2"    
  },
  { image: "2.png",
    alt: "배경화면3"    
  },
  { image: "3.png",
    alt: "배경화면4"    
  },
  { image: "4.png",
    alt: "배경화면5"    
  }
]
const baseImg = document.querySelector("#background-images");
const todayIsbg = bgimages[Math.floor(Math.random() * bgimages.length)];
const img = document.createElement("img");

img.src = `images/${todayIsbg.image}`;
img.alt = `${todayIsbg.alt}`;
baseImg.appendChild(img);
