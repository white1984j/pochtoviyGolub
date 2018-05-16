$(function() {

	
  //news slider
  $('.news-preview-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button class="slick-arrow slick-arrow--prev"><i class="icon icon-arrow-blue"></i></button>',
    nextArrow: '<button class="slick-arrow slick-arrow--next"><i class="icon icon-arrow-blue"></i></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },{
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        },
      }
    ]
  });


  //thanks slider
  $('.b-thanks-slider').slick({
    slidesToShow: 4,
    infinite: false,
    prevArrow: '<button class="slick-arrow slick-arrow--prev"><i class="icon icon-arrow-blue"></i></button>',
    nextArrow: '<button class="slick-arrow slick-arrow--next"><i class="icon icon-arrow-blue"></i></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },{
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        },
      },{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        },
      }
    ]
  })
  function initThanksSliderBg(){
    if( $(window).width() > 991 ){
      if( $('.b-thanks-slider--bg').hasClass('slick-initialized') )
        $('.b-thanks-slider--bg').slick('unslick');
    }else{
      if( $('.b-thanks-slider--bg').hasClass('slick-initialized') )
        return;
      $('.b-thanks-slider--bg').slick({
        slidesToShow: 4,
        infinite: false,
        dots: true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              arrows: false,
              dots: true
            }
          },{
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              arrows: false,
              dots: true
            },
          },{
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true
            },
          }
        ]
      })
    }
  }
  initThanksSliderBg();
  $(window).on('resize', function() {
    initThanksSliderBg();
  });
    


  //b-believe-goods-slider
  function initBelieveGoodsSlider(){
    if( $(window).width() > 991 ){
      if( $('.b-believe-goods-slider').hasClass('slick-initialized') )
        $('.b-believe-goods-slider').slick('unslick');
    }else{
      if( $('.b-believe-goods-slider').hasClass('slick-initialized') )
        return;
      $('.b-believe-goods-slider').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              arrows: false,
              dots: true
            }
          },{
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true
            }
          }
        ]
      })
    }
  }
  initBelieveGoodsSlider();
  $(window).on('resize', function() {
    initBelieveGoodsSlider();
  });


  //hamburger
  $('.b-hamburger').on("click", function(){
    $(this).toggleClass('open');
    $('.b-header-main').slideToggle();
  });
  $(document).on("click", function() {
    if( $(window).width() > 767 ) return;
    if( $('.b-header-main:not(:animated):visible').length ){
      $('.b-hamburger').removeClass('open');
      $('.b-header-main').slideUp();
    }
  });



  //lightgallery
  $('.js-gallery').lightGallery({
    selector: ".js-lightgallery-item",
    appendSubHtmlTo: '',
    download: false
  }); 



  //toggle vakancy
  $('.js-toggle-vakancy').on("click", function() {
    $(this)
      .closest('.b-vakancy')
      .toggleClass('b-vakancy--active')
      .find('.b-vakancy-body')
      .slideToggle()
  });



  //history
  $('.b-history').on("click", function(e) {
    if( e.target.closest('.b-history__hidden') ) return;
    $(this).addClass('b-history--active').find('.b-history__hidden').slideToggle('fast', function() {
      $('.b-history-text').getNiceScroll().resize();
    });
      
  });
  $('.b-history-hidden__close').on("click", function() {
    $(this).closest('.b-history').removeClass('b-history--active').find('.b-history__hidden').slideUp('fast',function(){
      $('.b-history-text').getNiceScroll().resize();
    });
  });

  $('.b-history-text').niceScroll({
    cursorcolor: "#0c7de5",
    background: "#d5dee7",
    autohidemode: false,
    railpadding: { top: 0, right: 10, left: 0, bottom: 30 },
    emulatetouch: true
  });




  //tabs
  $(".b-tabs__item").click(function() {
    $(this).closest('.b-tabs-wrapper').find(".b-tabs__item").removeClass("active").eq($(this).index()).addClass("active");
    $(this).closest('.b-tabs-wrapper').find(".b-tabs-content__item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");


});
