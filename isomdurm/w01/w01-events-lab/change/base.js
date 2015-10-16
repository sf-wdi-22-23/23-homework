console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  /*Challenge: Some simple addition! Can you get the total to 
  update whenever you update the numbers?
  Bonus: Add a "reset" button that clears all the inputs.*/

  $(".add").change(function(e) {
    var $left = $("#left").val();
    var $right = $("#right").val();
    var $leftVal = parseInt($left);
    var $rightVal = parseInt($right);
    var $total = $leftVal + $rightVal;
    $("#total").val($total);
  });

  $("#btn").click(function() {
    $(".add").val("");
    $("#total").val("");
  });

});
