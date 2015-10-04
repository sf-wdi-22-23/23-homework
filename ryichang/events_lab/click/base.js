console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	  $("span").on("click", function handleClick(event){
    var itemText = "You Clicked: " + $(this).text() + " at " + Date.now();
    $("ul").append("<li>" + itemText + "</li>");
  });
	//$("#imperatives").click(function(){
		//var item = $(this).text();
		    //$("ul").append("<li> + item + </li>");
	//});
});

//#imperatives ID tag
//Span class 