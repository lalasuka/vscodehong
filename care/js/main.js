$(document).ready(function(){
    const swiperC = new Swiper('.camp .camp_list', { /* 팝업을 감싼는 요소의 class명 */

        centeredSlides: true,
        slidesPerView: "auto",

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.camp .camp_list .pagin_group .pagin', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.camp .camp_list .pagin_group .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.camp .camp_list .pagin_group .prev',  
        },

    });

    const swiperN = new Swiper('.notice .notice_list', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            500: {    /* 640px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 20,
            },
            800: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
        navigation: {
            nextEl: '.notice .pagin_list .next',
            prevEl: '.notice .pagin_list .prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.notice .pagin_list .pagin', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });
});