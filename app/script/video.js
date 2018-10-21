'use strict';

let overlay = document.querySelector('.overlay'),
    video = document.querySelector('#video');

function play() {
  if (video.paused) {
    video.play();
    overlay.classList.add('play');
  } else {
    video.pause();
    overlay.classList.remove('play');
  }
}

if (overlay.addEventListener) {
  overlay.addEventListener("click", play, false)
}