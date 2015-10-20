console.log("Sanity Check: JS is working!");

$(document).ready(function(){

var i=0;
var timeStart='';
var timeEnd='';

$(window).keypress(function(e) {
  if (e.keyCode === 0 || e.keyCode === 32) {
    console.log('Space pressed');
  if (i === 0){
    	timeStart = new Date($.now());
    	console.log("the start time is " + timeStart);
    	i++;
    	return timeStart;
  } else if (i === 1){
    	timeEnd = new Date($.now());
    	console.log("the end time is " + timeEnd);
    	return timeEnd;
  }
    var tracker = (timeEnd - timeStart);
    console.log(tracker);
    $("totalTime").text(tracker);
    }
});

//take timeStamp at start
//take timeStamp at end
//subtract one from other for total time lapsed 



});
