//Original code -- refactor me!
$(document).ready(function() {
    var game = new DieHandler();
    game.addListeners();

    // What does the next line do?
   
    
});


function Die () {
    this.currentSide = 1;

}


Die.prototype.roll = function() {
    this.currentSide = Math.floor((Math.random() * 6) + 1);
    
};


function DieHandler () {
    this.dice = [];
}

DieHandler.prototype.addListeners = function (){
    console.log("this is addListeners: ", this);

     $('#roller button.add').on('click', this.addDie.bind(this));
        console.log('add button was clicked');

     $('#roller button.roll').on('click', this.rollDice.bind(this));
        console.log('roll button was clicked');
       
};

DieHandler.prototype.addDie = function (){
    $('.dice-container').append('<div class="die">1</div>');
    this.dice.push(new Die());
};


DieHandler.prototype.rollDice = function() {
    for (var i = 0; i < this.dice.length; i++) {
        this.dice[i].roll();
    }

    for (var i = 0; i < this.dice.length; i++) {
        $('.die').eq(i).html(this.dice[i].currentSide);
    }
};

    
        // using jQuery's each method to loop through the die elements
        


