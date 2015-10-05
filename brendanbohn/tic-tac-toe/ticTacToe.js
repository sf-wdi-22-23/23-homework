///wait for the DOM to finish loading

$(document).ready(function() {

	var moves = 0;

	var player = "X";

	var $box = $('.box');

	var playerOne;

	var playerTwo;

	var $turnPrompter = $('.turn-prompter');

// creates a variable $reset that is equal to the button with the id of reset

	var $reset = $('#reset');

// switches from X to O after each play and switches which name is displayed

	function switchTurns() {
		if (player==="X") {
			player = "0";
			$turnPrompter.text('It\'s '+ playerTwo + '\'s turn');

		} else {
			player = "X";
			$turnPrompter.text('It\'s '+ playerOne + '\'s turn');

		}
	}

// defines a function that clears the board, resets the number of moves to 0, and makes it X's turn

	function resetGame() {
		$box.text("");
		$box.removeClass("X");
		$box.removeClass("0");
		player = "X";
		moves = "0";
	}

/*		Event Listeners		*/

// sets Player One's name when they hit the submit button

  $('#player-one-form').submit(function(e) {
    e.preventDefault();

    // Detect if player-one form is empty
    if ($('#player-one-name').val().trim().length > 0) {
      playerOne = $('#player-one-name').val();
      /*console.log(playerOne);*/
      $('.turn-prompter').text('It\'s '+ playerOne + '\'s turn');
      $('#player-one-submit').hide();
      /*return playerOne;*/
  	}
  });

// sets Player Two's name when they hit the submit button

  $('#player-two-form').submit(function(e) {
    e.preventDefault();

// detect if player-two form is empty, hides the submit button, returns the value of what Player Two submitted

    if ($('#player-two-name').val().trim().length > 0) {
      playerTwo = $('#player-two-name').val();
      /*console.log(playerTwo);*/
      $('#player-two-submit').hide();
      /*return playerTwo;*/
  	}
  });

 /*	when an empty box is clicked: adds an X or an O, adds a move to total moves, 
 switches between X and O, switches the player's name in the display of whose turn it is.	*/

	$box.click(function() {
		if ($(this).text() === "") {
			$(this).text(player);
			moves+=1;
			switchTurns();
		}
	});

	// runs the resetGame function when the Reset anchor tag is clicked.

	$reset.click(function() {
		resetGame();
	});

});