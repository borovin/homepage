define(function (require) {

    var router = require('router');

    var app = window.APP = {};

    $(document).on('rendered', function (e) {

        if (e.target.id === 'page'){
            app.page && app.page.remove();
            app.page = document.getElementById('page').block;
        }

    });

    router.start();

    return app;
});