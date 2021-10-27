const images =
["halloween1.jpg", "halloween2.jpg", "halloween3.jpg", "halloween4.jpg", "halloween5.jpg",
"halloween6.jpg", "halloween7.jpg", "halloween8.jpg", "halloween9.jpg", "halloween10.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const cover = document.querySelector("#background");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
document.body.appendChild(cover);