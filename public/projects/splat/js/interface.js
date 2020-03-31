$(document).ready(function() {

	/*
	 * menus
	 */
	$("ul li:first-child").addClass("first");

	$("ul li:last-child").addClass("last");

	/*
	 * hover submenu
	 */

	$('#mainmenu>li').hover(function() {
				var thisa = $(this).find('a');
				if ($(this).find('.sub').size()) {
					$(this).addClass('hover');
					Cufon.replace(thisa, {
								color : '#fff'
							});
				}
			}, function() {
				var thisa = $(this).find('a');
				$(this).removeClass('hover');
				Cufon.replace(thisa, {
							color : '#505050'
						});
			});

	$('ul.submain a').hover(function() {
				Cufon.replace(this, {
							color : '#ff7f7f'
						});
			}, function() {
				Cufon.replace(this, {
							color : '#fff'
						});
			});

	/*
	 * FAQ
	 */

	var O = $("dl.scroll");
	$("dd", O).hide();
	$("dt", O).live('click', function() {
				n = $(this).next('dd');
				if (n.is(":visible")) {
					n.slideUp();
					n.prev('dt').removeClass('active');
				} else {
					$("dd:visible", O).slideUp().prev('dt')
							.removeClass('active');
					n.slideDown();
					n.prev('dt').addClass('active');
				}
			});

	/*
	 * faq ajax
	 */

	$('ul.faq a').live('click', function() {
				var url = $(this).attr('href');
				$('#right').load(url, function(data) {
							O = $('#right').find('dl.scroll');
							$("dd", O).hide();
						});
				return false;
			});
	
	$('ul.faq li a').click(function(){
		$(this).parent('li').addClass('active').siblings('li').removeClass('active');
	});
	/*
	 * fonts
	 */

	Cufon.replace('h1, #mainmenu a, h5, h2');
});