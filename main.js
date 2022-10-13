const menu = document.querySelector('#lnb');
const nav = document.querySelector('header');
const campNextBtn = document.querySelector('#camp-next');
const campPrevBtn = document.querySelector('#camp-prev');
const campSlider = document.querySelector('#camp-slider');
let count = 0;
menu.addEventListener('mouseenter', function () {
  nav.style.height = '20rem';
});
menu.addEventListener('mouseleave', function () {
  nav.style.height = '6rem';
})
campNextBtn.addEventListener('click', function () {
  if (count == 0) {
    campSlider.style.marginLeft = '-100%';
    count = 1;
  }
  else if (count == 1) {
    campSlider.style.marginLeft = '-200%';
    count = 2;
  }
  else if (count == 2) {
    campSlider.style.marginLeft = '0'
    count = 0 ;
  }
})
campPrevBtn.addEventListener('click', function () {
  if (count == 0) {
    campSlider.style.marginLeft = '-200%';
    count = 1;
  }
  else if (count == 1) {
    campSlider.style.marginLeft = '-100%';
    count = 2;
  }
  else if (count == 2) {
    campSlider.style.marginLeft = '0'
    count = 0 ;
  }
})