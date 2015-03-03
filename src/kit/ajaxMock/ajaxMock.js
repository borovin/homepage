define(function(require) {
    //requirements
    require('bower_components/jquery-mockjax/jquery.mockjax');

    $.mockjaxSettings.contentType = "application/json";

    var mock = function(opt){
        opt = opt || {};

        opt.url = CONFIG.apiHost + opt.url;

        return $.mockjax(opt);
    };

    mock.clear = $.mockjax.clear.bind($.mockjax);

    return mock;
});