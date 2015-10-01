$(document).ready(function() {
	 $('#one').on('click', function() {
	 	$('#cool').fadeToggle(600);
	 });

	 $('#two').on('click', function() {
	 	$('#design').fadeOut('slow');
	 	$('#design').fadeIn('slow');
	 });


	 $('#three').on('click', function() {
	 	$('#rad').css('opacity', 0.2);
	});


});

