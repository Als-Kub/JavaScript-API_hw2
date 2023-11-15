"use strict";

const leftArrowEl = document.querySelector(".left-arrow");
const rightArrowEl = document.querySelector(".right-arrow");
const imgArrayEl = document.querySelectorAll(`[data-img]`);
const dotsEl = document.querySelector(".nav-dots");
const dotArrayEl = dotsEl.querySelectorAll(`[data-dot]`);
let activeImg = 1;
const amountImg = imgArrayEl.length;

imgArrayEl.forEach((item) => {
  if (parseInt(item.getAttribute(`data-img`)) === activeImg) {
    item.classList.add("visible");
  } else {
    item.classList.add("hidden");
  }
});
dotArrayEl.forEach((item) => {
  if (parseInt(item.getAttribute(`data-dot`)) === activeImg) {
    item.classList.add("color");
  }
});

leftArrowEl.addEventListener("click", () => {
  activeImg--;
  if (activeImg == 0) {
    activeImg = amountImg;
  }
  changeSlide(activeImg);
  changeDot(activeImg);
});

rightArrowEl.addEventListener("click", () => {
  activeImg++;
  if (activeImg > amountImg) {
    activeImg -= amountImg;
  }
  changeSlide(activeImg);
  changeDot(activeImg);
});

function changeSlide(number) {
  const currentImg = document.querySelector(".visible");
  currentImg.classList.remove("visible");
  currentImg.classList.add("hidden");
  imgArrayEl.forEach((item) => {
    if (parseInt(item.getAttribute(`data-img`)) === number) {
      item.classList.remove("hidden");
      item.classList.add("visible");
    }
  });
}

dotsEl.addEventListener("click", (e) => {
  if (e.target.className === "dot") {
    const number = parseInt(e.target.getAttribute(`data-dot`));
    changeDot(number);
    activeImg = number;
    changeSlide(number);
  }
});

function changeDot(number) {
  const currentDot = dotsEl.querySelector(".color");
  currentDot.classList.remove("color");
  dotArrayEl.forEach((item) => {
    if (parseInt(item.getAttribute(`data-dot`)) === number) {
      item.classList.add("color");
    }
  });
}
