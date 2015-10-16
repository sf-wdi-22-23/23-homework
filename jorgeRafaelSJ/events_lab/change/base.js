console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $("input.add").change(function(event){
    var left = $("input#left").val();
    console.log('the shit out of it');
    var right = $("input#right").val();
    var leftVal = parseInt(left) || 0;
    var rightVal = parseInt(right) || 0;
    var total = leftVal + rightVal;
    $("#total").val(total);
  });

});
