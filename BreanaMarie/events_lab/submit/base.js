console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $("input").on('click', function(event){
    event.preventDefault();
});

});
