$(document).ready(function() {
	$('.one').on('click', function() {
		$('.dog').hide("explode");
	});
	$('.two').on('click', function() {
		$('.dog').animate({opacity: 0}, 1000);
	});
	$('.three').on('click', function() {
		$('.dog').fadeOut();
	});
});k