$(document).ready(function(){
	console.log("Sanity Check: JS is working!");

	//defining the date
	var today = new Date();
	var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");
	var curr_date = today.getDate();
	var curr_month = today.getMonth();
	var curr_year = today.getFullYear();
	var date = (m_names[curr_month] + ". " + curr_date + ", " + curr_year);

	//defining and displaying post-count
	var count = $('li').length;
	$('#post-number').text(count);

	//displaying today's date
	$('#today').text(date);
	$('.datePosted').text('10.11.2015');

	//toggle tool-tip right featu
	$('[data-toggle="tooltip"]').tooltip();

	//submit new post
	$('#new-post-form').on('submit', function (e) {
		e.preventDefault();
		var postData = $(this).serialize();
		console.log('postData submitted');
		
		$.ajax({
			url: '/posts',
			type: "POST",
			data: postData
		})
		.done(function(data) {
			console.log("new post made", data);
			console.log(data.content);

			var postText = '<li class="list-group-item">' + data.content + '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' + '</li>';
			$('#blog-posts').prepend(postText);
			$('#new-post-form')[0].reset();
		})
		.fail(function(data) {
			alert("Failed to post");
		});
	});

	//delete post
	$('#blog-posts').on('click', '.glyphicon', function (e) {
		e.preventDefault();
		var postId = $(this).data().id;
		var deletedPost = $(this).closest('li');
		console.log('form deleted');

		$.ajax({
			url:'/posts/' + postId,
			type: "DELETE"
		})
		.done(function(data) {
			console.log(data);
			$(deletedPost).remove();
			console.log("post has been deleted");
		})
		.fail(function(data) {
			console.log("failed to delete post");

		});
	});
});