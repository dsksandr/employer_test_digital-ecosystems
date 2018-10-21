'use strict';

const slides = document.querySelectorAll('#headerSliderUl .slide'),
      slideInterval = setInterval(nextSlide,5000),
      pageNumber = document.querySelector('.pageNumber');

let currentSlide = 0;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide showSlide';
  pageNumber.innerHTML = `<span>${currentSlide + 1} </span>/<span> ${slides.length}</span>`;
}

const next = document.getElementById('nextSlide'),
      previous = document.getElementById('previousSlide');

next.onclick =  () => nextSlide();

previous.onclick = () => previousSlide();