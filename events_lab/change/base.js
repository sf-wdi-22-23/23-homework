$(document).ready(function(){

  $("#time").text( Date.now() );

  $("input.add").on("change", function handleChange(event){
    var left = $("input#left").val();
    var right = $("input#right").val();
    var leftValue = parseInt(left) || 0;
    var rightValue = parseInt(right) || 0;
    var total = leftVal + rightVal;
    $("#total").val(total);
  })

})