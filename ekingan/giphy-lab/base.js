console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $('#search').on('click', function(event) {

  	event.preventDefault();
  	$('#results').empty();
  	var gifSearch = $('#search-term').val();
  	$.get('http://api.giphy.com/v1/gifs/search?q=' + gifSearch + '&api_key=dc6zaTOxFJmzC', function(data){
  		console.log(data.data);

  		for (i in data.data) {
  			console.log(data.data[i]);
  			$('#results').append("<img src='" + data.data[i].images.fixed_height.url + "'/>");
  		}
  	});



  });

});
