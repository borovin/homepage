$(document).ready(function() {
			jQuery.ifixpng('/pixel.gif');
			$('img[@src$=.png]').ifixpng();
			$('div#addressgrid table a').live('click', function() {
				$('select').hide();
			});

			$('#close').live('click', function() {
				$('select').show();
			});
		});