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
  })


});
