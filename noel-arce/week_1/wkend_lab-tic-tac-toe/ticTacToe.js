// wait for the DOM to finish loading
$(document).ready(function(){
	// alert("ticTacToe jQuery working!");
  // all code to manipulate the DOM
  // goes inside this function

  // X goes first on move 0
  var turn = 'X';
  var count = 0;

  //function to alternate between X/O and display message
  function switchPlayer() {
    if (turn === 'X') {
      turn = 'O';
      $('p').text('CURRENT PLAYER: O');
    } else {
      turn = 'X';
      $('p').text('CURRENT PLAYER: X');
    }
  }

  //function to reset/clear board
  var resetBoard = function() {
    $('.box').text("");
    $('p').text('PLAYER X GO');
    turn = 'X';
  };

  //click square to make move
  $('.box').click(function(){
    if ($(this).text() === '') {
      $(this).text(turn);
      switchPlayer();
    }else {
      $('p').text('CHOOSE EMPTY BOX');
    }
  });

  //click to reset/clear board
  $('#reset').click(function(){
    resetBoard();
    });
  });

//win by columns [???]
  // var winCol = function() {
  //   var leftCol =
  //   var midCol = 
  //   var rightCol = 
  //   return leftCol || midCol || rightCol;
  // };

  // //win by rows [???]
  // var winRow = function() {
  //   var topRow = 
  //   var midRow = 
  //   var bottomRow = 
  //   return topRow || midRow || bottomRow;
  // };
 
  // //win by diagonal [???]
  // var winDiag = function() {
  //   var diagOne = 
  //   var diagTwo = 
  //   return diagOne || diagTwo;
  // };

  // //declare winner [???]
  // function declareWinner(){
  //   if (winCol || winRow || winDiag) {
  //     $('p').text('Player ' + turn + 'Wins!');
  //   }
  // }

  //need three boxes to win [???]
  

  //[first idea : DOES NOT WORK] clicks and alternates, but allows to click over filled box still
  // $('.box').click(function(){
  //   if ($(this).text() === '') {   
  //     if (count % 2 === 0) {
  //       $(this).text('X');
  //     }else {
  //       $(this).text('O');
  //     }count++;
  //   }
  // });