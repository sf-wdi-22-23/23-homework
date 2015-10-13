// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  //console.log("js works.");
  



  //if already filled dont mark there
  //if not put down the next piece and switch to the other's turn
  $('.box').click(function(e) {
  	if ((($(this).text().toString()).length)>0) {
  		//console.log('Already On Fires');
  		e.preventDefault();
  	} else {

  	if ($('h2').hasClass("Xturn")) {
		$(this).html("X");
	} else if ($('h2').hasClass("Oturn")) {
		$(this).html("O");
	} 

  	if ($('h2').hasClass("Oturn")) {
  		$('h2').removeClass("Oturn");
  		$('h2').addClass("Xturn");
  		$('h2').html("Player X: It's Your Turn...");
  	} else if ($('h2').hasClass("Xturn")) {
  		$('h2').removeClass("Xturn");
  		$('h2').addClass("Oturn");
  		$('h2').html("Player O: It's Your Turn...");
  	} //else {
  		//$('h2').addClass("Oturn");
  		//$('h2').html("Player O: It's Your Turn...")
  	//}
  	}
	 
 });

//function freezeBoard() {
//	$('.box').click(function(e) {
//		e.preventDefault();
//	}
//);}

function winnerX() {
	alert("X Wins!");
	
}

function winnerO() {
	alert("O Wins!");
}

//win alert when a winner is found


 $('.box').click(function() {

 	
 	//var winCombos = 
 		//("#a"&&"#b"&&"#c")||
 		//("#d"&&"#e"&&"#f")||
 		//("#g"&&"#h"&&"#i")||
 		//("#a"&&"#d"&&"#g")||
 		//("#b"&&"#e"&&"#h")||
 		//("#c"&&"#f"&&"#i")||
 		//("#a"&&"#c"&&"#i")||
 		//("#c"&&"#e"&&"#g");
 	// dont do anything if already marked.
 	var $rowTopX = ($("#a").text()==='X')&&($("#b").text()==='X')&&($("#c").text()==='X');
 	var $rowMidX = ($("#d").text()==='X')&&($("#e").text()==='X')&&($("#f").text()==='X');
 	var $rowLowX = ($("#g").text()==='X')&&($("#h").text()==='X')&&($("#i").text()==='X');
 	var $colOneX = ($("#a").text()==='X')&&($("#d").text()==='X')&&($("#g").text()==='X');
 	var $colTwoX = ($("#b").text()==='X')&&($("#e").text()==='X')&&($("#h").text()==='X');
 	var $colThrX = ($("#c").text()==='X')&&($("#f").text()==='X')&&($("#i").text()==='X');
 	var $diagOneX = ($("#a").text()==='X')&&($("#e").text()==='X')&&($("#i").text()==='X');
 	var $diagTwoX = ($("#c").text()==='X')&&($("#e").text()==='X')&&($("#g").text()==='X');

 	var $rowTopO = ($("#a").text()==='O')&&($("#b").text()==='O')&&($("#c").text()==='O');
 	var $rowMidO = ($("#d").text()==='O')&&($("#e").text()==='O')&&($("#f").text()==='O');
 	var $rowLowO = ($("#g").text()==='O')&&($("#h").text()==='O')&&($("#i").text()==='O');
 	var $colOneO = ($("#a").text()==='O')&&($("#d").text()==='O')&&($("#g").text()==='O');
 	var $colTwoO = ($("#b").text()==='O')&&($("#e").text()==='O')&&($("#h").text()==='O');
 	var $colThrO = ($("#c").text()==='O')&&($("#f").text()==='O')&&($("#i").text()==='O');
 	var $diagOneO = ($("#a").text()==='O')&&($("#e").text()==='O')&&($("#i").text()==='O');
 	var $diagTwoO = ($("#c").text()==='O')&&($("#e").text()==='O')&&($("#g").text()==='O');


 	// X win alert
 	if (($rowTopX)||($rowMidX)||($rowLowX)||($colOneX)||($colTwoX)||($colThrX)||($diagOneX)||($diagTwoX)) {
 		winnerX();
 	}

 	if (($rowTopO)||($rowMidO)||($rowLowO)||($colOneO)||($colTwoO)||($colThrO)||($diagOneO)||($diagTwoO)) {
 		winnerO();
 	}
 });

//reset button
 $('.reset-btn').click(function() {
  	//console.log("reset");
  	// resets the board to all blank, resets the next move to X 
  	$('.box').html("");
  	$('h2').html("Player X: It's Your Turn...");
  	$('h2').removeClass("Xturn");
	$('h2').removeClass("Oturn");
  	$('h2').addClass("Xturn");
 });

	//var endgameX = function() {
	//	consle.log("X Wins");
	//};
}

// if any line is x go to endgameX function, if O, go to endgameO function
  //if ($(".box").text()==='X') {
  	//console.log("XXX wins");
  	//endgameX();
  );

//console.log('testing out outside of function');


