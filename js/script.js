$(function() {

  $(document).ready(function() {

    var scrollOffset = $('.nav').offset();

    $(window).scroll(function() {
      if ($(document).scrollTop() > scrollOffset.top) {
        $('.nav').addClass('scroll-fixed');
      }
      else {
        $('.nav').removeClass('scroll-fixed');
      }
    });
  });
});

/* AOS스크롤 */
AOS.init({
  duration: 3000
  
  
  
  
 
})