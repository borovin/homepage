require.config({
    baseUrl: '/',
    paths: {
        jquery: 'bower_components/jquery/dist/jquery.min'
    },
    map: {
        "*": {
            block: 'bower_components/block/block',
            tpl: 'kit/templateLoader/templateLoader',
            text: 'bower_components/text/text',
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

