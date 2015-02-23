define(function (require) {
    var Model = require('bower_components/model/model');

    return Model.extend({
        sync: function(method, model, options) {
            options = _.extend({
                url: CONFIG.apiUrl + _.result(this, 'url')
            }, options);

            return Model.prototype.sync.call(this, method, model, options);
        }
    });
});