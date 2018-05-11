$(document).ready(function() {

	/*
	 * темный слой
	 */
	var popupheight = $('#adrpopup').height();
	var docheight = $('#content').height();
	layersize = function(popupheight) {
		if (popupheight > docheight) {
			$('#layer').height(popupheight + 80);
		} else {
			$('#layer').height(docheight);
		};
	};

	/*
	 * пустые ячейки
	 */
	var emptytd = function() {
		$('#adrpopup table td').each(function() {
					if (!($(this).text())) {
						$(this).prev('th').addClass('empty');
					};
				});
	};

	/*
	 * день/ночь
	 */

	$('#adrpopup li').live('click', function() {
				$(this).addClass("active").siblings('li').removeClass('active');
				var time = $(this).attr('id');
				$('#imgtime').attr('src', 'im/img' + time + '.jpg')
			});

	/*
	 * close
	 */

	$('#close').live('click', function() {
				$('#adrpopup, #clpopup').fadeOut(function() {
							$(this).empty();
						});
				$('#layer').hide();
			});
	/*
	 * address ajax
	 */

	var loadaddress = function(address) {
		$.get("addresspopup.html", {
					address : address
				}, function(data) {
					mscroll();
					$('#adrpopup').html(data).fadeIn();
					$('#preloader').hide();
					var popupheight = $('#adrpopup').height();
					layersize(popupheight);
					emptytd();
				});
	};

	$('#addressgrid table a').live('click', function(event) {
				event.preventDefault();
				var address = $(this).attr('rel');
				loadaddress(address);

				$('#layer').show();
			});
	$('div.tooltip a').live('click', function(event) {
				event.preventDefault();
				var address = $(this).attr('rel');
				loadaddress(address);
				$('#layer').show();
			});

	/*
	 * client ajax
	 */

	var loadclient = function(client) {
		$('#clpopup').load("clientpopup.html", {
					client : client
				}, function(data) {
					maxnum = $('#pages div.page').size();
					$('#clpopup').fadeIn();
					$('#preloader').hide();
					var popupheight = $('#clpopup').height();
					layersize(popupheight);
				});
	};

	$('#clients li a').live('click', function(event) {
				event.preventDefault();
				$('#clients ul').hide();
				var client = $(this).attr('rel');
				loadclient(client);
				$('#layer').show();
			});

	/*
	 * gallery
	 */
	num = 1;
	var showimg = function(num) {
		$('div#page' + num).addClass("active").siblings('div.page')
				.removeClass('active');
		$('#clpopup img').hide();
		$('#img' + num).fadeIn();
	};

	$('#clpopup div.page').live('click', function() {
				if (!($(this).hasClass('active'))) {
					pagenum = $(this).attr('id');
					num = pagenum.substring(4);
					showimg(num);
				}
			});

	$('#clpopup #leftarr').live('click', function() {
				if (num != 1) {
					num--;
					showimg(num);
				}
			});

	$('#clpopup #rightarr').live('click', function() {
				if (num != maxnum) {
					num++;
					showimg(num);
				}
			});

	/*
	 * vacant scroll
	 */

	var mscroll = function() {
		mmax = $('#mounthinner div').size();
		$('#mounthinner').css({
					left : '0px'
				}).width(60 * mmax);
		$('#vacant #rightarr').live('click', function() {
					var mleft = parseInt($('#mounthinner').css('left'), 10);
					if (mleft > (720 - mmax * 60)) {
						$('#mounthinner').animate({
									left : mleft - 240 + 'px'
								});

					}
				});

		$('#vacant #leftarr').live('click', function() {
					var mleft = parseInt($('#mounthinner').css('left'), 10);
					if (mleft < 0) {
						$('#mounthinner').animate({
									left : mleft + 240 + 'px'
								});

					}
				});
	};

});
