function SlideShow(startIndex) {
    var $promoBox = $('.promoBox');
    var $promoItem = $('.promoItem', $promoBox);
    var $promoLink = $('.promoLink');

    $promoLink.mouseenter(function() {
        var thumbIndex = $promoLink.index($(this));
        var previewIndex = $promoItem.index($promoItem.filter(':visible'));
        if (thumbIndex == previewIndex) {
            return false;
        } else {
            show(thumbIndex);
        }
    });

    function show(index) {
        $promoItem.filter(':visible').hide();
        $promoItem.eq(index).fadeIn(900);
        $promoLink.eq(index).addClass('active').siblings('.promoLink').removeClass('active');
    }

    show(startIndex);

    return {
        show : show
    }
}

$(document).ready(function() {
    $('.j-textInput').focusin(
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
    });

    if ($('.productGallery').length) {
        $('a[rel]', $('.productBox')).fancybox({
                    titleShow : false,
                    overlayColor : '#000000'
                });
    }
    if ($('.promoBox').length) {

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
            }, 3000);
        };

        startTimer();

        $('.promoLink').mouseenter(
                function() {
                    clearInterval(autoplay);
                }).mouseleave(
                function() {
                    index = $('.promoLink').index($(this)) + 1;
                    startTimer();
                });
    }

});
