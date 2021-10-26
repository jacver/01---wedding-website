'use strict';

// -------------------Animating burger nav----------------------
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
      // if-else will reset link fade when menu closes and reopens
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 1.5
        }s`;
      }
    });
    // burger animation
    burger.classList.toggle('toggle');
  });
};

navSlide(); // invoking the function

//  --------------------live countdown --------------

// setting countdown date
let countDownDate = new Date('June 4, 2022 17:00:00').getTime();

// counting down every second
let x = setInterval(function () {
  // update count down every 1s
  let now = new Date().getTime();
  // distance between now and end date
  let distance = countDownDate - now;
  // time calculators for day, hr, min, sec
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // display results w/ query selector or getElementByID
  document.querySelector(
    '.countdown'
  ).textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  // end text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector('.countdown').textContent = 'Party time!';
  }
}, 1000);
