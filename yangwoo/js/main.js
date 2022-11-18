$(document).ready(function(){
    const swiperV = new Swiper('.visual .slide', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: false,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    });

    const swiperB = new Swiper('.biz .biz_list', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },

        speed: 600,

        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 120, /* li와 li사이 - 제일 작은 여백 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.biz .pagin', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.next',  /* 다음 버튼의 클래스명 */
            prevEl: '.prev',  
        },

    });

    const swiperP = new Swiper('.pro .pro_list', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 20, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 800px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {    /* 1200px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },

        loop: true,

        navigation: {
            nextEl: '.next_pro',
            prevEl: '.prev_pro',
        },
    });

    const swiperN = new Swiper('.news .news_list', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 40, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            800: {    /* 800px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {    /* 1200px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },

        loop: true,

        navigation: {
            nextEl: '.next_news',
            prevEl: '.prev_news',
        },
    });

});