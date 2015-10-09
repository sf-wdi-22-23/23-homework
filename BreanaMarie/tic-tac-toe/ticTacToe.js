console.log ("connected");
// wait for the DOM to finish loading
$(document).ready(function(){
  // all code to manipulate the DOM
  // goes inside this function



var round='';
var i=0;

//turn counter x = even o = odd 
//declare draw
function turn(blah){
	if ( i < 9){
		//changeSpace();
		if (i%2 ===0){
			console.log("WDI 23's turn");
			round ='WDI 23';
		}
		else if (i%2 !==0){
			console.log("Space Jammer's turn");
			round ='Space Jammer';
		}
	}
	else if (i==10){
		alert("Game is a Draw! There are no more space to play.");
		resetSpaces();
	}
}

//state Who's turn it is

$("div.box").on('click', function() {
	var text = round;
	var who = "It is " + text + "s Turn";
    $("p").html(who);
});

//$("#turnEdit").html("It is " + round +"'s Turn");

//check if box is free or has been played
function changeSpace(selectedSpace){
	turn();
	$('div.box').children().on('click', function(){
		console.log($(this).text()+ " has been clicked");
		selectedSpace = $(this);
		console.log(selectedSpace);

		//if freeSpace
		if (selectedSpace.hasClass('freeSpace')){
			console.log("the space is free");

			//check turn
			if (round ==='WDI 23'){
				console.log("WDI 23 just went");
				//change space to played
			    if(selectedSpace.hasClass('freeSpace')) { 
			        selectedSpace.removeClass('freeSpace');
			        selectedSpace.addClass('playedSpaceX');
			        //check if play won
			        winSpaces();
			        console.log (i);
			        i ++;
			        turn();
		    	}	
			}
		    else if (round === 'Space Jammer'){
		    	console.log("Space Jammer just went");
		    	if(selectedSpace.hasClass('freeSpace')) { 
			        selectedSpace.removeClass('freeSpace');
			        selectedSpace.addClass('playedSpaceO');
			        
			        winSpaces();
			        console.log(i);
			        i ++;
			        turn();
		    	} 
		    }
		}
		//if already playedSpace*
		else if (selectedSpace.hasClass('playedSpaceX' || 'playedSpaceO')){
			alert("this spot has already been played");
			changeSpace();
		}	
	});
}
changeSpace();

//create a reset button
var resetSpaces =function(){
	console.log("board has been reset");
	$('div[name="space"]').removeClass('playedSpaceX');
	$('div[name="space"]').removeClass('playedSpaceO');
	$('div[name="space"]').removeClass('winnerSpace');
	$('div[name="space"]').addClass('freeSpace');
	round='WDI 23';
	i=0;
	$("p").html("The Game Begins with WDI 23");
};

//listen for reset button to be clicked
$(".buttonReset").on('click', function(){
	resetSpaces();
});



//returns which way was used to win
var winSpaces = function(){
	return (acrossTop() || acrossMid() || acrossBot()|| diagLeft() || diagRight() || downFirst() || downMid() || downLast());
};

//check three in a row change background color to show win
//list ways to win
//declare winner and reset
var acrossTop= function($box1, $box2, $box3){
	var space1 = $('#box1').attr("class");
	var space2 = $('#box2').attr("class");
	var space3 = $('#box3').attr("class");

	if ((space1 === space2) && (space2 === space3)){
		if (space1 === 'playedSpaceX'){
			console.log ('X has won');
			$('#box1').addClass('winnerSpace');
			$('#box2').addClass('winnerSpace');
			$('#box3').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return acrossTop;
		}
		else if (space1 === 'playedSpaceO'){
			console.log ('O has won');
			$('#box1').addClass('winnerSpace');
			$('#box2').addClass('winnerSpace');
			$('#box3').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return acrossTop;
		}	
		else{
			return null;
		}
	}
};

var acrossMid= function($box4, $box5, $box6){
	var space4 = $('#box4').attr("class");
	var space5 = $('#box5').attr("class");
	var space6 = $('#box6').attr("class");

	if ((space4 === space5) && (space5 === space6)){
		if (space4 === 'playedSpaceX'){
			console.log ('X has won');
			$('#box4').addClass('winnerSpace');
			$('#box5').addClass('winnerSpace');
			$('#box6').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return acrossMid;
		}
		else if (space4 === 'playedSpaceO'){
			console.log ('O has won');
			$('#box4').addClass('winnerSpace');
			$('#box5').addClass('winnerSpace');
			$('#box6').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return acrossMid;
		}
		else{
			return null;
		}
	}	
};

var acrossBot= function($box7, $box8, $box9){
	var space7 = $('#box7').attr("class");
	var space8 = $('#box8').attr("class");
	var space9 = $('#box9').attr("class");

	if ((space7 === space8) && (space8 === space9)){
		if (space7 === 'playedSpaceX'){
			console.log ('X has won');
			$('#box7').addClass('winnerSpace');
			$('#box8').addClass('winnerSpace');
			$('#box9').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return acrossBot;
		}
		else if (space7 === 'playedSpaceO'){
			console.log ('O has won');
			$('#box7').addClass('winnerSpace');
			$('#box8').addClass('winnerSpace');
			$('#box9').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return acrossBot;
		}
		else{
			return null;
		}
	}
		
};

var diagLeft= function($box1, $box5, $box9){
	var space1 = $('#box1').attr("class");
	var space5 = $('#box5').attr("class");
	var space9 = $('#box9').attr("class");

	if ((space1 === space5) && (space5 === space9)){
		if (space1 === 'playedSpaceX'){
			console.log ('X has won');
			$('#box1').addClass('winnerSpace');
			$('#box5').addClass('winnerSpace');
			$('#box9').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return diagLeft;
		}
		else if (space1 === 'playedSpaceO'){
			console.log ('O has won');
			$('#box1').addClass('winnerSpace');
			$('#box5').addClass('winnerSpace');
			$('#box9').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return diagLeft;
		}
		else{
			return null;
		}
	}	
};

var diagRight= function($box3, $box5, $box7){
	var space3 = $('#box3').attr("class");
	var space5 = $('#box5').attr("class");
	var space7 = $('#box7').attr("class");

	if ((space3 === space5) && (space5 === space7)){
		if (space3 === 'playedSpaceX'){
			console.log ('X has won');
			$('#box3').addClass('winnerSpace');
			$('#box5').addClass('winnerSpace');
			$('#box7').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return diagRight;
		}
		else if (space3 === 'playedSpaceO'){
			console.log ('O has won');
			$('#box3').addClass('winnerSpace');
			$('#box5').addClass('winnerSpace');
			$('#box7').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return diagRight;
		}
		else{
			return null;
		}
	}	
};

var downFirst= function($box1, $box4, $box7){
	var space1 = $('#box1').attr("class");
	var space4 = $('#box4').attr("class");
	var space7 = $('#box7').attr("class");

	if ((space1 === space4) && (space4 === space7)){
		if (space1 === 'playedSpaceX'){
			console.log ('X has won');
			$('#box1').addClass('winnerSpace');
			$('#box4').addClass('winnerSpace');
			$('#box7').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return downFirst;
		}
		else if (space1 === 'playedSpaceO'){
			console.log ('O has won');
			$('#box1').addClass('winnerSpace');
			$('#box4').addClass('winnerSpace');
			$('#box7').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return downFirst;
		}
		else{
			return null;
		}
	}	
};
 
var downMid= function($box2, $box5, $box8){
	var space2 = $('#box2').attr("class");
	var space5 = $('#box5').attr("class");
	var space8 = $('#box8').attr("class");

	if ((space2 === space5) && (space5 === space8)){
		if (space2 === 'playedSpaceX'){
			console.log ('X has won');
			$('#box2').addClass('winnerSpace');
			$('#box5').addClass('winnerSpace');
			$('#box8').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return downMid;
		}
		else if (space2 === 'playedSpaceO'){
			console.log ('O has won');
			$('#box2').addClass('winnerSpace');
			$('#box5').addClass('winnerSpace');
			$('#box8').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return downMid;
		}
		else{
			return null;
		}
	}	
};

var downLast= function($box3, $box6, $box9){
	var space3 = $('#box3').attr("class");
	var space6 = $('#box6').attr("class");
	var space9 = $('#box9').attr("class");

	if ((space3 === space6) && (space6 === space9)){
		if (space3 === 'playedSpaceX'){
			console.log ('X has won');
			$('#box3').addClass('winnerSpace');
			$('#box6').addClass('winnerSpace');
			$('#box9').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return downLast;
		}
		else if (space3 === 'playedSpaceO'){
			console.log ('O has won');
			$('#box3').addClass('winnerSpace');
			$('#box6').addClass('winnerSpace');
			$('#box9').addClass('winnerSpace');
			alert(round + " Has Won");
			resetSpaces();
			return downLast;
		}
		else{
			return null;
		}
	}
};


});




