$(document).ready(function() {
			jQuery.ifixpng('/pixel.gif');
			$('img[@src$=.png]').ifixpng();
		});