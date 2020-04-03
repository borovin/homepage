$(document).ready(function() {

    $('.selectBox').each(function(n) {
        var text = $('.active a', $(this)).html();
        $('input', $(this)).val(text);
        $('.text', $(this)).html(text);
    });

    $('.selectBox').live('click', function(e) {
        $selectBox = $(this);
        $selectText = $('.text', $selectBox);
        $selectInput = $('input', $selectBox);
        $selectBox.toggleClass('active');
        $('body').bind('click.closeSelectBox', function(e) {
            $('.selectBox').removeClass('active');
            $('body').unbind('click.closeSelectBox');
        });

        $('a', $selectBox).click(function(e) {
            $(this).parent('li').addClass('active').siblings('li').removeClass('active');
            $selectText.html($(this).html());
            $selectInput.val($(this).html());
            $selectBox.removeClass('active');
            return false;
        });

        return false;
    });

    //  count effect

    var count = function(){
        var $count = $('.dayCount .count');
        var $countEffect = $('#countEffect');
        var animate = function(){
            $countEffect.show().animate({width : 400, left: -43, top: -42, opacity:0}, 500, function(){
                $(this).removeAttr('style');
            });
        };

        var decrement = function(){
            var oldValue = $count.text();
            var newValue = oldValue - 1;
            $count.html(newValue);
        };
        
        setTimeout(function(){
            animate();
            decrement();
        }, 1000);

        return {
            animate : animate
        }
    }();

    //  sliderBox
    var stopAnimation = false;
    var sliderBox = function() {
        var $sliderBox = $('.sliderBox');
        var $sliderItem = $('.sliderItem', $sliderBox);
        var $sliderWrapper = $('.sliderWrapper', $sliderBox);
        var itemWidth = ($.browser.opera) ? $(document).width() : 100 / $sliderItem.length + '%';
        var wrapperWidth = 100 * $sliderItem.length + '%';
        $sliderItem.width(itemWidth);
        $sliderWrapper.width(wrapperWidth);

        var play = function(step) {
            $('#bg').css({'height': 0}).animate({'height': '100%'}, bgSpeed[step], function() {
                step++;
                if (step < bgSpeed.length && !stopAnimation) {
                    $('.topMenu a').eq(step).click();
                    stopAnimation = false;
                    play(step);
                }
            });
        };

        var move = function(step) {
            $sliderWrapper.animate({left : 100 * (-step) + '%'}).height($sliderItem.eq(step).height());
        };

        var show = function(step) {
            $sliderWrapper.css({left : 100 * (-step) + '%'}).height($sliderItem.eq(step).height());
        };

        return {
            move : move,
            show : show,
            play : play,
            sliderItem : $sliderItem
        }
    }();

    //  top menu navigation

    var navigation = function() {
        var $topMenu = $('.topMenu');
        var $topMenuLink = $('a', $topMenu);
        var $activeLink = $('li.active a', $topMenu);
        var hash = location.hash;
        var step;

        step = sliderBox.sliderItem.index($(hash + '_item'));
        if (step >= 0) {
            sliderBox.show(step);
            $topMenuLink.eq(step).parent('li').addClass('active').siblings('li').removeClass('active');
        } else {
            sliderBox.show(0);
            $topMenuLink.eq(0).parent('li').addClass('active').siblings('li').removeClass('active');
            location.hash = $topMenuLink.eq(0).attr('rel');
        }


        $topMenuLink.click(function(e) {
            if ($(this).parent('li').hasClass('active')) {
                return false;
            }
            stopAnimation = true;
            var index = $topMenuLink.index($(this));
            $(this).parent('li').addClass('active').siblings('li').removeClass('active');
            sliderBox.move(index);
            bottomMenu.replace();
            location.hash = $(this).attr('rel');
            return false;
        });
    };

    if ($('body').hasClass('mainPage')) {
        navigation();
        var step = $('.topMenu li').index($('.topMenu li.active'));
        sliderBox.play(step);        
    }

    //  bottom menu

    var bottomMenu = function() {
        var $bottomMenu = $('.bottomMenu');
        var menuOffset = $('.footer').height() - $bottomMenu.height();
        var footerOffset = $(document).height() - $(window).height() - $(document).scrollTop();
        if (footerOffset > menuOffset) {
            $bottomMenu.css({position : 'fixed'});
        } else {
            $bottomMenu.css({position : 'relative'});
        }

        var replace = function() {
            var footerOffset = $(document).height() - $(window).height() - $(document).scrollTop();
            if (footerOffset > menuOffset) {
                $bottomMenu.css({position : 'fixed'});
            } else {
                $bottomMenu.css({position : 'relative'});
            }
        };

        return {
            box : $bottomMenu,
            menuOffset : menuOffset,
            replace : replace
        }
    }();

    $(window).scroll(function(e) {
        var footerOffset = $(document).height() - $(window).height() - $(document).scrollTop();
        if (footerOffset > bottomMenu.menuOffset) {
            bottomMenu.box.css({position : 'fixed'});
        } else {
            bottomMenu.box.css({position : 'relative'});
        }
    });

});
