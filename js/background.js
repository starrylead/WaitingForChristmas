const images =
["xmas1.jpg", "xmas2.jpg", "xmas3.jpg", "xmas4.jpg", "xmas5.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const cover = document.querySelector("#background");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
document.body.appendChild(cover);