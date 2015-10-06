
//Closure 1

// var closeCall= function(firstNum) {
// 	var secondNum = 3;
// 	var addSum = function(secondNum) {
// 		return firstNum + secondNum;
// 	};
// 	return addSum(secondNum);
// };


//Closure 2

// var animal = function () {

// 	return {
// 		"name" : "dog", 
// 		"age": 3, 
// 		"gender": "female", 
// 		speak: function(words) { 
// 			console.log("hello " + words);
// 		},
// 		doSomething: function(placeholder) {
// 			console.log(placeholder + "I like to dig holes!");
// 		}
// 	};
// };

// var brasky = new animal();
// brasky.speak("I'm a puppy!");
// brasky.doSomething("On Sundays ");


//Closure 3

var Car = {};
Car.brand = "Toyota";
Car.year = "2002";
Car.horsepower = 350;
Car.color = "white";
Car.speed = "60 mph";
Car.trunk = [{"first aid kits" : 1}, {"jackets": 2}, {"water bottles": 10}];
Car.accident = function() {
	var trunk = this.trunk;
	for(var i = 0; i < trunk.length; i++) {
		for(var key in trunk[i]) {
			console.log("I have " + trunk[i][key] + " " + key + " in my trunk.");
		}
	}
};




