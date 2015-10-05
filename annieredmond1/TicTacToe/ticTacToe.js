$(document).ready(function(){ 
	var x = 1;
	var o = 2;
	var playerX;
	var playerO;
	var winner = "none";
	var count = 0;
	var one;
	var two;
	var three;
	var four;
	var five;
	var six;
	var seven;
	var eight;
	var nine;


	function clearBoard() {
		$('.box').val(null).text(' ');
		count = 0;
		winner = "none";
	}

	function checkWinner() {
		if((one + two + three === 3) || (four + five + six === 3) || (seven + eight + nine === 3) || (one + four + seven === 3) || (two + five + eight === 3) || (three + six + nine === 3) || (one + five + nine === 3) || (three + five + seven === 3)) {
			winner = "player X";
			
		} else if((one + two + three === 6) || (four + five + six === 6) || (seven + eight + nine === 6) || (one + four + seven === 6) || (two + five + eight === 6) || (three + six + nine === 6) || (one + five + nine === 6) || (three + five + seven === 6)) {
			winner = "player O";
			
		}
		
	}
	function getWinner() {
		checkWinner();
		if(count > 8) {
			alert("The game is tied.  Click ok to play again!");
			clearBoard();
		} else if(winner === "player X") {
			alert("The winner is " + winner);
			clearBoard();
		} else if(winner === "player O") {
			alert("The winner is " + winner);
			clearBoard();
		}
	}

	function whoseTurn() {
		if(count%2 === 0) {
			alert("Player X it's your turn!");
		} else {
			alert("Player O it's your turn!");
		}
	}

	clearBoard();
	alert('Player X, your turn first!');

	$('#one').on('click', function () {
		if(!$(this).val()) {
			if(count%2 === 0) {
				$(this).val(x).text('X');
				one = 1;
			} else {
				$(this).val(o).text('O');
				one = 2;
			}
			count++;

		} else {
			alert("This sqaure already taken, please choose another!");
			
		}
		getWinner();
		whoseTurn();
	});

	$('#two').on('click', function () {
		if(!$(this).val()) {
			if(count%2 === 0) {
				$(this).val(x).text('X');
				two = 1;
			} else {
				$(this).val(o).text('O');
				two = 2;
			}
			count++;
		} else {
			alert("This sqaure already taken, please choose another!");
		}
		getWinner();
		whoseTurn();

	});

	$('#three').on('click', function () {
		if(!$(this).val()) {
			if(count%2 === 0) {
				$(this).val(x).text('X');
				three = 1;
			} else {
				$(this).val(o).text('O');
				three = 2;
			}
			count++;
		} else {
			alert("This sqaure already taken, please choose another!");
		}
		getWinner();
		whoseTurn();
	});

	$('#four').on('click', function () {
		if(!$(this).val()) {
			if(count%2 === 0) {
				$(this).val(x).text('X');
				four = 1;
			} else {
				$(this).val(o).text('O');
				four = 2;
			}
			count++;
		} else {
			alert("This sqaure already taken, please choose another!");
		}
		getWinner();
		whoseTurn();
	});

	$('#five').on('click', function () {
		if(!$(this).val()) {
			if(count%2 === 0) {
				$(this).val(x).text('X');
				five = 1;
			} else {
				$(this).val(o).text('O');
				five = 2;
			}
			count++;
		} else {
			alert("This sqaure already taken, please choose another!");
		}
		getWinner();
		whoseTurn();
	});

	$('#six').on('click', function () {
		if(!$(this).val()) {
			if(count%2 === 0) {
				$(this).val(x).text('X');
				six = 1;
			} else {
				$(this).val(o).text('O');
				six = 2;
			}
			count++;
		} else {
			alert("This sqaure already taken, please choose another!");
		}
		getWinner();
		whoseTurn();
	});

	$('#seven').on('click', function () {
		if(!$(this).val()) {
			if(count%2 === 0) {
				$(this).val(x).text('X');
				seven = 1;
			} else {
				$(this).val(o).text('O');
				seven = 2;
			}
			count++;
		} else {
			alert("This sqaure already taken, please choose another!");
		}
		getWinner();
		whoseTurn();
	});

	$('#eight').on('click', function () {
		if(!$(this).val()) {
			if(count%2 === 0) {
				$(this).val(x).text('X');
				eight = 1;
			} else {
				$(this).val(o).text('O');
				eight = 2;
			}
			count++;
		} else {
			alert("This sqaure already taken, please choose another!");
		}
		getWinner();
		whoseTurn();
	});

	$('#nine').on('click', function () {
		if(!$(this).val()) {
			if(count%2 === 0) {
				$(this).val(x).text('X');
				nine = 1;
			} else {
				$(this).val(o).text('O');
				nine = 2;
			}
			count++;
		} else {
			alert("This sqaure already taken, please choose another!");
		}
		getWinner();
		whoseTurn();
	});


	$('#reset').click(function() {
			clearBoard();
	});

});





