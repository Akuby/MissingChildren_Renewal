$(document).ready(function () {
  let resizeCount = 0
  let isMobile = 0;
  let missingperson = $('#miss-slider li').get();
  let cooperate = $('.coop-slider li a').get();
  insertBg(missingperson, 'missingperson');
  insertBg(cooperate, 'cooperate');
  resize();
  $(window).on('resize', resize);


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

  // 네비게이션

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

    let campSwiper = new Swiper(".campSwiper", {
      slidesPerView: 1,
      spaceBetween: 100,
      direction: "vertical",
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      centeredSlides: true,
    });

  } else if (isMobile == 1) {

    $('#campaign').toggleClass('min');

    let m_campSwiper = new Swiper(".campSwiper", {
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      centeredSlides: true,
    });
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
  }, 3000);

  // 실종아동 슬라이더
  // 모바일 환경에선 slidesPerView 줄이기
  let missSwiper = new Swiper(".missSwiper", {
    slidesPerView: 5,
    freeMode: true
  });

  // 협력기관 슬라이더

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

      // 두 값이 같을 때, 자리 정리

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
});