$(document).ready(function() {
	/*
	 * SIFR
	 */
	$('div#right h1').flash({
				src : 'fonts/smartycond.swf',
				wmode : 'transparent',
				flashvars : {
					css : ['* { color: #ffffff; }'].join(' ')
				}
			}, {
				version : 7
			}, function(htmlOptions) {
				htmlOptions.flashvars.txt = this.innerHTML;
				this.innerHTML = '<div>' + this.innerHTML + '</div>';
				var $alt = $(this.firstChild);
				htmlOptions.height = $alt.height();
				htmlOptions.width = $alt.width();
				$alt.addClass('alt');
				$(this).addClass('flash-replaced').prepend($.fn.flash
						.transform(htmlOptions));
			});

	$('div#bottom h1').flash({
				src : 'fonts/smartycond.swf',
				wmode : 'transparent',
				flashvars : {
					css : ['* { color: #ffffff; text-align: right; }']
							.join(' ')
				}
			}, {
				version : 7
			}, function(htmlOptions) {
				htmlOptions.flashvars.txt = this.innerHTML;
				this.innerHTML = '<div>' + this.innerHTML + '</div>';
				var $alt = $(this.firstChild);
				htmlOptions.height = $alt.height();
				htmlOptions.width = $alt.width();
				$alt.addClass('alt');
				$(this).addClass('flash-replaced').prepend($.fn.flash
						.transform(htmlOptions));
			});

	/*
	 * scroll block
	 */
	var height = $("#right").height();
	$("#main").css({
				'min-height' : height + 100 + 'px'
			});
	$("a.back").hide().append("<span></span>");

	$("ul.leftmenu li a").click(function(event) {
				var rwidth = $("body").width() - 700;

				$("#left div.column").width(rwidth);

				var page = $(this).attr("class");
				event.preventDefault();
				var thisparent = $(this).parent('li');
				if (thisparent.hasClass('active')) {
					$("#left a.back").hide();
					$("#left div.contentblock").animate({
								height : 'hide',
								width : 'hide'
							}, 500);
					$("a.logo").removeClass("scroll");
					$("ul.leftmenu li").removeClass("active");
				} else {
					thisparent.addClass("active").siblings('li')
							.removeClass("active");
					$("div.column").hide();
					$("#left div#" + page).show();
					$("#left div.contentblock").animate({
								height : 'show',
								width : 'show'
							}, 500, function() {

								$("#left a.back").fadeIn();
								$("a.logo").addClass("scroll");
							});
				}
			});
	$("ul.leftmenu li a").one("click", function(event) {
		var page = $(this).attr("class");
		$('#left div#' + page + ' h1').flash({
					src : 'fonts/smartycond.swf',
					wmode : 'transparent',
					flashvars : {
						css : ['* { color: #241e18; }'].join(' ')
					}
				}, {
					version : 7
				}, function(htmlOptions) {
					htmlOptions.flashvars.txt = this.innerHTML;
					this.innerHTML = '<div>' + this.innerHTML + '</div>';
					var $alt = $(this.firstChild);
					htmlOptions.height = $alt.height();
					htmlOptions.width = $alt.width();
					$alt.addClass('alt');
					$(this).addClass('flash-replaced').prepend($.fn.flash
							.transform(htmlOptions));
				});
	});
	$("#left a.back, a.scroll").live('click', function(event) {
				event.preventDefault();
				$("#left a.back").hide();
				$("#left div.contentblock").animate({
							height : 'hide',
							width : 'hide'
						}, 500);
				$("a.logo").removeClass("scroll");
				$("ul.leftmenu li").removeClass("active");
			});

	/*
	 * news
	 */
	if ($("body").width() < 1200) {
		$("dl.news").width(500);
	}
	/*
	 * paragraphs
	 */
	$("div.column").each(function() {
				$(this).find("div.text").each(function(n) {
							var num = n + 1;
							if (num < 10) {
								$(this).prepend("<span>0" + num + "</span>");
							} else {
								$(this).prepend("<span>" + num + "</span>");
							}
						});
			});
	/*
	 * leftmenu
	 */
	$('ul.leftmenu li:eq(2)').hide();
	$("ul.leftmenu a").each(function(n) {
				$(this).prepend("<span class='item" + n + "'></span>")
			});
	/*
	 * topmenu
	 */

	$("ul.topmenu a").wrapInner("<span></span>");
	$("ul.topmenu li.active a").addClass("active");

	/*
	 * fon
	 */

	var bodywidth = $("body").width();
	var bodyheight = $("body").height();
	if ((bodywidth / 1280) > (bodyheight / 800)) {
		$("img.fon").css({
					width : '100%',
					height : 'auto'
				});
	} else {
		$("img.fon").css({
					height : '100%',
					width : 'auto'
				});
	};
	/*
	 * switcher
	 */
	var circle = $('div.circle');
	$('#switcher').toggle(function() {
				$(this).removeClass('turnoff').addClass('turnon');
				circle.show();
			}, function() {
				$(this).addClass('turnoff').removeClass('turnon');
				circle.hide();
			});

	/*
	 * circle
	 */

	$("body").mousemove(function(event) {
				var mx = event.pageX;
				var my = event.pageY;
				var cx = mx - 3000;
				var cy = my - 1200;
				circle.css({
							top : cy + 'px',
							left : cx + 'px'
						})
			});
	/*
	 * resize
	 */

	resize = function() {
		var rwidth = $("body").width() - 700;
		$("#left div.column").width(rwidth);
		if ($("body").width() < 1200) {
			$("dl.news").width(500);
		} else {
			$("dl.news").width('auto');
		};
		var bodywidthres = $('body').width();
		var bodyheightres = $('body').height();
		if ((bodywidthres / 1280) > (bodyheightres / 800)) {
			$("img.fon").css({
						width : '100%',
						height : 'auto'
					});
		} else {
			$("img.fon").css({
						height : '100%',
						width : 'auto'
					});
		};
		var height = $("#right").height();
		$("#main").css({
					'min-height' : height + 100 + 'px'
				});
	};
	$('#right .clock').flash({
				src : 'clock_55x55.swf',
				wmode : 'transparent',
				width : 55,
				height : 55
			});

	$(window).resize(function() {
				resize()
			});
			
	/*
	 * menu
	 */

	$('ul.menulist').hide();
	$('h2.menu').live('click', function() {
				$(this).next('ul.menulist').slideToggle();
			});
});
