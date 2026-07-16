'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();
  let x = e.clientX - spider.offsetWidth / 2;
  let y = e.clientY;
  const borderWidth = parseInt(getComputedStyle(wall).borderWidth);

  if (e.clientX < borderWidth + rect.left + spider.offsetWidth / 2) {
    // console.log('border left');
    x = borderWidth + rect.left;
  } else if (e.clientX > rect.right - borderWidth - spider.offsetWidth / 2) {
    // console.log('border right');
    x = rect.right - borderWidth - spider.offsetWidth;
  }

  if (e.clientY < rect.top + borderWidth) {
    // console.log('border top');
    y = rect.top + borderWidth;
  } else if (e.clientY > rect.bottom - borderWidth - spider.offsetWidth) {
    // console.log('border bottom');
    y = rect.bottom - borderWidth - spider.offsetWidth;
  }

  spider.style.position = 'fixed';
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
