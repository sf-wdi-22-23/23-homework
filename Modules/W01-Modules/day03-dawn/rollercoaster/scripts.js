var tokens = 3; // Jimmy's tokens
var height = 4;
var age = 11;
var adult = false;
var boss = false;
var pass = false;

// Can he ride?
if (((tokens >= 5 || pass) && height >= 4 && (age >= 12 || adult)) || boss) {
    console.log("Step right up!");
} else {
    console.log("Sorry, you can't ride");
}
