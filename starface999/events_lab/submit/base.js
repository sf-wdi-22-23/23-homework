
 $(document).ready(function() {
  $("#time").text( Date.now() );

  $("form").on("submit", function handleSubmit(event){
    event.preventDefault();
  });

});