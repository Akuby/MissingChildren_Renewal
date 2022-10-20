let resizeCount = 0
let isMobile = 0;
let missingperson = $('#miss-slider li').get();
let cooperate = $('#coop-slider li a').get();

function insertBg(sliderName, folderName) {
  sliderName.forEach((el, idx) => {
    $(el).css({
      backgroundImage: `url(./assets/${folderName}/${idx+1}.png)`
    })
  });
}

function resize() {
  console.log('resized : ' + resizeCount++)
  if ($(window).innerWidth() <= 768) {
    isMobile = 1;
  } else {
    isMobile = 0;
  }
}

insertBg(missingperson, 'missingperson');
insertBg(cooperate, 'cooperate');
resize();
$(window).on('resize', resize);


// 네비게이션
// debounce 적용하고 나서는 resize에 바로 넣기
if (isMobile == 0) {
  $('#lnb').on('mouseenter', function () {
    $('header').css({
      height: '20rem'
    })
  }).on('mouseleave', function () {
    $('header').css({
      height: '6rem'
    })
  })
}
if (isMobile == 1) {
  $('#campaign').toggleClass('min');
}

$('#navi-show').on('click', function () {
  if($('header').hasClass('min')) { // 닫기
    $('#lnb, #gnb').fadeOut(200, function() {
      $('header').removeClass('min');
    });
  } else { // 열기
    $('header').addClass('min'); 
    $('#lnb, #gnb').hide().fadeIn(200);
  }
})

// 실종아동 슬라이더
let initMargin;
let sliderMarginLeft = parseInt($('#camp-slider').css('marginLeft'));
let temp = 0;
let isMoving = 0;
$('#camp-next').on('click', function () {
  if (isMoving == 0) {
    isMoving = 1;
    temp++;
    $('#camp-slider').stop().animate({
      marginLeft: `${-100 * temp}%`
    }, 500, function () {
      isMoving = 0
    })
  }
})
$('#camp-prev').on('click', function () {
  if (isMoving == 0) {
    isMoving = 1;
    temp--;
    $('#camp-slider').stop().animate({
      marginLeft: `${-100 * temp}%`
    }, 500, function () {
      isMoving = 0;
    })
  }
})
$('#miss-next').on('click', function () {
  $('#miss-slider').animate({
    marginLeft: '-100%'
  }, 500)
})
// $('#miss-prev').on('click', function() {
//   $('#miss-slider').animate({marginLeft: `${}%`}, 500)
// })



// 모바일 터치 시험

let curPos = 0;
let postion = 0;
let start_x, end_x;
const IMAGE_WIDTH = 375;
const images = document.querySelector(".slide");
const campSlider = document.getElementById('camp-slider');
 
images.addEventListener('touchstart', touch_start);
images.addEventListener('touchend', touch_end);
 
function prev(){
  if(curPos > 0){
    postion += IMAGE_WIDTH;
    campSlider.style.transform = `translateX(${postion}px)`;
    curPos = curPos - 1;
  }
}
function next(){
  if(curPos < 3){
    postion -= IMAGE_WIDTH;
    campSlider.style.transform = `translateX(${postion}px)`;
    curPos = curPos + 1;
  }
}
 
function touch_start(event) {
  start_x = event.touches[0].pageX
}
 
function touch_end(event) {
  end_x = event.changedTouches[0].pageX;
  if(start_x > end_x){
    next();
  }else{
    prev();
  }
}