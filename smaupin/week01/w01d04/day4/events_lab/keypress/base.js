console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$(document).keypress(function(e) {
		if ((e.keyCode == 32) && ($('h2').hasClass("started"))) {
			//var time2 = Date.now();
			//console.log(time2);
			$('h2').removeClass("started");	
			//console.log(time2.val()-time1.val());	
			//var time4 = console.timeEnd("boo");
			//var totes = boo.value();
			//console.log(totes);
			var end = new Date();
			console.log(end);
			console.log(start);
			var elapsed = Math.abs(end-start);
			console.log(elapsed);
			$('#total-time').text(elapsed);
			return;	
		} else if (e.keyCode == 32) {
			$('h2').addClass("started");
			//var time1 = Date.now();
			//console.log(time1);
			//var time3 = console.time("boo");
			var start = new Date();
			console.log(start);
		}

	});

});
