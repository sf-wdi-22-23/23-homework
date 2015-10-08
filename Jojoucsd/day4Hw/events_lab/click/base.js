console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$('span').on('click', function(e){
		var textTime = "Clicked: " + $('span') + "at " + Date.now();
		$('ul').append('<li>' + textTime + '</li>') 
	})

})
