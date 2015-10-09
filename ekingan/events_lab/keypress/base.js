console.log("Sanity Check: JS is working!");



	
	//create variables for beginning and ending time and total time
	var startTime;
	var endTime;
	var totalTime;
$(document).ready(function(){

	$(window).on('keypress', function handleKeypress(event) {

		if (startTime) { //user starts timer
	 		endTime = Date.now(); //gets end time
	 		totalTime = (endTime - startTime) / 1000; //finds total time and divides by 1000 to get seconds

			$("#total-time").text( totalTime + " seconds" ); //prints total time to html page
    	} else {
      startTime = Date.now(); //gets total time when key is pressed
    }
	});
});


