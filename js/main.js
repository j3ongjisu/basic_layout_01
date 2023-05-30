$(function () {

    $('.product_slide').slick({
        //반응형 슬라이드 만드는 법
        slidesToShow: 3,
        //제품 슬라이드와 pic 슬라이드가 같이 돎.
        asNavFor: ".pic_slide",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.pic_slide').slick({
        vertical: true,
        asNavFor: ".product_slide",
    });

})