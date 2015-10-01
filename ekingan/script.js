$(document).ready(function(){
$('.button1').click(function() {
  $(this).css({"color": "#FFFFFF"});
});
$(".button2").click(function(){
  $(this).css({"background-color": "#FFFFFF"});
});
$(".button3").click(function(){
    $(this).css({"font-size": "50px"});

});
 $("#hide").click(function(){
    $("h1").hide();
});

$("#show").click(function(){
    $("h1").show();
});
$('.button3').dblclick(function(){
    alert("Go to sleep!!");
});
});