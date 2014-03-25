/**
 * Created by: Andrew Borovin
 * www.borovin.com
 */

roles.tabList = function () {

	$.fn.tabList = function (params) {
		var opt = $.extend({

		}, params);

		return this.each(function () {
			var $tabList = $(this),
				$tabList__item = $tabList.find('.tabList__item'),
				$content__pageInner = $('.content__pageInner');

			function loadPage(params) {

				var method_opt = $.extend({
					side: 0,
					url: '/'
				}, params);

				$content__pageInner.eq(method_opt.side).load(method_opt.url);
			}

		});
	}

};
