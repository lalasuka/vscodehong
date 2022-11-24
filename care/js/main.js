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
});