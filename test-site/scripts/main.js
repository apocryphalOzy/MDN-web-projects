"use strict";

let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ricardo-milos-face.jpg") {
    myImage.setAttribute("src", "images/dr-evil.jpg");
  } else {
    myImage.setAttribute("src", "images/ricardo-milos-face.jpg");
  }
};
