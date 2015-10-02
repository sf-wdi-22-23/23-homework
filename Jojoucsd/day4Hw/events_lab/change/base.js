console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$("#time").text( Date.now() );

	$("input.add").on("change", function(e){

		var leftField = parseInt($('input#left').val());
		var rightField = parseInt($("input#right").val());
		var total = leftField + rightField;
		$("#total").val(total);
		if (total > 0) {
			$('input').on('click',function(e){
				var reset= $('<input type="button" value="reset" id="reset"/>')
				$('body').append(reset)
				$("input#left").val("")
				$('input#right').val("")
				$('#total').val("")
			})	
		}
	})
})


