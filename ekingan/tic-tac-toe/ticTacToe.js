// wait for the DOM to finish loading
$(document).ready(function () {
  
  var count = 0; //counts moves
  var turn = "X"; //starts first move at X
  var $boxes = $('#id'); //keeps track of boxes by ID

  console.log('javascript is working'); // check to see it is working

  var gameReset = function () {  //this resets the game to original state
    var count = 0; 
    var turn = "X";
    $boxes.text('');
    $boxes.removeClass("X");
    $boxes.removeClass("O");
  };

  var callPlayer = function() {   // this puts a propt on the page showing
    if (count % 2 === 0) {          //which player is to go next
      $('h3').text("Player One, Go!");
      console.log("player 1 goes");
    } else {
      $('h3').text('Player Two, Go!');
      console.log("player 2 goes");
    }
};

  
//MAKE RESET BUTTON WORK

 $('button').click(function () {
  gameReset();
});


  
  
  $boxes.on('click', function () {
  	//handles clicks on each box
  	//calls other game functionality

if ($(this).text() === "") {   //wont let a play play on an occupied space
  	count = count+1;
  	console.log(count);
  	// print id

  	$(this).text(turn);  //puts X or O in box
    $(this).addClass(turn);  //adds X or O to code
    
    callPlayer();  //prompts the player (not working)


    var winner = getWinner();   //tests for a winner, if a winner exists, alerts players
    if (winner) {
      $('h3').text("Player " + winner + "won!");
      gameReset();   //resets game
      
    } else if (count < 9) {   //if there are empty boxes, play continues
      changeTurn(); 
    } else {   //if board is full, asks player to reset game
      $('h3').text("Neither player has won. Please reset the game");
    }



  
  }
  });
  
  var changeTurn = function () {  //decides who's turn it is, X other O
    if (count % 2 === 0) {
    	return 'O';
    }
    else {
    	return 'X';
    }
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
          } 
          }
            return null; //checks to see if there is a winner CHECK THIS CODE
         
      };

  var rowWinner = function () {
    var topRow = threeInARow($boxes.get(0), $boxes.get(1), $boxes.get(2));
    var middleRow = threeInARow($boxes.get(3), $boxes.get(4), $boxes.get(5));
    var bottomRow = threeInARow($boxes.get(6), $boxes.get(7), $boxes.get(8));
    return topRow || (middleRow || bottomRow );
    };

  var colWinner = function () {
    var firstCol = threeInARow($boxes.get(0), $boxes.get(3), $boxes.get(6));
    var middleCol = threeInARow($boxes.get(1), $boxes.get(4), $boxes.get(7));
    var lastCol = threeInARow($boxes.get(2), $boxes.get(5), $boxes.get(8));
    return firstCol || (middleCol || lastCol);
  };

  var diagWinner = function () {
    var leftDiag = threeInARow($boxes.get(0), $boxes.get(4), $boxes.get(8));
    var rightDiag = threeInARow($boxes.get(2), $boxes.get(4), $boxes.get(6));
    return leftDiag || rightDiag;

  };

  var getWinner = function () {
    return diagWinner || rowWinner || colWinner;
  };

  });




/*
 
// CHECKS TO SEE IF ANYONE HAS WON, THEN RELOADS THE BOARD
 var checkForWinner = function() {
    console.log($boxes);

    if ( ( $boxes(0) === $boxes(1) ) && ($boxes(2) === $boxes(3)) ) {
      if ($('.boxes').text() === "X") {
          $('h3').text('Player One Wins!');
      }
    }
  };  

    }); 


     /* if ( ( $boxes(0) === $boxes(1) ) && ($boxes(2) === $boxes(3))  === "X") || ( (board[3]) && (board[4]) && (board[5]) === "X") || ( (board[6]) && (board[7]) && (board[8]) === "X")|| (board[0] && board[3] && board[6] === "X")|| (board[1] && board[4] && board[7] === "X")|| (board[2] && board[5] && board[8] === "X")|| (board[0] && board[4] && board[8] === "X")|| (board[2] && board[4] && board[6] === "X"))  
                    { 
                      $('h3').text("Player One Wins!");
                      console.log("player 1 wins");
                      location.reload();
                    }
          
        else if  ((board[0] && board[1] && board[2] === "O") || (board[3] && board[4] && board[5] === "O") || (board[6] && board[7] && board[8] === "O") || (board[0] && board[3] && board[6] === "O") || (board[1] && board[4] && board[7] === "O") || (board[2] && board[5] && board[8] === "O") || (board[0] && board[4] && board[8] === "O") || (board[2] && board[4] && board[6] === "O")) {
                      $('h3').text("Player Two Wins!");
                      console.log("player 1 wins");
                      location.reload();
      }  // IF BOARD IS FULL, RELOADS BOARD
          else if (count === 9) {
            $('h3').text("No One Wins!");
                      console.log("no winner");
                      location.reload(); }
          else {   // IF NO ONE HAS WON, KEEPS PLAYING
            return; 
    }
      };
      });


      /*
    var fillBoard = function () {
    var board = board[(elemID-1)].push(turn);
    console.log(board);
  };
switch(board) {
  	case (elemID = 1):

  		board[0].push(turn);
  		
  		break;

  		case (elemID = 2):

  		board[1].push(turn);
  		
  		break;

  		case (elemID = 3):

  		board[2].push(turn);
  	
  		break;

  		case (elemID = 4):

  		board[3].push(turn);
  		
  		break;

  		case (elemID = 5):

  		board[4].push(turn);
  		
  		break;

  		case (elemID = 6):

  		board[5].push(turn);
  		
  		break;

  		case (elemID = 7):

  		board[6].push();
  		
  		break;

  		case (elemID = 8):

  		board[7].push(turn);
  		
  		break;

  		case (elemID = 9):

  		board[8].push(turn);
  		
  		break;


 var checkForWinner = function() {
 			for (var i = 0; i < 3; i++) {
 				if (board[i] = "X" || 'O') {
 					$('h3').text("Player" + turn + " wins!");
 				}
 			}
 			for (var i = 3; i < 6; i++ ) {
 				if (board[i] === "X" || 'O') {
					$('h3').text("Player" + turn + " wins!");
				}
 			}
 			for (var i = 6, i < 9, i++) {
 				if (board[i] = "X" || "O"); {
 					$('h3').text("Player" + turn + " wins!");
 				}
 			}
 			for (var i = 0, i < 7, i = i+3) {
 				if(board[i] = "X" || "O"); {
 					$('h3').text("Player" + turn + " wins!");
 				}
 			}
 			for (var i = 1, i < 8, i = i+3) {
 				if (board[i] = "X" || "O") {
 					$('h3').text("Player" + turn + " wins!");
 				}
 			}
 			for (var i = 2, i < 9, i = i+3) {
 				if (board[i] = "X" || "O") {
 					$('h3').text("Player" + turn + " wins!");
 				}
 			}
 			for (var i = 0, i < 9, i = i+4) {
 				if (board[i] = "X" || "O") {
 					$('h3').text("Player" + turn + " wins!");
 				}
 			}
 			for (var i = 2, i < 7, i = i+2) {
 				if (board[i] = "X" || "O") {
 					$('h3').text("Player" + turn + " wins!");
 				}
 			}
 			else if 



 		};

});*/