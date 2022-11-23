$(document).ready(function(){

    let scrolling;
    scrollChk();

    $(window).scroll(function(){
        scrollChk();
    });

    function scrollChk(){
        scrolling = $(window).scrollTop();
        // console.log(scrolling, '스크롤해용!');

        if(scrolling > 0){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    }
});