require.config({
    baseUrl: '/ui',
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        requireDom: 'bower_components/requireDom/requireDom',
        widget: 'bower_components/jqueryui/ui/jquery.ui.widget'
    },
    shim: {
        widget: ['jquery']
    }
});

require(['jquery', 'requireDom'], function($, requireDom){
    $(function(){
        requireDom();
    });
});



