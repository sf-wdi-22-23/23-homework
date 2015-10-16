console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$('span').click(function(){
		var spanText = $(this).text();
		console.log(spanText);
		$('ul').append("<li>"+spanText+"</li>");
	});
});
