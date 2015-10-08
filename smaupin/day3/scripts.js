$(document).ready(function() {
	$('p').hover(function() {
		$(this).css('color', 'red');
	});
	$('li:nth-of-type(1)').click(function() {
		//console.log("hi");
		alert("That tickles");
		$('h1').css('font-family', 'serif')
	});
	$('li:nth-of-type(2)').click(function() {
		//console.log("works");          
		$("img").slideUp("slow");
	});
	$('li:nth-of-type(3)').click(function() {
		//$('p').addClass('bigText');
		$('p').toggleClass('bigText');
	});
});