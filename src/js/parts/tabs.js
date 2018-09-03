$(document).ready(function() {
  var user = $('.team .box');
  var tab = $('.team .tabs__tab');
  user.click(function() {
    if(!$(this).hasClass('active')) {
      var i = $(this).index();
      user.removeClass('active');
      tab.removeClass('active');
      $(this).addClass('active');
      $(tab[i]).addClass('active');
    }
  });
});