console.log("Sanity Check: JS is working!");

var start;
var end;
var total; 

$(document).ready(function(){

  $(window).keypress(function(event){

    if ( start ) {
      end = Date.now();
      total = (end - start) / 1000;
      $("#total-time").text( total + " seconds" );
    } else {
      start = Date.now();
    }

  });

});