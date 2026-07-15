'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // const rect = wall.getBoundingClientRect();
  const x = e.clientX - spider.offsetWidth / 2;
  const y = e.clientY;
  // const borderWidth = getComputedStyle(wall).borderWidth;

  // if (x < rect.left + spider.offsetWidth / 2 - borderWidth) {


  // }

  spider.style.position = 'fixed';
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
