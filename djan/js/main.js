$(document).ready(function(){
  /* 
    visual의 높이를 부라우저의 높이와 동일하게
    $(window).height() - 브라우저 창의 높이
    $(document).height() - 스크롤된 전체 문서의 높이

    $(window).height()의 높이를 visual의 높이로 설정
    1. 처음에 로딩했을때
    2. 브라우저가 리사이즈 될때마다
  */

  let winh = $(window).height()
  console.log(winh)
  $('.visual').height(winh)

  $(window).resize(function(){
    winh = $(window).height()
    console.log(winh)
    $('.visual').height(winh)
  })
  
})
/*
  작은 따옴표를 찍지 않는 것은 window, document이다.
  animate를 제외한 모든 실행문은 $(document).redy(function(){})로 시작한다.
  let으로 선언하기.
*/