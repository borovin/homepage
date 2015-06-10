define(function(require, exports, module) {
    //requirements
    var Block = require('kit/page/page');

    return Block.extend({
        template: require('tpl!./main.ejs'),
        scrollTop: 0,
        data: {
            jobs: require('resources/jobs/jobs'),
            resume: require('tpl!resources/resume/resume.html'),
            portfolio: require('resources/portfolio/portfolio')
        }
    });
});