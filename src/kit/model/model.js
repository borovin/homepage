define(function (require) {
    var Model = require('bower_components/model/model'),
        get = require('bower_components/get/get');

    return Model.extend({
        sync: function(method, model, options) {
            options = _.extend({
                url: CONFIG.apiHost + get(this, 'url')
            }, options);

            return Model.prototype.sync.call(this, method, model, options);
        }
    });
});