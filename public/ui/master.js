require.config({
    baseUrl: '/',
    packages: [
        {
            name: 'jquery',
            location: 'ui/libs/jquery',
            main: 'jquery-1.8.2.min.js'
        },
        {
            name: 'basis',
            location: 'http://basis.io/libs/basis/0.0.1',
            main: 'basis'
        }
    ],
    shim: {
        'jquery/initControls': ['jquery'],
        'jquery/ui.widget': ['jquery']
    }
});

require(['jquery', 'jquery/initControls'], function($){
    $(function(){
        $('body').initControls();
    });
});



