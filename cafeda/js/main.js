$(document).ready(function(){
    const swiperSE = new Swiper('.hit ul .coffee .list, .hit ul .bag .list', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 0, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
          640: {    /* 640px 이상일때 적용 */
              slidesPerView: 3,
              spaceBetween: 20,
          },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });

    const swiper = new Swiper('.event .list', { /* 팝업을 감싼는 요소의 class명 */

        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
          640: {    /* 640px 이상일때 적용 */
              slidesPerView: 3,
              spaceBetween: 20,
          },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: false,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        // navigation: {  /* 이전, 다음 버튼 */
        //     nextEl: '.next',  /* 다음 버튼의 클래스명 */
        //     prevEl: '.prev',  
        // },

    });

    $('.event .list ul li .navi .next').on('click', function(){
        swiper.slideNext(500, true); /* next를 눌러도 autoplay가 작동함 */
        swiper.autoplay.start();  /* 재생 기능 */
    });
    $('.event .list ul li .navi .prev').on('click', function(){
        swiper.slidePrev(500, true); /* prev를 눌러도 autoplay가 작동함 */
        swiper.autoplay.start();  /* 재생 기능 */
    });

    

    $('.hit ul li.bag .detail .navi button.prev').on('click', function(){
        $('.hit ul li.bag').removeClass('active');
        $('.hit ul li.coffee').addClass('active');
    });
    $('.hit ul li.bag .detail .navi button.next').on('click', function(){
        $('.hit ul li.bag').removeClass('active');
        $('.hit ul li.coffee').addClass('active');
    });
    $('.hit ul li.coffee .detail .navi button.prev').on('click', function(){
        $('.hit ul li.coffee').removeClass('active');
        $('.hit ul li.bag').addClass('active');
    });
    $('.hit ul li.coffee .detail .navi button.next').on('click', function(){
        $('.hit ul li.coffee').removeClass('active');
        $('.hit ul li.bag').addClass('active');
    });
    $('.hit ul li.bag a').on('click', function(){
      $('.hit ul li.coffee').removeClass('active');
      $('.hit ul li.bag').addClass('active');
    });
    $('.hit ul li.coffee a').on('click', function(){
        $('.hit ul li.bag').removeClass('active');
        $('.hit ul li.coffee').addClass('active');
    });


    // $('.event .list ul li.comp a .navi button.prev').on('click', function(){
    //     $('.event .list ul li.comp').removeClass('active');
    //     $('.event .list ul li.ex').addClass('active');
    // });
    // $('.event .list ul li.ex a .navi button.prev').on('click', function(){
    //     $('.event .list ul li.ex').removeClass('active');
    //     $('.event .list ul li.shave').addClass('active');
    // });
    // $('.event .list ul li.shave a .navi button.prev').on('click', function(){
    //     $('.event .list ul li.shave').removeClass('active');
    //     $('.event .list ul li.reg').addClass('active');
    // });
    // $('.event .list ul li.reg a .navi button.prev').on('click', function(){
    //     $('.event .list ul li.reg').removeClass('active');
    //     $('.event .list ul li.green').addClass('active');
    // });
    // $('.event .list ul li.green a .navi button.prev').on('click', function(){
    //     $('.event .list ul li.green').removeClass('active');
    //     $('.event .list ul li.comp').addClass('active');
    // });
    // $('.event .list ul li.comp a .navi button.next').on('click', function(){
    //     $('.event .list ul li.comp').removeClass('active');
    //     $('.event .list ul li.green').addClass('active');
    // });
    // $('.event .list ul li.green a .navi button.next').on('click', function(){
    //     $('.event .list ul li.green').removeClass('active');
    //     $('.event .list ul li.reg').addClass('active');
    // });
    // $('.event .list ul li.reg a .navi button.next').on('click', function(){
    //     $('.event .list ul li.reg').removeClass('active');
    //     $('.event .list ul li.shave').addClass('active');
    // });
    // $('.event .list ul li.shave a .navi button.next').on('click', function(){
    //     $('.event .list ul li.shave').removeClass('active');
    //     $('.event .list ul li.ex').addClass('active');
    // });
    // $('.event .list ul li.ex a .navi button.next').on('click', function(){
    //     $('.event .list ul li.ex').removeClass('active');
    //     $('.event .list ul li.comp').addClass('active');
    // });



});