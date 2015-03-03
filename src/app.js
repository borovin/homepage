define(function (require) {
    var Block = require('bower_components/block/block'),
        backbone = require('bower_components/backbone/backbone');

    require('router');

    $(document).ajaxError(function (event, error) {
        switch (error.status) {
            default:
                console.warn(event, error);
                alert('Ошибка сервера. ' + error.statusText + ': ' + error.status);
                break;
        }
    });

    return Block.extend({
        el: 'body',
        events: {
            'click [href]': function (e) {
                e.stopPropagation();

                var app = this;

                if (e.currentTarget.dataset.navigate !== '0') {
                    e.preventDefault();

                    app.navigate(e.currentTarget.getAttribute('href'), {
                        trigger: e.currentTarget.dataset.trigger !== '0',
                        replace: e.currentTarget.dataset.replace == '1'
                    });
                }
            }
        },
        initialize: function() {
            Backbone.history.start({pushState: true});
        },
        navigate: function(){
            var app = this;

            return app.router.navigate.apply(app.router, arguments);
        }
    });
});