// wait for the DOM to finish loading
$(document).ready(function () {
	console.log("Insanity Check")
  // all code to manipulate the DOM
  // goes inside this function

 
  //var $random = $('#random'); // Wants to add AI for computer's move in the future
  var $reset = $('#reset'); //refresh page
  var $boxes = $('.box'); //each individual box
  
  var player = "X"; //first player
  
  var counts = 0; //how many moves on the field

  function playAgain(){
  	$boxes.text("");
  	$boxes.removeClass("X");
  	$boxes.removeClass("O");

  	player = "X";
  	counts = 0;
  };

  function switchPlayer(){
  	if (player === "X"){
     player = "O";
      $('.msg-alert').append("Player O's turn"); //Wants to alert who's turn but not working atm
   }else{
    player = "X";
      $('.msg-alert').append("Player X's turn"); //same as above
  }
};

//check winning combo

function winCombo (click, first, second, third) {
return ($(first).text() === click) && ($(second).text() === click) && ($(third).text() === click);
};

function diaCheck(click){
 var leftDia =winCombo(click, $boxes[0], $boxes[4], $boxes[8]);
 var rightDia =winCombo(click, $boxes[2], $boxes[4], $boxes[6]);

 return leftDia || rightDia;
};

function colCheck(click){
 var leftCol =winCombo(click, $boxes[0], $boxes[3], $boxes[6]);
 var midCol =winCombo(click, $boxes[1], $boxes[4], $boxes[7]);
 var rightCol =winCombo(click, $boxes[2], $boxes[5], $boxes[8]);

 return leftCol || (midCol || rightCol);
};

function rowCheck(click){
 var firstRow = winCombo(click, $boxes[0], $boxes[1], $boxes[2]);
 var secondRow = winCombo(click, $boxes[3], $boxes[4], $boxes[5]);
 var thirdRow = winCombo(click, $boxes[6], $boxes[7], $boxes[8]);

 return firstRow || (secondRow || thirdRow);
};

function winnerCheck(click){
 return rowCheck(click) || (colCheck(click) || diaCheck(click));
 console.log(getWinner(click)); //Insanity Check
};

function getWinner(){
  if (winnerCheck("X")){
    return "X";
  } else if (winnerCheck("O")){
    return "O";
  } else
  return null;
}

//Event Listener

//Clicking Boxes to trigger the event

$boxes.on('click', function(){
  var winner = getWinner();
  
	if($(this).text()===""){
		$(this).text(player);
    $('.msg-alert').append("Player O's turn"); //another try to add the alert but not working
		$(this).addClass(player);
		counts = counts + 1;

		if(winner) {
			alert("Player " + winner + " won!");
			//playAgain();
		}else if (counts < 9){
			switchPlayer();
		}else{
			alert("Draw Game, no  winner!");
			//playAgain();
		}
	}
});


$('#reset').on('click', function(){
  playAgain();
});

});