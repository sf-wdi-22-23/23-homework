// wait for the DOM to finish loading
$(document).ready(function () {

	//pick player
	//player picks box, mark completed
	//switch players


	function playGame() {
		var $boxes = $('.box');

		var play = 'X';

		var moves=0;

		var status = "Player 1's Turn";

		//var board = nested array
		// [ ["", "", ""], ["", "", ""], ["", "", ""] ]



		$('h3').text(status);


		var changeTurn = function () {
			if (play === 'X') {
				play = 'O';
				$('h3').text("Player 2's Turn");
			} else {
				play = 'X';
				$('h3').text(status);
			}
		};

		$boxes.click(function() {
			if ($(this).text() === "") {
				$(this).text(play).addClass(play);
				console.log(this);
			}

			moves++;
			changeTurn();
		});


		$('#reset').click(function() {
			$boxes.text("");
			play='X';
			moves=0;
			$('h2').text("New Game").fadeIn('slow').fadeOut('slow');
			$('h3').text(status);
		});
	}



// 





	function findWinner() {
		playGame();
	// 	if (('.one' && '.two' && '.three') || ('.four' && '.five' && '.six') || ('.seven' && '.eight' && '.nine') === 'X') {
	// 		return "X wins!";
	// 	} else if (('.one' && '.five' && '.nine') || ('.three' && '.five' && '.seven') === 'X') {
	// 		return "X wins!"; 
	// 	} else if (('.one' && '.two' && '.three') || ('.four' && '.five' && '.six') || ('.seven' && '.eight' && '.nine') === 'O') {
	// 		return "O wins!";
	// 	} else if (('.one' && '.five' && '.nine') || ('.three' && '.five' && '.seven') === 'O') {
	// 		return "O wins!";
	// 	} else {
	// 		return "No winners :(";
	// 	}
		
	}

	findWinner();

	// alert(findWinner());

 });




 	








