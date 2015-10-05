$(document).ready(function(){
// all code to manipulate the DOM below
//variables for game functionality
  var playCount = 0;
  var player = "";
  var nextPlayer = "";
  var winner = "";
//functions to be called back 

function turn(){
	if(playCount % 2 === 0){
		player = "X";
		nextPlayer = "O";
	} else {
		player = "O";
		nextPlayer = "X";
	}
	playCount++;
}

function rowWins(){
	if($('.A').text() == player && $('.B').text() == player && $('.C').text() == player || ($('.D').text() == player && $('.E').text() == player && $('.F').text()) == player || ($('.G').text() == player && $('.H').text() == player && $('.I').text()) == player){
    winner = player;
    return winner;
	}
}
function colWins(){
    if($('.A').text() == player && $('.D').text() == player && $('.G').text() == player || ($('.B').text() == player && $('.E').text() == player && $('.H').text()) == player || ($('.C').text() == player && $('.F').text() == player && $('.I').text()) == player){
    winner = player;
    return winner;
    }
}
function diagWins(){
  if( $('.A').text() == player && $('.E').text() == player && $('.I').text() == player || $('.C').text() == player && $('.E').text() == player && $('.G').text() == player){
    winner = player;
    return winner;
    }
}

function checkWinner(){
  rowWins();
  colWins();
  diagWins();
  if(rowWins()){
        alert(winner + ' wins row!');
        resetBoard();    
  } else if(colWins()){    
        alert(winner + ' wins column!');
        resetBoard();
  } else if(diagWins()){
        alert(winner + ' wins diagonal!');
        resetBoard();
  } else if(playCount == 9){
        alert('There is a tie!');
        resetBoard();
  }
}

function resetBoard(){
    $('.cellPlayed').text("");
    $('.A, .B, .C, .D, .E, .F, .G, .H, .I').removeClass('cellPlayed');
    playCount = 0;
    $('.turnDisplay').text(player);
}

  
  $('.turnDisplay').text('X');


  $('.A, .B, .C, .D, .E, .F, .G, .H, .I').click(function(){

  		if($(this).hasClass('cellPlayed')){
  		} else {
  	 		  turn();
  	 	   $('.turnDisplay').text(nextPlayer);
			   $(this).text(player).addClass('cellPlayed');
         checkWinner();
		  }
    });

  $('.reset-btn').click(function(){
      resetBoard();
     $('.turnDisplay').text('X');
  });
});




