define(function(require, exports, module) {
    //requirements
    var Block = require('block');

    return Block.extend({
        el: '#page',
        template: require('tpl!./page.ejs'),
        data: {
            jobs: require('data/jobs'),
            resume: require('text!data/resume.html'),
            info: require('data/info')
        }
    });
});