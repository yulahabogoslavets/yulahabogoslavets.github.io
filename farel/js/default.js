$(document).ready(function () {
	$(".work").hover(function () {
		$(this).find(".designedby").stop().slideToggle(".hiden");
	});
	var $panel = $(".panel");
	function scrollTo(buttonClass, scrollToClass) {
		$(buttonClass).click(function () {
			$('html, body').stop().animate({
				scrollTop: $(scrollToClass).position().top -40
			}, 1000);
		});

	}


    scrollTo(".cont", ".contact");
	scrollTo(".blogs", ".compan");  
    scrollTo(".use", ".using");
    scrollTo(".abo", ".abou");
	scrollTo(".home", ".hom");

});