// wait for the DOM to finish loading

$(document).ready(function(){

var turn;
var player_x_wins = 0;
var player_o_wins = 0;

function whoStarts(){ 
  var random = Math.random();  
  if (random < 0.5){
  turn = 'X';
  } else {
  turn = 'O';
  }
  return turn;
}

function startGame(){
  whoStarts();
  winner = null;
  setMessage(turn + " gets to start!");
}

function setMessage(msg){
  $('#turn-display').text(msg);
}

function switchTurn () {
  if (checkForWinner(turn)) {
  setMessage("Game over! " + turn + " wins!");
  winner = turn;
  } else if (turn === 'X'){
  turn = 'O';
  setMessage("It's " + turn + "'s turn to move.");
  } else {
  turn = 'X';
  setMessage("It's " + turn + "'s turn to move.");
  } 
  }

$('.box').click(function(){
      if (winner !== null){
          setMessage("Game over! " + turn + " wins!"); 
          if (turn === 'X'){
          player_x_wins++;
          $('#x_wins').append(player_x_wins);
          } else {
          player_o_wins++;
          $('#o_wins').append(player_o_wins);
          }
    } else if ($(this).is(':empty')){
    $(this).text(turn);
    switchTurn();
    } else {
    setMessage('Square already has move!'); 
  }
});


startGame();

//Gets board move 


/*function getMove(){
var gameBoard = [];  
for (var i = 0; i <= 8; i++) {
    if ($('#'+i).is(':empty')){
    gameBoard.push(null);
    } else {
    gameBoard.push($('#'+i).text());
    }
    return gameBoard;
  }
}*/


//Check for Winner



//Check box for value 



//if box has value, push to an array 
  //the value of the box (0, 1, 2) will be pushed to an array with the same postion

//Check for Winner 

function checkForWinner(move) {
  var result = false;
  if (checkRow(0,1,2, move) ||
      checkRow(3,4,5, move) ||
      checkRow(6,7,8, move) ||
      checkRow(0,3,6, move) ||
      checkRow(1,4,7, move) ||
      checkRow(2,5,8, move) ||
      checkRow(0,4,8, move) ||
      checkRow(2,4,6, move)) {
    result = true;
    }
  return result;
}

//Check row for matches

function checkRow (a,b,c,move) {
  var result = false;
  if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
    result = true;
  }
  return result;
}

//Get value of Box


function getBox (number){
  return $('#'+ number).text();
}


//Resets game board 

function clearBoard (){
   if ($('.box').text()){
      $('.box').empty();
      } else {
      alert('The board is clear.');
      }
   }

//Reset Button

$('button').click(function(){ 
      clearBoard();
      startGame();
   });
});


