console.log("Sanity Check: JS is working!");

var startTime; // undefined
var endTime; // undefined
var total; // undefined

$(document).ready(function(){
  $(window).on("keypress", function handleKeypress(event){
  	if(startTime){
  		if(32 === event.keyCode){
  			endTime = Date.now();
  			total = (endTime-startTime) / 1000;
  			$('#total-time').text(total + "s");

  			startTime = undefined;
	  	}
  	} else {
  		if(32 === event.keyCode){
  			startTime = Date.now();
			console.log("start",startTime);
	  	}
  	}
  });
});