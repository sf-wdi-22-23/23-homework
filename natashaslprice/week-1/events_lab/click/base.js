/* Challenge: Can you create a list of all the phrases 
that you click?
Stretch: In addition to listing the phrase I clicked, 
can you include a timestamp? */

console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$("span").click(function() {
		var $click = $(this).text();
		var $time = Date.now();
		var $text = "You clicked: " + $click + " at " + $time;
		$("ul").append("<li>" + $text + "</li>");
	});

});
