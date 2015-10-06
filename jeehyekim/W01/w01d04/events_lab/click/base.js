console.log("Sanity Check: JS is working!");

$(document).ready(function(){

$("span").click(function () {
    var clicked = $(this).html(); 
    $('ul').append('<li>'+clicked+'</li>');   
});

});
