$(function(){

    if (window.matchMedia('(min-width:800px)').matches) {
        $(window).on('scroll', function(){
            var scroll = $(window).scrollTop();

            var nav = $('#mainNav');
            var siteInfo = $('#siteInfo')

            var height = $('#mainNav ul').outerHeight(true);
            var point = siteInfo.outerHeight() + siteInfo.offset().top;

            if(scroll >= point) {
                nav.addClass('stop').css('padding-bottom', height);
            } else {
                nav.removeClass('stop').css('padding-bottom', '');
            }
        })
    }

    $('a[href^="#link_"]').on('click', function(){
        var href = $(this).attr('href');
        var scrollTo = $(href).offset().top - 60;

        $('html, body').animate({scrollTop:scrollTo}, 1000, 'swing');
        return false;
    })
})