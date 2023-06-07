$(function () {

    // 메뉴 크기 조정
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })





    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        //슬라이드 숫자 표시(1/3)
        $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
        $('.main_visual .slide_num strong').text(s.slideCount);

        console.log(s.slideCount);

        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on')
            .siblings().removeClass('on');
    });

    $('.main_slide').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        fade: true,
        arrows: false,
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index(); // 0,1,2
        $('.main_slide').slick('slickGoTo', idx);
    })


    // section2 슬라이드 돌리기
    $('.product_slide').slick({
        slidesToShow: 3,
        asNavFor: ".pic_slide",
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    // .main_big_product에 화살표 버튼 눌러서 슬라이드 돌아가게 하기
    $('.main_big_product .arrows .left').on('click', function () {
        $('.product_slide2').slick('slickPrev');
    });
    $('.main_big_product .arrows .right').on('click', function () {
        $('.product_slide2').slick('slickNext');
    });


    $('.product_slide2').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
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



    //to_top
    //to_top 스크롤 위로 올리기
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    // to_top 스크롤 숨겼다가 나타내기
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        // sct > 1000 ? $('.to_top').fadeIn(1000) : $('.to_top').fadeOut();
        sct > 1000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    });








    //스크롤 아래로 한 칸 내리기
    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 600)
    });







    // history tab 메뉴
    $('.history_menu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.history_content li').eq(idx).addClass('on').siblings().removeClass('on');

    });








    // footer
    $('#fl').on('change', function () {
        const lnk = $(this).val();
        console.log(lnk, '바뀜');
        //val()이 있을 때만
        // window.open(lnk);
        // if (lnk) {
        //     window.open(lnk);
        // }
        lnk && window.open(lnk);
    });


    $('.family_link2 span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    });






    $('.portfolio_slide').on('init afterChange', function (e, s, c) {
        console.log(c);
        $('.main_portfolio .itm').eq(c).addClass('on')
            .siblings().removeClass('on')

    })
    $('.portfolio_slide').slick({
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: true,
    });





    $('.main_portfolio .tab_arrows .left').on('click', function () {
        $('.portfolio_slide').slick('slickPrev')
    });
    $('.main_portfolio .tab_arrows .right').on('click', function () {
        $('.portfolio_slide').slick('slickNext')
    });
})