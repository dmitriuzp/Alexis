$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    autoplay: true,
  });
  new WOW().init();
  $('.sidebar__open').on('click', function() {
    $('.sidebar').toggleClass('open');
  });
  $('.sidebar__close').on('click', function() {
    $('.sidebar').removeClass('open');
  });
});
$(document).scroll(function() {
  var scrolltop = $(window).scrollTop();
  var element = $('.workExp').offset().top - 300;
  if(scrolltop > element) {
    $('.workExp__boxes').addClass('active-line');
  }
});