$(document).ready(function(){
	$('.todo').append("<ul><li>Do you know..</li></ul>");
	$('.todo').append("<ul><li>..how to get to..</li></ul>");
	$('.todo').append("<ul><li>..Sesame Street?</li></ul>");
	/* $('.todo').append("<p>Roll the mouse over me.</p>");
		$('p:last').on("mouseover", function() {
			$(this).css("color", "red");
		}); */
	$('.image').click(function() {
		$(this).hide('slow');
	});
	$('.image').append("<p>Click the image to see it hide.</p>");
	
	$('.jaime').click(function() {
		$(this).slideUp(300).delay(800).fadeIn(800);
	});
});