$(document).ready(function () {

	function strikeThrough(el) {
		//el.wrap('<strike>');
		el.toggleClass('striked-through');
		//move to bottom
		if (el.hasClass('striked-through')){
			el.parent().append(el);
			
		//move to top
		} else {
			el.parent().prepend(el);
		}

		}
	
	$('.list-group-item').on('click', function () {
			strikeThrough($(this));
		});	
		
	$('#new-todo-form').submit(function(event) {
		event.preventDefault();
		if ($('#todo-content').val().trim().length > 0) {

		console.log('you submitted a form');
		var todoContent = $('#todo-content').val();
		console.log(todoContent);
		var newTodo = '<li class="list-group-item">' + todoContent + '</li>';
		$('#todos').append(newTodo);
		$('#todo-content').val('');
	}
			
	});
});