/*
create three containers in each <div> 
create a listen for a click on each new container
on click change from blank to an x or o
rotate from x to o
take away the ability to change the move
play till 3 in a row
if statement x||o draw a line in proper boxes switch statement?
declare winner 

/*
	$('div.box').children().on('click', function() { 
		turn();
		console.log($(this).text()+ "has been clicked");
		if (turn == x){
		    if($(this).hasClass('freeSpace')) { 
		        $(this).removeClass('freeSpace');
		        $(this).addClass('playedSpaceX');
		        turn ++;
	    	} 
	    	else { 
		        $(this).hasClass('playedSpaceX'||'playedSpaceO');
		        alert("this spot has already been played");
		        changeSpace();
	    	}
	    }
	    else if (turn == o){
	    	if($(this).hasClass('freeSpace')) { 
		        $(this).removeClass('freeSpace');
		        $(this).addClass('playedSpaceO');
		        turn ++;
	    	} 
	    	else { 
		        $(this).hasClass('playedSpaceX'||'playedSpaceO');
		        alert("this spot has already been played");
		        changeSpace();
	    	}
	    }
	});
if (($('#box1').hasClass('playedSpaceX')) === ($('#box2').hasClass('playedSpaceX')) == ($('#box3').hasClass('playedSpaceX'))){

  	$("acrossTop").addClass("winnerSpace");
  	console.log(round + " is the winner!!!");
  }
  else if (($('#box4').hasClass('playedSpaceX')) === ($('#box5').hasClass('playedSpaceX')) == ($('#box6').hasClass('playedSpaceX'))){
  	var acrossMid= $("#box4", "#box5", "#box6");
  	acrossMid.addClass("winnerSpace");
  	console.log(round + " is the winner!!!");
  }
  else if (($('#box7').hasClass('playedSpaceX')) === ($('#box8').hasClass('playedSpaceX')) == ($('#box9').hasClass('playedSpaceX'))){
  	var acrossBot= $("#box7", "#box8", "#box9");
  	acrossBot.addClass("winnerSpace");
  	console.log(round + " is the winner!!!");
  }
  else if (($('#box1').hasClass('playedSpaceX')) === ($('#box5').hasClass('playedSpaceX')) == ($('#box9').hasClass('playedSpaceX'))){
  	var diagLeft= $("#box1", "#box5", "#box9");
  	diagLeft.addClass("winnerSpace");
  	console.log(round + " is the winner!!!");
  }
  else if (($('#box3').hasClass('playedSpaceX')) === ($('#box5').hasClass('playedSpaceX')) == ($('#box7').hasClass('playedSpaceX'))){
  	var diagRight= $("#box3", "#box5", "#box7");
  	diagRight.addClass("winnerSpace");
  	console.log(round + " is the winner!!!");
  }
  else if (i==9){
  	console.log("There is no winner, game is a draw");
  }
  else{
  	console.log('no winner yet');
  }

  $('div[name="space"]').bind('contentchanged', function(){
  	if ($this=='winnerSpace'){
  		alert(round + " Has Won");
  		resetSpaces();
  		}
  });

 //var space = $('div.box').children().on('click', function() { 
//				console.log($(this).text()+ "has been clicked");
//			});

//declare winner and stop game if win happens or draw if no winner
/*function checkWin(winSpaces){
	if (winSpaces === null ){
		alert(round + " Has Won");
		resetSpaces();
	}
	else if (i===9){
		alert("no more moves, game is a draw");
		resetSpaces();
	}
}
*/

