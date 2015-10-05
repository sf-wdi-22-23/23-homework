console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

$("#left").change(function(){
    var leftShark = $("#left").val();
    console.log(leftShark); 
        $("#right").change(function(){
            var rightShark = $("#right").val();
            console.log(rightShark);
            var katie = (parseInt(leftShark) + parseInt(rightShark));
            console.log(katie);

        	$("#total").val(katie);

    	});   
});

});
