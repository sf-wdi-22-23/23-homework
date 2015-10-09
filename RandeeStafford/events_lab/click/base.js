console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("span").on("click", function(){
    var li = $(<li />);
    li.html( $(this.html() ) );
    $("ul").append(li);
  });

});
