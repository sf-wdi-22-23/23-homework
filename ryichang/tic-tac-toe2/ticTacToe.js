// wait for the DOM to finish loading
$(document).ready(function(){
  // all code to manipulate the DOM
  // goes inside this function

  // set up move counter to keep track of moves 
	
	var moves = 0; 
	var $box = $('.box');
  // Set up function to win Tic-Tac-Toe, needs three in a row. 
   var allThree = function(player, box1, box2, box3){
   	return ($(box1).text() === player) && ($(box2).text() === player) && ($(box3).text() === player);
   };

  //check for wins via columns, rows, diagnonals. Box 0-8, 9 boxes total. 
  var winsColumn = function(player) {
  	return allThree(player, $box.get(0), $box.get(3), $box.get(6)) ||
  		   allThree(player, $box.get(1), $box.get(4), $box.get(7)) ||
  		   allThree(player, $box.get(2), $box.get(5), $box.get(8));
  };
  
  //check for wins in a row, 3 scenarios. 
  var winsRow = function(player) {
  	return allThree(player, $box.get(0), $box.get(1), $box.get(2)) ||
  		   allThree(player, $box.get(3), $box.get(4), $box.get(5)) ||
  		   allThree(player, $box.get(6), $box.get(7), $box.get(8));
  };
  // check for wins in diagonal, 2 scenarios. 
  var winsDiagonal = function(player) {
  	return allThree(player, $box.get(0), $box.get(4), $box.get(8)) ||
  		   allThree(player, $box.get(2), $box.get(4), $box.get(6));
  };
  // Variable to determine winner by one of three conditions. 
  var winnerIs = function(player) {
  	return winsColumn(player) || winsRow(player) || winsDiagonal(player);
  };
  // Variable to spell out winner. 
  var getWinner = function() {
  	if (winnerIs("X")) {
  		return "X";
  	} else if (winnerIs("O")) {
  		return "O";
  	} else {
  		return null;
  	}
  };

  // if player click on box, input "X", add move
  // if move is even, input "O", add move
  // "X" and "O" alternate 
	$('.box').on('click', function(){
   	  if ( moves%2 === 0 || 0) {
   	    $(this).text("X");
   	    $(this).addClass("X");
   	    $(this).removeClass("O");
 	  } else {
 	  	$(this).text("O");
 	  	$(this).addClass("O");
 	  	$(this).removeClass("X");
 	  }
   	    moves +=1;
   	//Call winner function, if more than 9 moves and no winner, the game is a tie. 
   	    var winner = getWinner();
   	    if (winner) {
   	    	alert("Player" + " " + winner +  " " + "wins!");
   	    	$('.box').text("");
   	    	$('.box').removeClass("X");
   	    	$('.box').removeClass("O");
   	    } if (moves > 9){
   	    	alert("Tie");
   	    	$('.box').text("");
   	    	$('.box').removeClass("X");
   	    	$('.box').removeClass("O");
   	    }
   		// if (move > 9){
   		// 	alert("Tie");
   		// 	$('.box').text("");
   		// 	$('.box').removeClass("X");
   		// 	$('.box').removeClass("O");
   		// } else if (winner) {
   		// 	alert("Player" + " " + winner + " " + "wins!");
   		// 	$('.box').text("");
   		// 	$('.box').removeClass("X");
   		// 	$('.box').removeClass("O");
   		// }
   	  

	});
   // when player click on button, remove all text and class to reset game
   $('.btn').on('click', function(){
   	 $('.box').text("");
   	 $('.box').removeClass("X");
   	 $('.box').removeClass("O");
	});



	
 }); 
  