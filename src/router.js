define(function(require, exports, module) {
    //requirements
    var Router = require('bower_components/router/router');

    return new Router({
        routes: {
            '(/)': require('pages/main/main')
        }
    });
});