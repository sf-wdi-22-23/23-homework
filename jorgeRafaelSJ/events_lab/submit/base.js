console.log("Sanity Check: JS is working!");
 $("#time").text( Date.now() );
$(document).ready(function(){
$('form').submit(function(e){
	e.preventDefault();
	}); 
});