console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
var left = parseInt($('#left').val());
var right = parseInt($('#right').val());

$('#total').val(left + right);
  
});
