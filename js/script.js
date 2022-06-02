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

/* 타이핑효과 */
var typingBool = false; 
var typingIdx=0; 
var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
if(typingBool==false){ // 타이핑이 진행되지 않았다면 
   typingBool=true; 
   
   var tyInt = setInterval(typing,90); // 타이핑 스피드 설정 
 } 
 
 function typing(){ 
   if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
   $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
   typingIdx++; 
   } else{ 
   clearInterval(tyInt); //끝나면 반복종료
   
   } 
 }