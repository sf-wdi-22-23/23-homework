//challenge 1

/* function sayHello() {
	console.log("Hello");
}

sayHello();
*/



//challenge2
/*function sayHello(name) {
	console.log("Hello " + name);

}
sayHello("Bob");

*/



//challenge 3

/*function multiply(a,b) {
	console.log (a*b);
}

multiply(5,7);
*/



//challenge4

/*function negative(n) {
	if (n >0) {
		console.log(0 - n);
	}
}
negative(14);
*/



//challenge 5

/*function evenOrOdd(n) {
	n%2===0 ? console.log("true") : console.log("false");
}

evenOrOdd(6);
*/




//challenge6

/*
function getRandom (a,b) {
	console.log(Math.floor((Math.random() * (b-a)) + a));
}

getRandom(3,12);
*/



//challenge 7
/* 
function randArr(n) {
	var newArray = [];
	
	for(i=0; i<= n; i++) {
		newArray.push(Math.floor(Math.random() * (100-1) + 1));
	} return newArray;
}

console.log(randArr(5));
*/



//challenge 8
function swap(array,a,b) {
	var initialA = array[a];
	array[a]=array[b];
	array[b]=initialA;
	return array;
}
console.log(swap(["moe", "larry", "curly"], 0, 2));







