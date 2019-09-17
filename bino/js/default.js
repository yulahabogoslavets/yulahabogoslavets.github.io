$(document).ready(function () {
	$(".port-imgg").hover(function () {
		$(this).find(".designedby").stop().slideToggle(".hiden");
	});
	var $panel = $(".panel");
	$(".skills a").on("click", function () {
		if($(this).closest(".panel").hasClass("opened")){
			$(this).closest(".panel").removeClass('opened');
		}else{
			
		$panel.removeClass('opened');
		$(this).closest(".panel").addClass('opened');
		}
		

	});


   
    
	function scrollTo(buttonClass, scrollToClass) {
		$(buttonClass).click(function () {
			$('html, body').stop().animate({
				scrollTop: $(scrollToClass).position().top -40
			}, 1000);
		});

	}
	scrollTo(".serv", ".services");
	scrollTo(".port", ".portfolio");
	scrollTo(".abo", ".about");
	scrollTo(".cont", ".contact");
    scrollTo(".price", ".pricing");
    scrollTo(".teams", ".team");
    scrollTo(".blogs", ".blog");
	scrollTo(".home", "body");

});