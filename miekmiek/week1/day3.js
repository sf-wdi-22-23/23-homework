$(document).ready(function(){
	$('#but1').click(function(){
		$('p').fadeTo('slow', 0.5);
	});
	$('#but2').click(function(){
		$('img').hide();
	});
	$('#but3').click(function(){
		$('img').show();
	});
});
