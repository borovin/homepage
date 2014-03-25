define(
    [
        'jquery',
        'jquery/ui.widget'
    ], function($) {

		$.widget('homepage.slider', {
			options: {
				position: 0
			},
			_create: function() {
				var slider = this,
					$slider = this.element;

				slider.$slider__item = $slider.find('.slider__item');
				slider.$slider__prev = $slider.find('.slider__prev');
				slider.$slider__next = $slider.find('.slider__next');

				//events
				slider.$slider__prev.on('click', function() {
					slider.prevSlide();
					return false;
				});

				slider.$slider__next.on('click', function() {
					slider.nextSlide();
					return false;
				});
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

				slider._setOption('position', opt.position);

				$activeSlide.animate({'left': opt.direction + $activeSlide.width()}, function() {
					$activeSlide.removeClass('slider__item_state_active').css({'left': 0});
					$nextSlide.addClass('slider__item_state_active').removeClass('slider__item_state_next');
				});
			},
			nextSlide: function() {
				this.move({
					position: this.options.position + 1,
					direction: '-'
				});
			},
			prevSlide: function() {
				this.move({
					position: this.options.position - 1,
					direction: ''
				});
			}
		});

});