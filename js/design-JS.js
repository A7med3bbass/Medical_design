$(document).ready(function() {

  $(function() {
    'use strict';
  var winH = $(window).height();
  var naving = $('.navbar').innerHeight();
  $('.slider , .carousel-item').height(winH-naving);
});


$.fn.centerElement = function  () {
  $(this).css({
    'position' : 'absolute',
    'left' : ($(window).width() - $(this).width()) / 2,
    'top'  : ($(window).height() - $(this).height()) / 2
  });
};

$('.homeDesc').centerElement();

  var textWrapper = document.querySelector('#ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: true})
    .add({
      targets: '#ml2 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70*i
    }).add({
      targets: '#ml2',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  //$('.icon-home').fadeIn(3000);

  $('html').niceScroll({cursorcolor : '#46b3e6', cursorwidth : '9px'});

  $('.customer-logos').slick({
   slidesToShow: 6,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 1000,
   arrows: false,
   dots: false,
   pauseOnHover: false,
   responsive: [{
     breakpoint: 768,
     settings: {
       slidesToShow: 4
     }
   }, {
     breakpoint: 520,
     settings: {
       slidesToShow: 3
     }
   }]
 });

});





/* ========================================== Important Codes ===========
$(window).scroll(function () {
    if ($(document).scrollTop() == 0) {
        $('#header').removeClass('tiny');
        $('#menu-spacing').addClass('nav-margin-top');
        $('.title-area img').attr('src', 'img/resolute_logo.png');
    } else {
        $('#header').addClass('tiny');
        $('#menu-spacing').removeClass('nav-margin-top');
        $('.title-area img').attr('src', 'your-new-image.png');
    }
}); ================= */
