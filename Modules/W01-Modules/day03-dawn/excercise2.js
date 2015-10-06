//create userLogin object and another for password
//write prompt to user for password customized to user.
//check whether password logged and entered match
//

var userLogin = purple;
var userPassword = unicorn;


var loginRequest = prompt("Please enter your user login.");

if (loginRequest = userLogin) {
	var loginPassword = prompt("Enter password for user " + userLogin);
} else if (loginRequest !== userLogin) {

}

for (i=0;i<4;i++)
	if (loginPassword != userPassword) {
	prompt("The password entered is wrong. Please reenter");
	} else {
		console.log("Thank you for entering your password.");
	}



/*function checkTime() {
	var time;
	if (time === 0800) {
		wake up;
	} else {
		snooze;
	}
}

function getReadyForWork() {
	checkTime();
	makeBed();
	brushTeeth();
	washFace();
	getDressed();
	eatBreakfast();
	driveToWork();
}
*/