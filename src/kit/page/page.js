define(function (require, exports, module) {
    //requirements
    var Block = require('kit/block/block');

    return Block.extend({
        el: '#page',
        scrollTop: 0,
        globalEvents: {
            'scroll': function () {

                var scrollTop = $(document).scrollTop(),
                    documentHeight = $(document).height(),
                    windowHeight = $(window).height(),
                    scrollMax = documentHeight - windowHeight,
                    fixedHeight = this.fixedContent.offsetHeight,
                    scrollOffset = windowHeight - fixedHeight;

                if (scrollTop < 0) {
                    scrollTop = 0;
                }

                if (scrollTop > scrollMax) {
                    scrollTop = scrollMax;
                }

                var scrollDistance = this.scrollTop - scrollTop,
                    fixedTopPosition = this.fixedContent.offsetTop + scrollDistance;

                if (fixedTopPosition >= 0) {
                    fixedTopPosition = 0;
                }

                if (fixedTopPosition <= scrollOffset) {
                    fixedTopPosition = scrollOffset;
                }

                this.fixedContent.style.top = fixedTopPosition + 'px';

                this.scrollTop = scrollTop;

            }
        },
        initialize: function () {

            var page = this;

            page.loading();

            return $.when(Block.prototype.initialize.apply(page, arguments)).then(function () {
                return page.fetch();
            });
        },
        fetch: function (resorces) {
            var page = this,
                resorces = resorces || {};

            var collectionsList = _(page.collections).filter(function (collection, name) {
                return !resorces.collections || resorces.collections.indexOf(name) != -1;
            }).value();

            var modelsList = _(page.models).filter(function (model, name) {
                return (!resorces.models || resorces.models.indexOf(name) != -1) && model && model.id;
            }).value();

            var dataList = collectionsList.concat(modelsList);

            page.fetchList = _.map(dataList, function (data) {
                return (data && typeof data.fetch === 'function') ? data.fetch() : data;
            });

            return $.when.apply($, page.fetchList).then(function () {
                delete page.fetchList;
            });
        },
        render: function () {
            var page = this,
                prevPage = document.getElementById('page'),
                render = Block.prototype.render.apply(page, arguments),
                page__content = this.el.querySelectorAll('.page__content');

            prevPage.block && prevPage.block.remove();

            page.leftContent = page__content[0];
            page.rightContent = page__content[1];

            if (page.leftContent.offsetHeight > page.rightContent.offsetHeight) {
                page.rightContent.classList.add('page__content_fixed');
                page.fixedContent = page.rightContent;
            } else {
                page.leftContent.classList.add('page__content_fixed');
                page.fixedContent = page.leftContent;
            }

            page.loaded();

            return render;
        },
        loading: function () {

            var page = this;

            page.el.dataset.status = 'loading';

        },
        loaded: function () {

            var page = this;

            page.el.dataset.status = 'loaded';

        },
        remove: function () {
            var page = this;

            page.stopListening();
            page.undelegateEvents();
            $(document).off('.' + page.cid);

            page.removeBlocks();
        }
    });
});