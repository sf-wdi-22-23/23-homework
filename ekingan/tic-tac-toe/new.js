var count = 0; 
var turn = "X";


var gameReset = function () {  //this resets the game to original state
  var count = 0; 
  var turn = "X";
  $boxes.text('');
  $boxes.removeClass("X");
  $boxes.removeClass("O");
};
  
var setTurn = function () {  //decides who's turn it is, X or O
  if (turn === "X") {
  	turn = "O";
  }
  else {
  	turn = 'X';
  }
};

var callPlayer = function() {
	if (count % 2 === 0) {
		$('h3').text("Player One, Go!");
		console.log("player 1 goes");
	} else {
		$('h3').text('Player Two, Go!');
		console.log("player 2 goes");
	}
};

var getWinner = function ($boxes) {
  return diagWinner($boxes) || rowWinner($boxes) || colWinner($boxes);
}; 

var threeInARow = function (firstBox, secondBox, thirdBox ) {  //checks to see if there 
  var firstBoxPlayer = $(firstBox).text();                  //are three X or O in a row
  var secondBoxPlayer = $(secondBox).text();
  var thirdBoxPlayer = $(thirdBox).text();

  if ((firstBoxPlayer === secondBoxPlayer) && (secondBoxPlayer === thirdBoxPlayer)) {
    if (firstBoxPlayer === "X") {
      return "X"; 
    } else if (firstBoxPlayer === "O") {
      return "O"; 
    } else {
    	return null; //checks to see if there is a winner CHECK THIS CODE
    }
  };
};

var rowWinner = function ($boxes) {
  var topRow = threeInARow($boxes.eq(0), $boxes.eq(1), $boxes.eq(2));
  var middleRow = threeInARow($boxes.eq(3), $boxes.eq(4), $boxes.eq(5));
  var bottomRow = threeInARow($boxes.eq(6), $boxes.eq(7), $boxes.eq(8));
  return topRow || (middleRow || bottomRow );
  };

var colWinner = function ($boxes) {
  var firstCol = threeInARow($boxes.eq(0), $boxes.eq(3), $boxes.eq(6));
  var middleCol = threeInARow($boxes.eq(1), $boxes.eq(4), $boxes.eq(7));
  var lastCol = threeInARow($boxes.eq(2), $boxes.eq(5), $boxes.eq(8));
  return firstCol || (middleCol || lastCol);
};

var diagWinner = function ($boxes) {
  var leftDiag = threeInARow($boxes.eq(0), $boxes.eq(4), $boxes.eq(8));
  var rightDiag = threeInARow($boxes.eq(2), $boxes.eq(4), $boxes.eq(6));
  return leftDiag || rightDiag;
};



$(document).ready(function () {
  var $boxes = $('.box');
  var count = 0;
  console.log('javascript is working');

	$('button').click(function () {
		location.reload();
	});

	$('.box').click(function () {
	  //handles clicks on each box
	  //calls other game functionality
		if ($(this).text() === "") {
	    count = count+1;
	    console.log(count);
	    // print id
	    var elemID = $(this).attr('id');
	    console.log('#'+elemID);

	    if ($(this).text() === ""); {
		    $('#'+elemID).text(turn); 
		  }
		  $(this).addClass(turn); 
      console.log(this);

      var callPlayer = function() {
		  	if (count % 2 === 0) {
		  		$('h3').text("Player One, Go!");
		  		console.log("player 1 goes");
		  	} else {
		  		$('h3').text('Player Two, Go!');
		  		console.log("player 2 goes");
		  	}
			}

			callPlayer();
			setTurn();
		}

		var winner = getWinner($boxes);   //tests for a winner, if a winner exists, alerts players
	  if (winner) {
	    $('h3').text("Player " + winner + " won!");
	    gameReset();   //resets game
	    
	  } else if (count < 9) {   //if there are empty boxes, play continues
	    
	  } else {   //if board is full, asks player to reset game
	    alert("Neither player has won. Please reset the game");
	  }

	})
});