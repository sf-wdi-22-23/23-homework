console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  // $("#left").on("change", function(){
  //   var left = $(this).val();

  //   //console.log( typeof left  == 'string');
  //   var right = $("#right").val();
  //   var total = parseInt(left) + parseInt(right);
  //   $("#total").val(total);
  // });
  // $("#right").on("change", function(){
  //   var left = $("#left").val();
  //   var right = $(this).val();
  //   var total = parseInt(left) + parseInt(right);
  //   $("#total").val(total);
  // });

// $('input').on('change',function(){
//     $('#total').val(parseInt($('#left').val())+ parseInt($('#right').val()));

// });
// $('button').on('click',function() {
//     $('#left').val('');
//     $('#right').val('');
//     $('#total').val('');
//     // body...
// });  

$("input.add").on("change", function handleChange(event){
  var left = $("input#left").val();
  var right = $("input#right").val();
  var leftVal = parseInt(left) || 0;
  var rightVal = parseInt(right) || 0;
  var total = leftVal + rightVal;
  $("#total").val(total);
})
});
