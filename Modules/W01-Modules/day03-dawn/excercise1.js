/* 
How would you fix "1 bottles of beer"?
How would you change "0" to "No more"?
Use a JavaScript prompt to ask the user how many verses they want to hear.
*/



var bottles = prompt("How many verses you wanna hear??");

while(bottles>=0) {
	if (bottles > 1) {
		console.log( bottles + " bottles of beer on the wall,\n" + bottles + " bottles of beer!\n" + "Take one down and pass it around\n" + (bottles-1) + " bottles of beer on the wall!\n");
	} else if (bottles == 1) {
		console.log(bottles + " bottle of beer on the wall,\n" + bottles + " bottle of beer!\n" + "Take one down and pass it around\n" + (bottles-1) + " bottles of beer on the wall!\n");
	} else {
		console.log("No more!");
	} bottles-- ;
}