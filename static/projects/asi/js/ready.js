function SlideShow(startIndex) {
    var $promoBox = $('.promoBox');
    var $promoItem = $('.promoItem', $promoBox);
    var $promoLink = $('.promoLink');

    $promoLink.mouseenter(function() {
        var thumbIndex = $promoLink.index($(this));
        var previewIndex = $promoItem.index($promoItem.filter(':visible'));
        if ($promoItem.filter(':animated').length) {
            return false;
        }
        if (thumbIndex == previewIndex) {
            return false;
        } else {
            show(thumbIndex);
        }
    });

    function show(index) {
        $promoItem.filter(':visible').css('z-index', 10);
        $promoItem.eq(index).css('z-index', 100).fadeIn(1500, function() {
            $(this).siblings('.promoItem').hide();
        });
        $promoLink.eq(index).addClass('active').siblings('.promoLink').removeClass('active');
    }

    show(startIndex);

    return {
        show : show
    }
}

$(document).ready(function() {
    $('.j-textInput').focus(
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

    if ($('.slideBox').length) {
        var slider = SlideShow(0);
        var autoplay;
        var index = 1;
        var $promoLink = $('.promoLink');

        var startTimer = function() {
            autoplay = setInterval(function() {
                if (index >= $promoLink.length) {
                    index = 0;
                }
                slider.show(index);
                index++;
            }, 5000);
        };

        startTimer();

        $('.promoMenu, .promoItem').mouseenter(
                function() {
                    clearInterval(autoplay);
                }).mouseleave(
                function() {
                    index = $('.promoLink').index($('.promoLink.active')) + 1;
                    startTimer();
                });
    }

});
