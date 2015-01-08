$(document).ready(function() {
			jQuery.ifixpng('/pixel.gif');
			$('div.circle, li.active, a.tab span, div.button span').ifixpng();

			if ($('body').width() <= 1200) {
				$('body').width('1200');
			}
		});