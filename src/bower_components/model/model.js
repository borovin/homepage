define(function(require, exports, module) {
    //requirements
    var get = require('bower_components/get/get'),
        _ = require('bower_components/lodash/lodash'),
        makeClass = require('bower_components/makeClass/makeClass'),
        deepExtend = require('bower_components/deepExtend/deepExtend'),
        Backbone = require('bower_components/backbone/backbone');

    var Model = Backbone.Model;

    return makeClass(Model, {
        constructor: function(attributes, options){

            options = _.extend({
                parse: true
            }, options);

            Model.call(this, attributes, options);
        },
        toJSON: function(options) {
            options = options || {};

            if (options.isSave) {
                return this.getData();
            }

            return Backbone.Model.prototype.toJSON.apply(this, arguments);
        },
        getData: function() {
            var saveData;

            if (_.isFunction(this.saveData)) {
                saveData = this.saveData();
            }

            if (_.isArray(this.saveData)) {
                saveData = _.pick(this.toJSON(), this.saveData);
            }

            return saveData;
        },
        save: function(attributes, options) {
            return Backbone.Model.prototype.save.call(this, attributes, _.extend({
                wait: true,
                isSave: true
            }, options));
        },
        destroy: function(options) {
            return Backbone.Model.prototype.destroy.call(this, _.extend({
                wait: true
            }, options))
        },
        get: function(path) {
            return get(this, 'attributes.' + path);
        },
        parse: function(data) {
            var model = this;

            _.forEach(model.collections, function(collectionConstructor, key) {

                if (typeof collectionConstructor === 'function'){
                    model.collections[key] = collectionConstructor.call(model);
                }

                if (model.collections[key] instanceof Backbone.Collection){
                    model.collections[key].reset(data[key]);
                }
            });

            _.forEach(model.models, function(modelConstructor, key) {

                if (typeof modelConstructor === 'function'){
                    model.models[key] = modelConstructor.call(modelConstructor);
                }

                if (model.models[key] instanceof Backbone.Model){
                    model.models[key].set(data[key]);
                }
            });

            return data;
        },
        clear: function(){

            var model = this;

            var _super = Backbone.Model.prototype.clear.apply(model, arguments);

            model.set(model.__defaults);

            _.forEach(model.collections, function(nestedCollection) {
                nestedCollection.reset([]);
            });

            _.forEach(model.models, function(nestedModel) {
                nestedModel.clear();
            });

            return _super;
        }
    });
});
