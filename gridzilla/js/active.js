$(function (){
	$('.menu a').each(function () {
		var location = window.location.href;
		var link = this.href;
		if(location == link) {
			$(this).addClass('element');
		}
	});
});




$(".navigator a").click(function(e) {
  e.preventDefault();
  $(".navigator a").removeClass('active');
  $(this).addClass('active');
})
