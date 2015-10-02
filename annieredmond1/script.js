$(document).ready(function() {
	$('.one').on('click', function() {
		$('.dog').hide("explode");
	});
	// $('.two').on('click', function() {
	// 	$('.dog').animate({opacity: 0}, 1000);
	// });
	$('.three').on('click', function() {
		$('.dog').fadeOut();
	});
	$('.two').on('click', function() {
        $('.dog').animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
      }, 1500) ;
    });
});