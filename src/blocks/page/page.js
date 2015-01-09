define(function(require, exports, module) {
    //requirements
    var Block = require('block');

    return Block.extend({
        el: '#page',
        template: require('tpl!./page.hbs')
    });
});