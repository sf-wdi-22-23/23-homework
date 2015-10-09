// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var $box = $('.box');
  var turn = 'X';
  var move = 0;

  // Reset game
  $('.reset').click(function() {
  	resetGame();
  });

  // Check boxes
  $box.click(function() {
  	if ($(this).text() === "") {
  		$(this).text(turn);
  		$(this).addClass(turn);
  		move++;
  	} else {
  		alert("Pick another box!");
  	}
  	if (move > 4) {
  		var winner = getWinner();
  		if (winner) {
  			alert("Player " + winner + " wins!");
  			resetGame();
  		}
  	} else if (move === 9) {
  		alert("Game ends in a draw!");
  		resetGame();
  	} else {
  		switchPlayer();
  	} 
  });


// FUNCTIONS:

  //Reset game
  function resetGame() {
  	$box.text("");
  	$box.removeClass('X');
  	$box.removeClass('O');
  	turn = 'X';
  	move = 0;
  }

  //Alternate turns
  function switchPlayer() {
  	if (turn === 'X') {
  		turn = 'O';
  	} else {
  		turn = 'X';
  	} 
  	alert("Player " + turn + " move!");
  }

  //Check winner
  function getWinner() {
	//Three across
	if ( ($box.eq(0).text() === $box.eq(1).text()) && ($box.eq(1).text() === $box.eq(2).text()) ) {
		return $box.eq(0).text();
	} else if ( ($box.eq(3).text() === $box.eq(4).text()) && ($box.eq(4).text() === $box.eq(5).text()) ) {
		return $box.eq(3).text();
	} else if ( ($box.eq(6).text() === $box.eq(7).text()) && ($box.eq(7).text() === $box.eq(8).text()) ) {
		return $box.eq(6).text();
	}
	//Three down
	else if ( ($box.eq(0).text() === $box.eq(3).text()) && ($box.eq(3).text() === $box.eq(6).text()) ) {
		return $box.eq(0).text();
	} else if ( ($box.eq(1).text() === $box.eq(4).text()) && ($box.eq(4).text() === $box.eq(7).text()) ) {
		return $box.eq(1).text();
	} else if ( ($box.eq(2).text() === $box.eq(5).text()) && ($box.eq(5).text() === $box.eq(8).text()) ) {
		return $box.eq(2).text();
	}
	//Diagnols
	else if ( ($box.eq(0).text() === $box.eq(4).text()) && ($box.eq(4).text() === $box.eq(8).text()) ) {
		return $box.eq(0).text();
	} else if ( ($box.eq(6).text() === $box.eq(4).text()) && ($box.eq(4).text() === $box.eq(2).text()) ) {
		return $box.eq(6).text();
	}
  }
});