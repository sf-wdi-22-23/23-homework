// wait for the DOM to finish loading
$(document).ready(function(){
  //alert("jQuery test");

  // reset function
  var reset = function() {  
  	if($('.box').text('X' || 'O')) {
  		$('.box').text('');
  		counter = 0;
  		$('.turn').text("Player X, it is your go!");
  	}
  };

  // on click of reset-btn, reset
  $('#reset-btn').click(function() {
  	reset();
  });

  // On click of any of .box area, if this one is empty, count++ and insert text
  var counter = 0;
  $('.turn').text("Player X, it is your go!");
  $('.box').click(function() {
  	var X = counter % 2 === 0;
  	var O = counter % 2 !== 0;
  	if($(this).text().length === 0){
  		counter = counter + 1;
  		if(X) {
  			$(this).text('X');
  			$('.turn').text("Player O, it is your go!");
  		}
  		if(O) {
  			$(this).text('O');
  			$('.turn').text("Player X, it is your go!");
  		}
  	}

  	// winning variables - can't make it work with function!
  	var xRowWins = (($('#1').text() === 'X') && ($('#2').text() === 'X') && ($('#3').text() === 'X')) || 
  								 (($('#4').text() === 'X') && ($('#5').text() === 'X') && ($('#6').text() === 'X')) ||
  								 (($('#7').text() === 'X') && ($('#8').text() === 'X') && ($('#9').text() === 'X'));

  	var oRowWins = (($('#1').text() === 'O') && ($('#2').text() === 'O') && ($('#3').text() === 'O')) || 
  								 (($('#4').text() === 'O') && ($('#5').text() === 'O') && ($('#6').text() === 'O')) ||
  								 (($('#7').text() === 'O') && ($('#8').text() === 'O') && ($('#9').text() === 'O'));
  	
		var xColWins = (($('#1').text() === 'X') && ($('#4').text() === 'X') && ($('#7').text() === 'X')) || 
  								 (($('#2').text() === 'X') && ($('#5').text() === 'X') && ($('#8').text() === 'X')) ||
  								 (($('#3').text() === 'X') && ($('#6').text() === 'X') && ($('#9').text() === 'X'));

  	var oColWins = (($('#1').text() === 'O') && ($('#4').text() === 'O') && ($('#7').text() === 'O')) || 
  								 (($('#2').text() === 'O') && ($('#5').text() === 'O') && ($('#8').text() === 'O')) ||
  								 (($('#3').text() === 'O') && ($('#6').text() === 'O') && ($('#9').text() === 'O'));

		var xDiagWins = (($('#1').text() === 'X') && ($('#5').text() === 'X') && ($('#9').text() === 'X')) || 
  								 	(($('#3').text() === 'X') && ($('#5').text() === 'X') && ($('#7').text() === 'X'));

  	var oDiagWins = (($('#1').text() === 'O') && ($('#5').text() === 'O') && ($('#9').text() === 'O')) || 
  								 	(($('#3').text() === 'O') && ($('#5').text() === 'O') && ($('#7').text() === 'O'));

  	// winning alerts
  	if(xRowWins || xColWins || xDiagWins) {
  		alert('X wins!');
  		reset();
  	}
  	else if(oRowWins || oColWins || oDiagWins) {
  		alert('O wins!');
  		reset();
  	}
  	// tie
  	else {
  		if($('.box').text().length > 8) {
  		alert('It"s a tie!');
  		reset();
  		}
  	}
  });
});
