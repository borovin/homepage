define(function (require) {
    var Block = require('kit/block/block');

    return Block.extend({
        position: 0,
        template: require('tpl!./slider.ejs'),
        events: {
            'click .slider__next': function(e){
                e.preventDefault();
                this.nextSlide();
            },
            'click .slider__prev': function(e){
                e.preventDefault();
                this.prevSlide();
            }
        },
        render: function() {
            var block = this;

            Block.prototype.render.apply(this, arguments);

            block.$slider__item = block.$('.slider__item');

        },
        move: function(params) {

            if (this.$slider__item.filter('.slider__item_state_active').is(':animated')) {
                return false;
            }

            var opt = $.extend({
                position: 0,
                direction: '-',
                speed: 200
            }, params);

            if (opt.position == this.$slider__item.length) {
                opt.position = 0;
            }

            if (opt.position < 0) {
                opt.position = this.$slider__item.length - 1;
            }

            var slider = this,
                $activeSlide = slider.$slider__item.filter('.slider__item_state_active'),
                $nextSlide = slider.$slider__item.eq(opt.position).addClass('slider__item_state_next');

            slider.set({
                position: opt.position
            });

            $activeSlide.animate({'left': opt.direction + $activeSlide.width()}, function() {
                $activeSlide.removeClass('slider__item_state_active').css({'left': 0});
                $nextSlide.addClass('slider__item_state_active').removeClass('slider__item_state_next');
            });
        },
        nextSlide: function() {
            this.move({
                position: this.position + 1,
                direction: '-'
            });
        },
        prevSlide: function() {
            this.move({
                position: this.position - 1,
                direction: ''
            });
        }
    });
});