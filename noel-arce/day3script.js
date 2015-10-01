$(document).ready(function(){
	$("#hide").on("click",function(){
		$("#dubs").hide();
	});

	$("#show").on("click",function(){
		$("#dubs").show();
	});

	$("#change").on("mouseover",function(){
		$('p').css('color','white');
		$('p').css('background-color', 'black');
	}).on("mouseleave",function(){
		$('p').css('color','black');
		$('p').css('background-color','white');
	});
});