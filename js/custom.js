$(function () {
    $('.visual_slide').slick({
        arrows: false,
        autoplay: true,
        dots: true,
    })

    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 300) {
            $('.totop').addClass('on');
            $('.header').addClass('on');
        } else {
            $('.totop').removeClass('on');
            $('.header').removeClass('on');
        }
    })
})