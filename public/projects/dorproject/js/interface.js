$(document).ready(function() {

	/*
	 * sifr
	 */

	$(".flash").flash({
				src : 'fonts/rubrica.swf',
				wmode : 'transparent',
				update : true,
				flashvars : {
					css : ['* { text-align: left; color:#000000 }'].join(' ')
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
	 * dynamic lists
	 */
	O = $("dl.scroll");
	$("dd", O).hide();
	$("dt span", O).click(function() {
				n = $(this).parent().next('dd');
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
	$("dt span", O).eq(0).click();
	/*
	 * minimap
	 */
	var startx = $("div.minimap").css('left');
	var starty = $("div.minimap").css('top');
	$("div.map").hover(function() {

				$('div.map').mousemove(function(event) {
							var thisposition = $(this).offset();
							var thisx = thisposition.left;
							var thisy = thisposition.top;
							var offsetx = event.pageX - thisx;
							var offsety = event.pageY - thisy;
							movetop = -0.4 * offsety + "px";
							moveleft = -offsetx + "px";
							$("div.minimap").css({
										top : movetop,
										left : moveleft
									});
						});
			}, function() {
				$("div.minimap").animate({
							left : startx,
							top : starty
						}, 'slow');
			});
	/*
	 * gallery
	 */
	a = 1;
	$("ul.previews li a").click(function(event) {
				event.preventDefault();
				if (a == 1 && !$(this).hasClass("active")) {
					t = $(this);
					ti = $(this).find("img");
					bi = $(this).parents('div.photo').find('div.img');
					a = 0;
					ti.after("<b class='loader'></b>");
					objImage = new Image();
					objImage.src = $(this).attr("href");
					objImage.className = "loadimg";
					checkLoad = function() {
						if (!objImage.complete) {
							checkLoadT = setTimeout("checkLoad()", 100);
						} else {
							imagesLoaded();
						}
					}
					checkLoad();
				}
				function imagesLoaded() {
					$('.previews a.active').animate({
								top : 0
							}).removeClass('active');
					$('a b.loader').remove();
					t.animate({
								top : '-49px'
							}).addClass('active');
					bi.append(objImage).find("img:last").animate({
								top : 0
							}).end().find("img:first").animate({
								top : "187px"
							}, function() {
								$(this).remove();
								a = 1;
							});
				}

			});

	/*
	 * clearforms
	 */

	$('a.clearall').live('click', function() {
				$('form.vacancy').find('input[type = text], textarea').val('');
				return false;
			});
	$('br').next('br').remove();
	$('div.text, p, div.text b, div.text i').next('br').remove();
	/*
	 * flash update
	 */
	if ($('#header h2').hasClass('flash-update')) {
		$('body')
				.prepend('<div class="flashalert">please, download flash-player</div>');
	};
});
