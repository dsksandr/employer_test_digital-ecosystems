'use strict';

let width = 435,
    count = 3;

let shopCarousel = document.querySelector('#shopCarousel'),
    list = shopCarousel.querySelector('.list'),
    goods = shopCarousel.querySelectorAll('.good');

let position = 0;

shopCarousel.querySelector('.prevGoods').onclick = () => {
  position = Math.min(position + width * count, 0);
  list.style.marginLeft = position + 'px';
};
shopCarousel.querySelector('.nextGoods').onclick = () => {
  position = Math.max(position - width * count, -width * (goods.length - count));
  list.style.marginLeft = position + 'px';
};