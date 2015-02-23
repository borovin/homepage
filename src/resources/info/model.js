define(function (require) {

    var Model = require('kit/model/model');

    return Model.extend({
        url: '/info.json',
        id: _.uniqueId('model-')
    });
});