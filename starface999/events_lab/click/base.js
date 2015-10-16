//set up document
//when click happens, look into ("span")
// and this will trigger a function.
//inside of this function (which we could name if we wanted to, but it isn't necessary to do so unless we're going to use it somewhere else later)
//create a variable, x, that equals $(this) .text (referring to the text that has been called upon already)
//then append ("<li>" + btnTxt + "<li>") to ("ul")

$(document).ready(function() {

	$("span").on("click", function (){
		var x = $(this).text();
		$("ul").append("<li>" + x + "</li>");
	});

});