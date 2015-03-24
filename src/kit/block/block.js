define(function (require) {

    var Block = require('bower_components/block/block');

    return Block.extend({

        initialize: function () {

            var block = this;

            block.initCollections();
            block.initModels();

            return Block.prototype.initialize.apply(block, arguments);

        },

        initModels: function () {

            var block = this;

            block.models = _.mapValues(block.models, function (constructor, modelName) {
                return block.get('models.' + modelName);
            });

            block.model = block.get('model');
        },

        initCollections: function () {

            var block = this;

            block.collections = _.mapValues(block.collections, function (constructor, collectionName) {
                return block.get('collections.' + collectionName);
            });

            block.collection = block.get('collection');
        }
    });
});