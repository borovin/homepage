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

            window.PAGE = page;

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
            var render = Block.prototype.render.apply(this, arguments),
                page__content = this.el.querySelectorAll('.page__content');

            this.leftContent = page__content[0];
            this.rightContent = page__content[1];

            if (this.leftContent.offsetHeight > this.rightContent.offsetHeight) {
                this.rightContent.classList.add('page__content_fixed');
                this.fixedContent = this.rightContent;
            } else {
                this.leftContent.classList.add('page__content_fixed');
                this.fixedContent = this.leftContent;
            }

            return render;
        },
        loading: function (start) {

            if (start || start === undefined) {
                this.el.classList.add('loading');
            } else {
                this.el.classList.remove('loading');
            }

        }
    });
});