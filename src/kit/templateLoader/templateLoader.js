define(function(require) {
    //requirements
    var amdLoader = require('bower_components/amd-loader/amd-loader');

    var _ = require('bower_components/lodash/dist/lodash');

    return amdLoader('tpl', function(name, source, req, callback, errback, config) {

        callback(_.template(source));
    });
});