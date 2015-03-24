define(function(require) {

    var router = require('bower_components/router/router');

    router.setRoutes({
        '/': require('pages/main/main')
    });

    return router;
});