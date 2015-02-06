define(function(require, exports, module) {
    //requirements
    var Block = require('kit/block/block');

    return Block.extend({
        el: '#page',
        template: require('ejs!./page.ejs'),
        data: {
            jobs: require('data/jobs/jobs'),
            resume: require('ejs!data/resume.html'),
            info: require('data/info'),
            portfolio: require('data/portfolio/portfolio')
        },
        blocks: {
            slider: require('blocks/slider/slider')
        }
    });
});