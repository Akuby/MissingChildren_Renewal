$(document).ready(function () {
  let resizeCount = 0
  let isMobile = 0;
  let temp = 0;
  let isMoving = 0;
  let missingperson = $('#miss-slider li').get();
  let cooperate = $('.coop-slider li a').get();


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

  // 모바일 화면에서 메뉴 아이콘 터치 시 네비게이션 화면 전환
  $('#navi-show').on('click', function () {
    if ($('header').hasClass('min')) { // 닫기
      $('#lnb, #gnb').fadeOut(200, function () {
        $('header').removeClass('min');
      });
    } else { // 열기
      $('header').addClass('min');
      $('#lnb, #gnb').hide().fadeIn(200);
    }
  })

  // 캠페인 슬라이더 내 실종아동 페이드인아웃
  setInterval(() => {
    $('.camp-img-container img:eq(1):not(:animated)').addClass('active').css({
      opacity: 0
    }).animate({
      opacity: 1
    }, 1000, function () {
      $('.camp-img-container').append($('.camp-img-container img:eq(0)')).children('img:last').removeClass('active');
    })
  }, 5000);

  // 실종아동 슬라이더

  $('#camp-prev').hide();
  $('#camp-next').on('click', function () {
    if (isMoving == 0) {
      isMoving = 1;
      temp++;
      if (temp >= $('#camp-slider').children().length - 1) {
        $('#camp-next').fadeOut();
      } else if (temp > 0) {
        $('#camp-prev').fadeIn();
      }
      $('#camp-slider').stop().animate({
        marginLeft: `${-100 * temp}%`
      }, 500, function () {
        isMoving = 0;
      })
    }
  })
  $('#camp-prev').on('click', function () {
    if (isMoving == 0) {
      isMoving = 1;
      temp--;
      if (temp == 0) {
        $('#camp-prev').fadeOut();
      } else if (temp < $('#camp-slider').children().length) {
        $('#camp-next').fadeIn();
      }
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


  let round = -3.5;
  let sliderTop, sliderHeight;
  let nSlider = $('.cooperate div ul').eq(0).clone();
  $('.cooperate div').append(nSlider);

  setInterval(() => {
    $('.cooperate div').animate({
      marginTop: `${round}rem`
    }, 1000, function () {

      // sliderTop : 현재 위로 올라간 높이
      // sliderHeight : 두 개의 ul을 가지고 있는 div의 높이 - 노출되는 컨테이너의 높이 

      sliderTop = parseFloat($(this).css('marginTop')) * -1;
      sliderHeight = parseFloat($(this).css('height')) - parseFloat($(this).parent().css('height'));

      // 두 값이 같다면, 현재 마지막 ul의 마지막 li가 노출되고 있음

      if (parseInt(sliderTop) == parseInt(sliderHeight)) {
        $(this).children(':eq(0)').remove();
        $(this).css({
          marginTop: (parseFloat($('.cooperate div ul').eq(0).css('height')) - parseFloat($(this).parent().css('height'))) * -1 + 'px'
        });
        $(this).append($('.cooperate div ul').eq(0).clone());
        round = -3.5;
      }

      // li 높이 만큼의 마진으로 슬라이드 올리기
      round -= 3.5;
    })
  }, 6000);

  let cursorStart, finalPos = 0;
  let isMouseDown = false;
  // 모바일 터치 시험
  $('#camp-slider').on('touchstart', function (e) {
    console.log('clicked')
    cursorStart = e.touches[0].clientX;
    isMouseDown = true;
  }).on('touchmove', function(e) {
    if (isMouseDown) {
      $(this).css('transform', `translateX(${e.touches[0].clientX - cursorStart}px)`)
    }
  }).on('touchend', function(e) {
    isMouseDown = false;
    if ( e.changedTouches[0].clientX - cursorStart < -100) {
      $('#camp-slider').css('transition', 'all 0.5s').css('transform', 'translateX(-100vw)');
    } else {
      $('#camp-slider').css('transition', 'all 0.5s').css('transform', 'translateX(0vw)');
    }
    setTimeout(()=>{
      $('#camp-slider').css('transition', 'none')
    }, 500)
  })


  $('#miss-slider').on('mousedown', function () {
    console.log('clicked!')
  })





});