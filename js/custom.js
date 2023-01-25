$(function () {
  $('.slider').slick({
     infinite: true,
     slidesToShow: 6,
     slidesToScroll: 6,
     prevArrow: '<div class=".d-md-none .d-lg-block"><div class="priv_arrow"><div class="left"><i class="fa-solid fa-angle-left"></div></div></div>',
     nextArrow: '<div class=".d-md-none .d-lg-block"><div class="next_arrow"><div class="right"><i class="fa-solid fa-angle-right"></div></div></div>',
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 180,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
