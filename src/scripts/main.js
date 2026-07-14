'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // const rect = wall.getBoundingClientRect();
  const x = e.clientX - spider.offsetWidth / 2;
  const y = e.clientY;

  // if (x < rect.left + spider.offsetWidth / 2 - ) {
  //   console.log('left');

  // }

  spider.style.position = 'fixed';
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
