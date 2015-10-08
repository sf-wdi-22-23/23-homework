console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$("#time").text( Date.now() );

	var emb = "<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ' allowfullscreen></iframe>";
	$(document).ready(function(){
		$("#time").text(Date.now());
		$('input').click(function(e){
			e.preventDefault();
			$('body').append(emb)    
		})
	})


})
