console.log("Sanity Check: JS is working!");

$(document).ready(function() {
	
  // code in here
  $('.searchMovies').on("click", function(event){
  		event.preventDefault();
  		var movieTitle = $('#movieTitle').val();
			var movieYear = $('#movieYear').val();
  		
  		var plot = $.get("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&r=json", function(response_data){
    		console.log("I'm back! Here's your data:");
    		console.log(response_data.Plot);
    		$('.movieResults').append(response_data.Plot);
    		$('.movieResults').append(response_data.Title);
			});
  	
  });
  
});

