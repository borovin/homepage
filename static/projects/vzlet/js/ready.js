$(document).ready(function() {
    $('.j-textInput').live('focus',
            function(e) {
                $(this).prev('label').hide();
            }).live('focusout',
            function(e) {
                if (!$(this).val().length) {
                    $(this).prev('label').show();
                }
            }).each(
            function() {
                if ($(this).val().length) {
                    $(this).prev('label').hide();
                }
            });
    $('label.toggled').live('click', function() {
        $(this).next('.j-textInput').focus();
    });

    if ($('.j-dynamicForm').length){
        dynamicField();
    }
});

function dynamicField(){
    var $form = $('.j-dynamicForm');
    var $fieldset = $form.find('.j-dynamicField');
    var $removeLink = $form.find('.j-removeField');
    var $addLink = $form.find('.j-addField');
    var $addLinkTmp = $addLink.eq(0).clone();
    var $fieldsetTmp = $('#fieldsetTmp').clone();

    $('#fieldsetTmp').remove();

    function addFieldset(){
        $form.find('.j-dynamicField:last').after($fieldsetTmp.html());
    }

    function removeFieldset($fieldset){
        if ($form.find('.j-dynamicField').length == 1){
            return false;
        }

        $fieldset.remove();
        if (!$form.find('.j-dynamicField:last').find('.j-addField').length){
            $form.find('.j-dynamicField:last').append($addLinkTmp);
        }
    }

    //  events

    $form.delegate('.j-removeField', 'click', function(e){
        var $fieldset = $(this).parents('.j-dynamicField');
        removeFieldset($fieldset);
        return false;
    });

    $form.delegate('.j-addField', 'click', function(e){
        $(this).remove();
        addFieldset();
        return false;
    });
}
