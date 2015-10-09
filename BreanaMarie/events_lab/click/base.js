console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$("#imperatives").click(function(){
		var timestamp = new Date($.now());
		console.log(timestamp);
		var length =$("#imperatives").length -1;
		var select= $("#imperatives")[lenth];
		console.log (select);
	});

});

/*
imparative click
record which span/child? into a variable
take saved variable print to screen
add time stamp to screen print append()

*/
$("#imperatives").last().on('click' function(){
	$('this').val();
});