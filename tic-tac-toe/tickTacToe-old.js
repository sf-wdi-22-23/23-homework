// wait for the DOM to finish loading
$(document).ready(function () {
  
  var count = 0;
  var board = [1,1,1,1,1,1,1,1,1]; //sets up initial array
  var turn = "X";
  console.log('javascript is working');
  
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
  	 $('#'+elemID).text(turn).addClass(turn); }
      //$(this).addClass(turn); }
      console.log(this);
    //checkForWinner();
  	//callPlayer();
   // fillBoard(elemID);
   } 
  });
  
  // all code to manipulate the DOM
  // goes inside this function
  

    //pushes x or o into array based on ID of square 
var fillBoard = function (squareID) {
    var board = board[(squareID-1)].push(turn);
    console.log(board);
    return board;
  };
  
  var turn = function () {  //decides who's turn it is, X or O
    if (count % 2 === 0) {
    	return 'O';
    }
    else {
    	return 'X';
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

//MAKE RESET BUTTON WORK
$('button').click(function () {
	location.reload();
});



 
// CHECKS TO SEE IF ANYONE HAS WON, THEN RELOADS THE BOARD
 var checkForWinner = function() {
 		var box = $("#"+elemID).addClass(turn)

     };
});
 /* 

for (var i = 0; i < 9; i++) { 
      if ( ( (board[0]) && (board[1]) && (board[2]) === "X") || ( (board[3]) && (board[4]) && (board[5]) === "X") || ( (board[6]) && (board[7]) && (board[8]) === "X")|| (board[0] && board[3] && board[6] === "X")|| (board[1] && board[4] && board[7] === "X")|| (board[2] && board[5] && board[8] === "X")|| (board[0] && board[4] && board[8] === "X")|| (board[2] && board[4] && board[6] === "X"))  
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
      }
      };
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