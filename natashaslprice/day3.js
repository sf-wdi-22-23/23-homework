// Use the on method to give each button a click event handler. 
//Attach a different effect to each button. 
//For instance, you might have one button hide the image, 
// one button show the image, and one button animate a change of the paragraph's font color
$(document).ready(function() {

	$("#button-one").on("click", function() {
		$("img").fadeTo(2000, 0.3);
	});

	$("#button-two").on("click", function() {
		$("img").fadeTo(2000, 1.0);
	});

	$("#button-three").on("click", function() {
		alert("You've clicked all my buttons!");
	});

});	