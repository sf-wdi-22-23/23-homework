$(document).ready(function(){
	$('.button1').on('click', function(){
	$('.picture').hide();
	});
	$('.button2').on('click', function(){
	$('.picture').show();
	});
	$('.button3').on('click', function(){
	$('.picture').animate({opacity:.30},3000);
	});
});