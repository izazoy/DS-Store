// IMAGE SLIDER
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", activeSlide());

function activeSlide() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
// END IMAGE SLIDER

// BUTTON CHECK

let form1 = document.querySelector(".form1");
let emailInput1 = form1.querySelector('input[type="email"]');
let passwordInput1 = form1.querySelector('input[type="password"]');
let signInButton = form1.querySelector(".signin-button");

let form2 = document.querySelector(".form2");
let createButton = form2.querySelector(".create-button");
let emailInput2 = form2.querySelector('input[type="email"]');
let passwordInput2 = form2.querySelector('input[type="password"]');

signInButton.addEventListener("click", function (event) {
  if (!emailInput1.value.trim()) {
    event.preventDefault();
    emailInput1.classList.add("error");
    passwordInput1.classList.add("error");
  } else {
    emailInput1.classList.remove("error");
    passwordInput1.classList.remove("error");
  }
});

createButton.addEventListener("click", function (event) {
  if (!emailInput2.value.trim()) {
    event.preventDefault();
    emailInput2.classList.add("error");
    passwordInput2.classList.add("error");
  } else {
    emailInput2.classList.remove("error");
    passwordInput2.classList.remove("error");
  }
});

// END BUTTON CHECK
