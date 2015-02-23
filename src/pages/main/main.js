define(function(require, exports, module) {
    //requirements
    var Block = require('kit/page/page');

    return Block.extend({
        el: '#page',
        template: require('ejs!./main.ejs'),
        scrollTop: 0,
        data: {
            jobs: require('resources/jobs/jobs'),
            resume: require('ejs!resources/resume/resume.html'),
            portfolio: require('resources/portfolio/portfolio')
        },
        models: {
            info: require('resources/info/model')
        },
        blocks: {
            slider: require('blocks/slider/slider')
        }
    });
});