$(document).ready(function() {

	/*
	 * resize
	 */
	resize = function() {
		var width = $('body').width();
		var offset = 675;

		if (jQuery.browser.msie) {
			// offset = 681;
		}

		if (width <= 1000) {
			$('body').css({
						'background-position' : '-' + offset + 'px 0'
					});
		} else {
			$('body').css({
						'background-position' : 'center 0'
					});
		}
	}
	resize();
	$(window).resize(function(){
		resize();
	});
	/*
	 * random images
	 */

	var min_random = 1;
	var max_random = 4;
	var n = Math.floor(Math.random() * (max_random - min_random)) + min_random;
	$('#main').addClass('image'+n);

	/*
	 * clear form
	 */

	$('#clearform').click(function(){
		$(this).parent('form').find('input[type=text]').val('');
		return false;
	});
});
