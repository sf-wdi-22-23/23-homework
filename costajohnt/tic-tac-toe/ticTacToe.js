$(document).ready(function(){
//we need a variable to decide who's turn it is
	var whoseTurn = "X";
//when we click on a box, it will enter the value of the variable whoseTurn.  If whoseTurn is 'O', we switch whoseTurn
//to 'X'.  If its not 'O', then we can return 'O'.
	$('.box').click(function(){
	  if ($(this).text() === ""){
		$(this).text(whoseTurn);
		if (whoseTurn === "O") {
			whoseTurn = "X";
		} else {
			whoseTurn = "O";
		}
	  }
	});
//the button below resets the board and empties out all of the boxes, it also logs great job in the console.
		$('button').click(function(e) {
		  $('.box').empty('slow');
	});
});

	// function winsRow {
	//   (('#case0').get(); = ('#case1').get(); = ('#case2')); 
	// }


// $('.box').click(function(){
// 	$(this).text(whoseTurn);
// });



// // wait for the DOM to finish loading
// var game = [null, null, null, null, null, null, null, null, null];
// var answers = [[case0, case1, case2], [case3, case4, case5], [case6, case7, case8], [case0, case4, case8], 
// 			   [case0, case3, case6], [case1, case4, case7], [case2, case5, case8], [case2, case4, case6]];




// $(document).ready(function() {
	
// 	$('button').click(function(e) {
// 		console.log("great job!");
// 		$('.box').empty('slow');
// 	});

// 	$('.box').click(function() {
// 		console.log("Clicking on the box works!!!");
// 	});	

// 		function turns() {
		
// 		$('.box').click(function(){
// 			$(this).html('X');
			
// 		});
// 	}
// turns();
 	
//  	// $('.box').val();
//  	// 	console.log('logvalue');
// });
//$(this).html('O');

//$( '.box' ).toggle(function() {
  //   		$( this ).addClass( "X" );
  //   		$( this ).removeClass( "0" );
  // });


// $( '.box' ).toggle(
//   function() {
//     $( this ).addClass( "X" );
//   }, function() {
//     $( this ).removeClass( "0" );
//   });


//for (t = 0; t < 8; t++);
		//if (t % 2 === 0);


// ticBoard = [case0, case1, case2
// 			 case3, case4, case5,
// 			 case6, case7, case8]

//IF we click the botton the value of #box resets or " ".
//We dont necessarily need it to be two player, we just need it to alternate between placing X and O values 
//into the box

//	if (this).html(" "); console.log("empty");


// $('button').click(function(e) {
// 	e.preventdefault();
// 	console.log("Works!");
// });
//$( "row" ).on( "click", notify );
//('row').on('click'(function))
//$( "row" ).on( "click", notify );
//console.log("works!");
//alert("I work!");

	// $('.box').click(function() {
	// 	console.log("thanks!");
	// });	