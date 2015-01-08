$(document).ready(function() {
	$("#num").addClass("num0");
	$("a.tab").hide();
	$("div.step").hide();
	n = 0;
	flag = 1;
	window.omload = change();
	function change() {
		var interval = setInterval(function() {
					if (n != 6) {
						$("div.step:eq(" + n + ")").fadeIn(1500);
						$("#num").css('background-position', -(n + 1) * 90 + 'px 0');
						$("div.button").removeClass("active").filter(':eq(' + n
								+ ')').addClass("active");
						n++;
					} else {
						$("a.tab").fadeIn()
						clearInterval(interval);
					};

				}, 4000);
		$("div.button").mouseover(function(event) {
					flag = 0;
					$("a.tab").fadeIn()
					clearInterval(interval);
					$(this).addClass("active").siblings().removeClass("active");
					n = $("div.button").index($(this));
					$("#num").css('background-position', -(n + 1) * 90 + 'px 0');
					$("div.step").slice(0, n + 1).fadeIn(500);
					$("div.step").slice(n + 1, 6).fadeOut(500);
				});
		if (flag) {
			interval;
		};

	};

});
