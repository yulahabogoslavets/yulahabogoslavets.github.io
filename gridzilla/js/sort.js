
$(".active").click(function () {
	$("[class^=state]").show();
});
$(".mnNews").click(function () {
	$("[class^=state]").hide();
	$("[class*=news]").show();
});

$(".mnDesign").click(function () {
	$("[class^=state]").hide();
	$("[class*=design]").show();
});

$(".mnPrint").click(function () {
	$("[class^=state]").hide();
	$("[class*=print]").show();
});

$(".mnArt").click(function () {
	$("[class^=state]").hide();
	$("[class*=art]").show();
});

$(".mnDevelopment").click(function () {
	$("[class^=state]").hide();
	$("[class*=development]").show();
});