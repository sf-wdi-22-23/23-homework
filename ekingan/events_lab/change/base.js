console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $('input.add').on("change", function handleChange() {
  	var left = $('input#left').val(); //gets a value from left text field
  	var right = $('input#right').val(); //gets a value from right text field
  	var leftVal = parseInt(left) || 0; //make left variable an integer
  	var rightVal = parseInt(right) || 0; //makes right variable and integer
  	var total = leftVal + rightVal;
  	$('#total').val(total);
  });

});