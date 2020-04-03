function ContactBlock(){
    var $contactBlock = $('.b-contact');
    var $contactLink = $('.moreContactsLink');
    var contactHeight = $contactBlock.innerHeight();

    $contactBlock.css({'margin-top' : -contactHeight + 'px'});

    $contactLink.toggle(function(e){
        $contactBlock.show().animate({'margin-top' : 0});

        return false;

    }, function(e){
        var contactHeight = $contactBlock.innerHeight();
        $contactBlock.animate({'margin-top' : -contactHeight + 'px'}, function(){
            $contactBlock.hide();
        });

        return false;
    });
}

function ContentSlider(){
    var $sliderBlock = $('.b-contentSlider');
    var $sliderMenu = $('.j-contentSliderMenu');

    function showItem(id){
        var $prevItem = $('.activeItem', $sliderBlock).addClass('prevItem').removeClass('activeItem');
        var $nextItem = $(id).addClass('nextItem');
        $prevItem.animate({'left':'-100%'}, function(){
            $prevItem.removeClass('prevItem').removeAttr('style');
        });
        $nextItem.animate({'left':0}, function(){
            $nextItem.removeClass('nextItem').addClass('activeItem');
        })
    }

    //  events

    $('a', $sliderMenu).click(function(e){
        if ($(this).parents('li').hasClass('active')){
            return false;
        }
        var id = $(this).attr('href');
        $(this).parents('li').addClass('active').siblings('li').removeClass('active');
        showItem(id);
        return false;
    });

    return {
        showItem : showItem
    }
}

function LanguageSelect(){
    var $selectBlock = $('.b-languageSelect');
    var $selectLink = $('a', $selectBlock);

    function showSelect(){
        $selectBlock.addClass('expand');
    }

    function hideSelect(){
        $selectBlock.removeClass('expand');
    }

    $selectLink.click(function(e){
        e.stopPropagation();
        if ($selectBlock.hasClass('expand')){
            $(this).parents('li').addClass('active').siblings('li').removeClass('active');
            hideSelect();
        } else {
            showSelect();
            $('body').one('click', function(e){
                hideSelect();
            });
            return false;
        }
    });

    return {
        show : showSelect(),
        hide : hideSelect()
    }
}

(function($) {
    $.fn.tooltip = function() {
        var $tooltip = $('.b-tooltip');
        var $tooltipContent = $('.tooltipContent', $tooltip);

        return this.each(function() {
            var $item = $(this);
            var itemData = $item.next('.j-tooltipContent');

            //  events
            var timeout;
            $item.hover(function() {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    var itemCenterLeft = $item.offset().left + $item.width() / 2;
                    $tooltip.hide();
                    $tooltipContent.html(itemData);
                    var tooltipTop = $item.offset().top - $tooltip.height() - 5;
                    $tooltip.css({
                        'left' : itemCenterLeft,
                        'top' : tooltipTop
                    });

                    if ($.browser.msie){
                        $tooltip.show();
                    } else {
                        $tooltip.fadeIn();
                    }
                    
                }, 400);
            }, function() {
                clearTimeout(timeout);
                $tooltip.fadeOut();
            })

        })
    }
})(jQuery);

(function($) {
    $.fn.hint = function() {
        var $hint = $('.b-hint');
        var $hintText = $('.hintText', $hint);

        return this.each(function() {
            var $item = $(this);
            var itemData = $item.attr('title');
            $item.removeAttr('title');

            //  events
            var timeout;
            $item.mouseenter(function(e) {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    var itemLeft = $item.offset().left;
                    $hint.hide();
                    $hintText.html(itemData);
                    var tooltipTop = $item.offset().top;
                    $hint.css({
                        'left' : itemLeft,
                        'top' : tooltipTop
                    }).fadeIn('fast');
                }, 300);

                return false;
            });

            $hint.mouseleave(function() {
                clearTimeout(timeout);
                $hint.fadeOut('fast');
            });

        })
    }
})(jQuery);

(function($) {
    $.fn.paginator = function() {
        return this.each(function() {
            var $paginator = $(this);
            var $activePage = $('.pageLinks .active', $paginator);
            var $nextLink = $activePage.next('a');
            var $prevLink = $activePage.prev('a');
            $(document).keydown(function(e) {
                if (e.ctrlKey) {
                    if (e.keyCode == 39) {
                        $nextLink.length ? document.location.href = $nextLink.attr('href') : false;
                    } else if (e.keyCode == 37) {
                        $prevLink.length ? document.location.href = $prevLink.attr('href') : false;
                    }
                }
            });
        });
    };
})(jQuery);

$(document).ready(function() {

    MARVA = {};

    MARVA.contactBlock = new ContactBlock();
    MARVA.languageSelect = new LanguageSelect();

    if ($('.b-contentSlider').length && $('.j-contentSliderMenu').length){
        MARVA.contentSlider = new ContentSlider();
    }

    $('.j-textInput').focus (
            function(e) {
                $(this).prev('label').hide();
            }).focusout(
            function(e) {
                if (!$(this).val().length) {
                    $(this).prev('label').show();
                }
            }).each(function() {
        if ($(this).val().length) {
            $(this).prev('label').hide();
        }
    }).prev('label').click(function(){
        $(this).next('.j-textInput').focus();
    });

    $('.b-clientSlider .sliderBody').carousel({
        'pagination' : false,
        'insertPrevAction' : function(){
            this.addClass('arrowLeft arrow').appendTo('.b-clientSlider').empty();
        },
        'insertNextAction' : function(){
            this.addClass('arrowRight arrow').appendTo('.b-clientSlider').empty();
        }
    });

    $('.b-feedback .sliderBody').carousel({
        'pagination' : false,
        'insertPrevAction' : function(){
            this.addClass('arrowLeft arrow').appendTo('.b-feedback h2').empty();
        },
        'insertNextAction' : function(){
            this.addClass('arrowRight arrow').appendTo('.b-feedback h2').empty();
        }
    });

    $('button, .b-button').mousedown(function(e){
        $(this).addClass('clicked');
    }).mouseleave(function(){
        $(this).removeClass('clicked');
    });

    $('.b-clientSlider .sliderItem img').tooltip();
    $('.g-hintLink').hint();
    $('#paginator').paginator();

    $('.j-toggleLink').click(function(){
        var id = $(this).attr('href');
        $(id).slideToggle();
        return false;
    });

    $('.tableControl a').click(function(e){
        if ($(this).hasClass('active')){
            return false;
        }

        $(this).addClass('active').siblings('a').removeClass('active');

        if ($(this).hasClass('showDiff')){
            $('#productTable tbody tr:not(.diff)').hide();
        }

        if ($(this).hasClass('showAll')){
            $('#productTable tbody tr').show();
        }

        return false;
    });

});
