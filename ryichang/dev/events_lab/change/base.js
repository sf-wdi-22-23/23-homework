console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  
  $("input.add").change(function(){
    var left = $("input#left").val();
    var right = $("input#right").val();
    var leftVal  = parseInt(left) || 0; 
    var rightVal = parseInt(right) || 0;
    var total = leftVal + rightVal; 
    $("#total").val(total);


  });

  
});

// parseInt convert string to numbers 
// or 0 to prevent undefined 
// .change(function(){