 $(document).ready( function() {
            var f1;
            var f2;
            var f3;
            var f4;
            var f5;
            var f6;
            var f7;
            var f8;
            var f9;
            var count = 0;

            alert("WARNING: This game must be played in FULL SCREEN.")
            alert("Human. Choose first.")

            $('#field1').click( function() {
                if(f1 != "X" && f1 != "O") {
                    $(this).addClass('bg1');
                    f1 = "X";
                    count++;
                    checkVictory();
                    randomize();
                }
            });
            $('#field2').click( function() {
                if(f2 != "X" && f2 != "O") {
                    $(this).addClass('bg1');
                    f2 = "X";
                    count++;
                    checkVictory();
                    randomize();
                }
            });
            $('#field3').click( function() {
                if(f3 != "X" && f3 != "O") {
                    $(this).addClass('bg1');
                    f3 = "X";
                    count++;
                    checkVictory();
                    randomize();
                }
            });
            $('#field4').click( function() {
                if(f4 != "X" && f4 != "O") {
                    $(this).addClass('bg1');
                    f4 = "X";
                    count++;
                    checkVictory();
                    randomize();
                }
            });
            $('#field5').click( function() {
                if(f5 != "X" && f5 != "O") {
                    $(this).addClass('bg1');
                    f5 = "X";
                    count++;
                    checkVictory();
                    randomize();
                }
            });
            $('#field6').click( function() {
                if(f6 != "X" && f6 != "O") {
                    $(this).addClass('bg1');
                    f6 = "X";
                    count++;
                    checkVictory();
                    randomize();
                }
            });
            $('#field7').click( function() {
                if(f7 != "X" && f7 != "O") {
                    $(this).addClass('bg1');
                    f7 = "X";
                    count++;
                    checkVictory();
                    randomize();
                }
            });
            $('#field8').click( function() {
                if(f8 != "X" && f8 != "O") {
                    $(this).addClass('bg1');
                    f8 = "X";
                    count++;
                    checkVictory();
                    randomize();
                }
            });
            $('#field9').click( function() {
                if(f9 != "X" && f9 != "O") {
                    $(this).addClass('bg1');
                    f9 = "X";
                    count++;
                    checkVictory();
                    randomize();
                }
            });
            function checkVictory() {
                if(f1 == "X" && f2 == "X" && f3 == "X") {
                    victory();
                }
                if(f1 == "X" && f5 == "X" && f9 == "X") {
                    victory();
                }
                if(f3 == "X" && f5 == "X" && f7 == "X") {
                    victory();
                }
                if(f4 == "X" && f5 == "X" && f6 == "X") {
                    victory();
                }
                if(f7 == "X" && f8 == "X" && f9 == "X") {
                    victory();
                }
                if(f1 == "X" && f4 == "X" && f7 == "X") {
                    victory();
                }
                if(f2 == "X" && f5 == "X" && f8 == "X") {
                    victory();
                }
                if(f3 == "X" && f6 == "X" && f9 == "X") {
                    victory();
                }
                if(f1 == "O" && f2 == "O" && f3 == "O") {
                    defeat();
                }
                if(f1 == "O" && f5 == "O" && f9 == "O") {
                    victory();
                }
                if(f3 == "O" && f5 == "O" && f7 == "O") {
                    defeat();
                }
                if(f4 == "O" && f5 == "O" && f6 == "O") {
                    defeat();
                }
                if(f7 == "O" && f8 == "O" && f9 == "O") {
                    defeat();
                }
                if(f1 == "O" && f4 == "O" && f7 == "O") {
                    defeat();
                }
                if(f2 == "O" && f5 == "O" && f8 == "O") {
                    defeat();
                }
                if(f3 == "O" && f6 == "O" && f9 == "O") {
                    defeat();
                }
                if(count == 9) {
                    draw();
                }
            }
            function randomize() {
                alert("Turn O");
                var Found = false;
                while(Found != true) {
                    var Random = Math.floor(Math.random() * 9) + 1;
                    if(Random == 1 && f1 != "X" && f1 !="O") {
                        f1 = "O";
                        $('#field1').addClass('bg2');
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 2 && f2 != "X" && f2 !="O") {
                        f2 = "O";
                        $('#field2').addClass('bg2');
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 3 && f3 != "X" && f3 !="O") {
                        $('#field3').addClass('bg2');
                        f3 = "O";
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 4 && f4 != "X" && f4 !="O") {
                        f4 = "O";
                        $('#field4').addClass('bg2');
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 5 && f5 != "X" && f5 !="O") {
                        f5 = "O";
                        $('#field5').addClass('bg2');
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 6 && f6 != "X" && f6 !="O") {
                        f6 = "O";
                        $('#field6').addClass('bg2');
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 7 && f7 != "X" && f7 !="O") {
                        f7 = "O";
                        $('#field7').addClass('bg2');
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 8 && f8 != "X" && f8 !="O") {
                        f8 = "O";
                        $('#field8').addClass('bg2');
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 9 && f9 != "X" && f9 !="O") {
                        f9 = "O";
                        $('#field9').addClass('bg2');
                        count++;
                        checkVictory();
                        Found = true;
                    }
                }
                Found = false;
            }
            function reset() {
                f1 = 0;
                f2 = 0;
                f3 = 0;
                f4 = 0; 
                f5 = 0;
                f6 = 0;
                f7 = 0;
                f8 = 0;
                f9 = 0;
                $('#field1').removeClass('bg1').removeClass('bg2');
                $('#field2').removeClass('bg1').removeClass('bg2');
                $('#field3').removeClass('bg1').removeClass('bg2');
                $('#field4').removeClass('bg1').removeClass('bg2');
                $('#field5').removeClass('bg1').removeClass('bg2');
                $('#field6').removeClass('bg1').removeClass('bg2');
                $('#field7').removeClass('bg1').removeClass('bg2');
                $('#field8').removeClass('bg1').removeClass('bg2');
                $('#field9').removeClass('bg1').removeClass('bg2');
                count = 0;
            }
            function draw() {
                alert('It is a draw!');
                reset();
            }
            function victory() {
                alert('You win!');
                reset();
            }
            function defeat() {
                alert("You lost! Better luck next time!");
                reset();
            }
        });