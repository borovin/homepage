require.config({
    baseUrl: '/',
    paths: {
        jquery: 'bower_components/jquery/dist/jquery.min'
    },
    map: {
        "*": {
            block: 'bower_components/block/block',
            tpl: 'kit/templateLoader/templateLoader',
            underscore: 'bower_components/lodash/dist/lodash'
        }
    }
});

define(function(require, exports, module) {
    //requirements
    var Page = require('blocks/page/page');

    document.body.innerHTML = '<div id="page"></div>';

    new Page();
});

