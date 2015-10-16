//create variable for start time.
//create variable for end time
//create variable for total
//set up document
//when a key is pressed anywhere in the window,
//run a function (which you can name or not) with an (event)
//make an if/and statement inside of the function
//the conditions of the statement should be: if variable for start time exists,
//then the end time variable = now (using date.now() function)
//the total variable should then equal the end time variable minus the start time variable divided by 1000, 
//because the raw output of Date.now() is the number of milliseconds that have elapsed since Jan 1, 1970.
//the reason to divide is so that the displayed result is n seconds instead of milliseconds.
//make a text out of the total variable that it will place in the id ("#total-time"), replacing the existing text with the total variable + " seconds"
//else {the start time variable should equal now}

var start;
var end;
var total;

$(document).ready(function(){

	$(window).keypress(function(event){
		if (start) {
			end = Date.now();
			total = (end-start) /1000;
			$("#total-time").text(total + " seconds");
		} else {
			start = Date.now();
		}
	});
});