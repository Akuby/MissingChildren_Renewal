const menu = document.querySelector('#lnb');
const nav = document.querySelector('header');
// 네비게이션
menu.addEventListener('mouseenter', function () {
  nav.style.height = '20rem';
});
menu.addEventListener('mouseleave', function () {
  nav.style.height = '6rem';
})

// // 캠페인 슬라이더 in js
// const campNextBtn = document.querySelector('#camp-next');
// const campPrevBtn = document.querySelector('#camp-prev');
// const campSlider = document.querySelector('#camp-slider');
// let campLength = campSlider.childElementCount;
// const slideSpeed = 400;
// // 슬라이더 넓이 동적 지정 및 트랜지션 속도 지정
// campSlider.style.width = `${(campLength) * 100}%`;
// campSlider.style.transition = `transform ${slideSpeed}ms`;

// // curIndex를 통해 
// let curIndex = 1;
// campNextBtn.addEventListener('click', function () {
//   if (curIndex == campLength) {
//     let dupNode = campSlider.firstElementChild.cloneNode(true);
//     // 1번 복제해서 마지막 뒤에 append 해준 다음
//     campSlider.appendChild(dupNode);
//     campLength = campSlider.childElementCount;
//     campSlider.style.width = `${(campLength) * 100}%`;
//     // 현재 위치 조정해주고
//     campSlider.style.transition = `0ms`;
//     campSlider.style.transform = `translateX(-${(100 / campLength) * (curIndex-1)}%)`;
//     // 똑같이 translate 하는거 보여주고,
//     setTimeout(() => {
//       campSlider.style.transition = `transform ${slideSpeed}ms`;
//       campSlider.style.transform = `translateX(-${(100 / campLength) * (curIndex)}%)`;
//     }, 1);
//     campSlider.style.transition = `0ms`;
//     campSlider.style.transform = `translateX(-0%)`
//     // append한거 지운다음 애니메이션 없이 translate 0 한다.
//     // curIndex = 1;
//   } else {
//     campSlider.style.transform = `translateX(-${(100 / campLength) * (curIndex)}%)`;
//     curIndex++;
//   }
//   // curSlide = slideContents[++curIndex];
// })
// campPrevBtn.addEventListener('click', function () {
//   // 마지막 슬라이드 복제해서 맨 앞에 prepend 해준 다음ㅁ
//   // 똑같이 translate + 하는거 보여주고
//   // prepend 한거 지운다음 애니메이션 없이 translate 66% 한다.
// })
