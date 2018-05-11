$(document).ready(function() {

	/*
	 * подсказки
	 */
	$('#main h1').hover(function(event) {
				var text = $(this).attr('title');
				$('#tip').remove();
				$(this).removeAttr('title');
				$('<div id="tip">' + text + '</div>').appendTo('body').css({
							top : (event.pageY + 5) + 'px',
							left : (event.pageX + 5) + 'px'
						}).fadeIn('fast');
			},

			function() {
				var text = $('#tip').text();
				$(this).attr('title', text);
				$('#tip').fadeOut('fast', function() {
							$(this).remove()
						});
			});

	$('#main h1').mousemove(function(event) {
				$('#tip').css({
							top : (event.pageY + 5) + 'px',
							left : (event.pageX + 5) + 'px'
						});
			});

	/*
	 * search
	 */

	$('#search input.text').focus(function() {
				$(this).attr('value', '');
			});

	/*
	 * параграфы
	 */

	$('#textblock p:even').addClass('even');

	$('#textblock p:last').addClass('last');

	$("#textblock p.post").each(function(n) {

		var num = n + 1;
		if (num < 10) {
			$(this).prepend("<span class='num p" + num + "' >0" + num
					+ "</span>");
		} else {
			$(this).prepend("<span class='num p" + num + "' >" + num + "</span>");
		}

	});
});
