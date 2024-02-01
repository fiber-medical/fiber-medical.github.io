$(function(){

    //ページ内スクロール（ナビゲーション）
    $('a[href^="#link_"]').on('click', function(){
        var target = $($(this).attr('href'));
        var point = target.offset().top - 50;
        $('html, body').animate({scrollTop : point}, 900)
        return(false);
    })

    //ページ内スクロール（トップに戻る）
    $(window).on('scroll', function(){
        var target = $('#backTop');
    
        var scroll = $(this).scrollTop();
        var point = $(this).outerHeight() / 2;
    
        if(scroll >= point) {
            target.addClass('view');
        } else {
            target.removeClass('view');
        }
    })


    //メニュー開閉
    $('.click').on('click', function(){
        $(this).toggleClass('view');
    })


    //ログ追記開閉
    $('.logOpen').on('click', function(){

        var target = $(this).next('.more');
        var $height = target.find('.moreText').outerHeight();

        if(target.hasClass('logView')) {
            target.removeClass('logView').css('height', '');
        } else {
            target.addClass('logView').css('height', $height);
        }
    })
})