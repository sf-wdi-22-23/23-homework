/* When the user hits spacebar, record their "start" time. 
When they hit it again, record their "end" time. 
Then, calculate the total time, and put it on the page.*/


console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	var $start;
	var $end;
	var $total;

	$('body').keyup(function(e){
   if($start) {
   	if(e.keyCode == 32){
   		$end = Date.now();	
   		$total = ($end - $start) / 1000;
   		$("#total-time").text($total);
   	}
   }
   else {
   	if(e.keyCode == 32){
   		$start = Date.now();
   	}
   }
	});
}); 