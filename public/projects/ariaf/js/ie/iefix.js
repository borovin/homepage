$(document).ready(function() {
	jQuery.ifixpng('/pixel.gif');
	$('ul.topmenu li, ul.topmenu, div.circle div.center, ul.topmenu a').ifixpng();
	$('div.flower img').hide();
	var height = $("#right").height();
	$("#main").css({
				'height' : height + 100 + 'px'
			});

	if ($('body').width() <= 1200) {
				$('body').width('1200');
			}
});