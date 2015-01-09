define(function(require) {
    //requirements
    var amdLoader = require('bower_components/amd-loader/amd-loader');

    require('bower_components/templayed.js/src/templayed');

    return amdLoader('tpl', function(name, source, req, callback, errback, config) {

        callback(templayed(source));
    });
});