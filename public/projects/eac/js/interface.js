$(document).ready(function() {

    var timeoutHover;
    var timeoutLeave;

    $('.serviceMenu li:not(.descriptionBox)').mouseenter(function(e) {
        var serviceName = $('a', $(this)).attr('class');

        $this = $(this);

        clearTimeout(timeoutHover);
        clearTimeout(timeoutLeave);

        timeoutHover = setTimeout(function(){
            $this.addClass('hover').siblings().removeClass('hover');
            $('.descriptionBox .' + serviceName).addClass('active').siblings().removeClass('active');
            $('.moveBox .' + serviceName).addClass('active').siblings().removeClass('active');
        }, 100);

    });

    $('.serviceMenu').mouseleave(function(e) {

        clearTimeout(timeoutHover);
        clearTimeout(timeoutLeave);
        
        timeoutLeave = setTimeout(function(){

            $('.serviceMenu li').removeClass('hover');
            $('.descriptionBox .discountBlock').addClass('active').siblings().removeClass('active');
            $('.moveBox .discountImage').addClass('active').siblings().removeClass('active');
        }, 100);
    });

    $('.slideLink').click(function(e){

        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).nextAll('.slideBox:eq(0)').slideUp()
        } else {
            $('.slideLink.active').removeClass('active');
            $('.slideBox:visible').slideUp();
            $(this).addClass('active').nextAll('.slideBox:eq(0)').slideDown();
        }

        return false;
    });

    $('.textInput').focusin(function(e){
        $(this).prev('label').hide();
    });

    $('.textInput').focusout(function(e){
        if (!$(this).val().length) {
            $(this).prev('label').show();
        }
    });

    $('.previewBox li').click(function(e){
        location.href = $('h2 a', $(this)).attr('href');
    });

    $('.pagerBox .nextLink').hover(function(e){
        $('.pagerBox .allListLink').fadeOut('fast', function(){
            $('.pagerBox .nextItemTitle').fadeIn('fast');
        });
    }, function(e){
        $('.pagerBox .nextItemTitle').fadeOut('fast', function(){
            $('.pagerBox .allListLink').fadeIn('fast');
        });
    });

    $('.pagerBox .prevLink').hover(function(e){
        $('.pagerBox .allListLink').fadeOut('fast', function(){
            $('.pagerBox .prevItemTitle').fadeIn('fast');
        });
    }, function(e){
        $('.pagerBox .prevItemTitle').fadeOut('fast', function(){
            $('.pagerBox .allListLink').fadeIn('fast');
        });
    });

    var $moveBox = $('.moveBox');
    if ($moveBox.length) {
        $(document).mousemove(function(e){
            var position = ($moveBox.width() - $('.slides', $moveBox).width())*(e.pageX/$(document).width());
            $('.slides', $moveBox).css({'left': position + 'px'});
        });
    }

    $('.filterBlock.slideBlock .first').click(function(e){
        $(this).parents('.filterBlock').toggleClass('expand').siblings().removeClass('expand');
        return false;
    });

    $('.customSelect').click(function(e){
        $select = $(this);
        $select.toggleClass('expand');

        if (!$('input', $select).val().length){
            $('label', $select).show();
        }

        $('li', $select).click(function(e){
            $('input', $select).val($.trim($(this).html()));
            $('label', $select).hide();
        });
        
        return false;
    });

    $(document).click(function(e){
        $('.filterBlock').removeClass('expand');
        $('.customSelect').removeClass('expand');
        $('.subscribeForm').hide();
    });

    $('.subscribeForm').click(function(e){
        return false;
    });

    $('.subscribeForm button').click(function(e){
        $(this).parents('form').submit();
        return false;
    });

    $('.subscribeForm .closeLink').click(function(e){
        $('.subscribeForm').hide();
        return false;
    });

    $('.subscribeLink').click(function(e){
        $('.subscribeForm').toggle();
        return false;
    });

    Cufon('.futuraBook');
});
