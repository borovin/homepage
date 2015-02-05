define(function(require) {
    //requirements
    var amdLoader = require('bower_components/amd-loader/amd-loader');

    var _ = require('bower_components/lodash/lodash');

    return amdLoader('ejs', function(name, source, req, callback, errback, config) {

        var content = 'define(function(require){return ' + _.template(source) + '})';

        callback(content);
    });
});