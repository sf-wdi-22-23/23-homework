console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $("form").submit(function(e) {
  	e.preventDefault();
 		$("body").append('<iframe width="420" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>');
	});
});

/** Why does one button reload the same page and the other 
redirect?
	- Because the top button is just a form, whereas the bottom 
	button has an action

	What is the "?" doing in the URL? Try removing it.
	- I am not 100% sure, but the best answer I can find, and it
	makes sense, is that If the url has a question mark, 
	it’s usually considered dynamic; no question mark in 
	the url often implies a static url.
*/