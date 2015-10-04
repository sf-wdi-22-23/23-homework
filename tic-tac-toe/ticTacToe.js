$(document).ready(function(){

	var clicks=0;
	var g0;
	var g1;
	var g2;
	var g3;
	var g4;
	var g5;
	var g6;
	var g7;
	var g8;
	var gameBoard;
	var winRegister1;
	var winRegister2;
	var winRegister3;
	var winRegister4;
	var winRegister5;
	var winRegister6;
	var winRegister7;
	var winRegister8;

	function switchTurn(){
		clicks++;
	}

	function changeVariables() {
		gameBoard=g0+g1+g2+g3+g4+g5+g6+g7+g8;
		winRegister1 = (g0+g1+g2);
		winRegister2 = (g3+g4+g5);
		winRegister3 = (g6+g7+g8);
		winRegister4 = (g0+g3+g6);
		winRegister5 = (g1+g4+g7);
		winRegister6 = (g2+g5+g8);
		winRegister7 = (g0+g4+g8);
		winRegister8 = (g6+g4+g2);
	}

	function takeTurn(){
		$("#1a").click(function() {
			console.log("clicked");
			if (clicks % 2 === 0) {
				console.log("on x, player clicked 1a");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/2bE7s34.png"></div>');
				switchTurn();
				g0='x';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
			else {
				console.log("on o, player clicked 1a");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/sPNtne0.png"></div>');
				switchTurn();
				g0='o';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
		});
		$("#1b").click(function() {
			console.log("clicked");
			if (clicks % 2 === 0) {
				console.log("on x, player clicked 1");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/2bE7s34.png"></div>');
				switchTurn();
				g1='x';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
			else {
				console.log("on o, player clicked 1");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/sPNtne0.png"></div>');
				switchTurn();
				g1='o';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
		});
		$("#1c").click(function() {
			console.log("clicked");
			if (clicks % 2 === 0) {
				console.log("on x, player clicked 2");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/2bE7s34.png"></div>');
				switchTurn();
				g2='x';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
			else {
				console.log("on o, player clicked 2");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/sPNtne0.png"></div>');
				switchTurn();
				g2='o';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
		});
		$("#2a").click(function() {
			console.log("clicked");
			if (clicks % 2 === 0) {
				console.log("on x, player clicked 3");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/2bE7s34.png"></div>');
				switchTurn();
				g3='x';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
			else {
				console.log("on o, player clicked 3");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/sPNtne0.png"></div>');
				switchTurn();
				g3='o';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
		});
		$("#2b").click(function() {
			console.log("clicked");
			if (clicks % 2 === 0) {
				console.log("on x, player clicked 4");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/2bE7s34.png"></div>');
				switchTurn();
				g4='x';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
			else {
				console.log("on o, player clicked 4");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/sPNtne0.png"></div>');
				switchTurn();
				g4='o';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
		});
		$("#2c").click(function() {
			console.log("clicked");
			if (clicks % 2 === 0) {
				console.log("on x, player clicked 5");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/2bE7s34.png"></div>');
				switchTurn();
				g5='x';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
			else {
				console.log("on o, player clicked 5");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/sPNtne0.png"></div>');
				switchTurn();
				g5='o';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
		});
		$("#3a").click(function() {
			console.log("clicked");
			if (clicks % 2 === 0) {
				console.log("on x, player clicked 6");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/2bE7s34.png"></div>');
				switchTurn();
				g6='x';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
			else {
				console.log("on o, player clicked 6");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/sPNtne0.png"></div>');
				switchTurn();
				g6='o';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
		});
		$("#3b").click(function() {
			console.log("clicked");
			if (clicks % 2 === 0) {
				console.log("on x, player clicked 7");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/2bE7s34.png"></div>');
				switchTurn();
				g7='x';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
			else {
				console.log("on o, player clicked 7");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/sPNtne0.png"></div>');
				switchTurn();
				g7='o';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
		});
		$("#3c").click(function() {
			console.log("clicked");
			if (clicks % 2 === 0) {
				console.log("on x, player clicked 8");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/2bE7s34.png"></div>');
				switchTurn();
				g8='x';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
			else {
				console.log("on o, player clicked 8");
				$(this).replaceWith('<div class="content" id="1a"><div><img src="http://i.imgur.com/sPNtne0.png"></div>');
				switchTurn();
				g8='o';
				console.log(gameBoard);
				changeVariables();
				checkForWins();
				catsGame();
			}
		});
	}

		function checkForWins(){
			if (winRegister1==="xxx" || winRegister2==="xxx" || winRegister3==="xxx" || winRegister4==="xxx" || winRegister5==="xxx" || winRegister6==="xxx" || winRegister7==="xxx" |winRegister8==="xxx") {
				$("#refresh-page").remove();
				$("body").prepend('<video autoplay  poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" loop><source src="http://i.imgur.com/yvNte5e.mp4" type="video/mp4"></video>');
				$("#board").replaceWith('<div class="container-fluid"><div id="xwins"><img src="http://i.imgur.com/SHoF2pT.png"><a href="index.html" name="refresh-page" class="refresh-page" id="refresh-page"><img src="http://i.imgur.com/fPXbVJZ.png"></a></div><div class="container"><div class="row text-center"><div class="col-md-12"></div>');
			}
			else if (winRegister1==="ooo" || winRegister2==="ooo" || winRegister3==="ooo" || winRegister4==="ooo" || winRegister5==="ooo" || winRegister6==="ooo" || winRegister7==="ooo" || winRegister8==="ooo") {
				$("#refresh-page").remove();
				$("body").prepend('<video autoplay  poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" loop><source src="http://i.imgur.com/yvNte5e.mp4" type="video/mp4"></video>');
				$("#board").replaceWith('<div class="container-fluid"><div id="xwins"><img src="http://i.imgur.com/hheOKve.png"><a href="index.html" name="refresh-page" class="refresh-page" id="refresh-page"><img src="http://i.imgur.com/fPXbVJZ.png"></a></div><div class="container"><div class="row text-center"><div class="col-md-12"></div>');
			}
			return;
	}


		function catsGame(){
			if (clicks===9 && winRegister1!=="ooo" && winRegister1!=="xxx" && winRegister2!=="ooo" && winRegister2!=="xxx" && winRegister3!=="ooo" && winRegister3!=="xxx" && winRegister4!=="ooo" && winRegister4!=="xxx" && winRegister5!=="ooo" && winRegister5!=="xxx" && winRegister6!=="ooo" && winRegister6!=="xxx" && winRegister7!=="ooo" && winRegister7!=="xxx" && winRegister8!=="ooo" && winRegister8!=="xxx" ) {
				$("#refresh-page").remove();
				$("#board").replaceWith('<div class="container-fluid"><div id="xwins"><img src="http://i.imgur.com/ohRu7OW.png"><a href="index.html" name="refresh-page" class="refresh-page" id="refresh-page"><img src="http://i.imgur.com/fPXbVJZ.png"></a></div><div class="container"><div class="row text-center"><div class="col-md-12"></div>');
			}
			return;
		}

	takeTurn();



});