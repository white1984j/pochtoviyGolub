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


});
