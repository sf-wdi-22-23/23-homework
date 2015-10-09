$(document).ready(function() {
	var firstResponse = 
	prompt("Let's play Tic-Tac-Toe! \n Please choose either X or O");
		var xmove;

		// Switches between x & o // if no one chooses computer chooses x
	switch(firstResponse) {
		case 'X':
		case 'x':
		xmove = true;
		break;
		case 'O':
		case 'o':
		xmove = false;
		break;
		default:
		alert("You didn't pick x or o I'm picking x");
		xmove = true;
		break;
	}
	// prompts what move has been made
	alert("xmove is " + xmove);

	//fills each box with either x or o depending on who's turn
	$('.box').click(function(event) {
		var box = event.target;
		if (box.innerHTML=='') {
			if(xmove) {
				box.innerHTML = 'X';
				test('X');
			}
			else {
				box.innerHTML = 'O';
				test('O');
			}

			xmove = !xmove;


		}
	});
     // Tests each possible way of winning 

	 function test(player) {
    
    var winner = [
      ['a', 'b', 'c'],
      ['a', 'e', 'i'],
      ['a', 'd', 'g'],
      ['d', 'e', 'f'],
      ['g', 'e', 'c'],
      ['g', 'h', 'i'],
      ['c', 'f', 'i'],
      ['b', 'e', 'h'],
    ];
    
    // repeat for each winning combination
    for (i = 0; i < winner.length; i++) {
      
      // checks the players move and if their is a winning combination
     
        if (
          

          document.getElementById(winner[i][0]).innerHTML == player && 
          document.getElementById(winner[i][1]).innerHTML == player && 
          document.getElementById(winner[i][2]).innerHTML == player
        ) {
          alert(player + ' won!');
      	 return true;
        }
      }
      return false;
    
  }
		
  		//Reset 
 	$('#reset-btn').on('click', function(e) {
 		e.preventDefault();
 		$('.box').text('');
 	});



});
