console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$(function() {
  		$('[data-toggle="tooltip"]').tooltip()
  });

	$('#formtest').on('submit', function(e) {
		e.preventDefault();
	});

	$('#post').on('click', function(e) {
		var newPost = $('#postInput').val();
		var newPostTime = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    var newPostID = $('.try').length + 1;
		$('#newposts').prepend('<div class="panel panel-info try" id="indPost' + newPostID + '"><div class="panel-heading tom" data-toggle="tooltip" data-placement="right" title="' + newPostTime + '"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/hprofile-xlt1/v/t1.0-1/p50x50/12046600_909903292431602_5085778016900831271_n.jpg?oh=1323bec46f1fbf63f33a1409164ceacc&amp;oe=568F6919">&nbsp&nbsp&nbsp&nbsp&nbsp&nbspIsom Durm<hr>' + newPost + '</div><div class="panel-body commentPlace" id=' + newPostID + '></div><div class="col-sm-12"><input type="text" placeholder="comment:" class="form-control" id="newComment' + newPostID + '"><br></div>&nbsp&nbsp&nbsp<button type="button" class="btn btn-default" id="submitComment">Comment</button>&nbsp&nbsp&nbsp<button type="button" class="btn btn-default" id="remove' + newPostID + '"><span class="glyphicon glyphicon-trash"></span></button><br></span><br></div><br>');
    console.log(newPostID);
    $('.tom').tooltip();
		$('#postInput').val("");
		var newPostTime = new Date();

    $('#submitComment').on('click', function() {
      var newComment = $('#newComment' + newPostID).val();
      var newPostTime = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
      $("#" + newPostID).append('<div class="well well-sm you" data-toggle="tooltip" data-placement="left" title="' + newPostTime + '"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/hprofile-xlt1/v/t1.0-1/p50x50/12046600_909903292431602_5085778016900831271_n.jpg?oh=1323bec46f1fbf63f33a1409164ceacc&amp;oe=568F6919" height="20" width="auto">Isom Durm: ' + newComment + '</div>');
      $('#newComment' + newPostID).val('');
      $('.you').tooltip();
    });

    $('#remove' + newPostID).on('click', function() {
      $('#indPost' + newPostID).remove();
    });
  });  


	// $('#postInput').keypress(function(e) {
	// 	if (e.which == 13) {
 //      var newPost = $('#postInput').val();
 //      var newPostTime = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
 //      var postCount = $('#newposts ul').length + 1;
 //      var newPostID = $('#newposts li').length + 1;
 //      $('#newposts').prepend('<ul class="list-group" id="indPost' + newPostID + '"><li class="list-group-item tom" data-toggle="tooltip" data-placement="right" title="' + newPostTime + '">' + newPost + '</li><p class="commentPlace" id=' + newPostID + '></p><input type="text" placeholder="comment:" class="form-control" id="newComment' + newPostID + '"><span class="input-group-btn"><button type="button" class="btn btn-default" id="submitComment">Comment</button><a class="btn btn-danger" href="#" id="remove' + newPostID + '">Delete</a></span></ul>');
 //      $('.tom').tooltip();
 //      $('#postInput').val("");
 //      $('#postCount').text(postCount);
 //      var newPostTime = new Date();

 //      $('#newComment' + newPostID).keypress(function(e) {
 //        if (e.which == 13) {
 //          var newComment = $('#newComment' + newPostID).val();
 //          var newPostTime = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
 //          $("#" + newPostID).append('<div class="list-group-item you" data-toggle="tooltip" data-placement="right" title="' + newPostTime + '">' + newComment + '</div>');
 //          $('#newComment' + newPostID).val('');
 //          $('.you').tooltip();
 //        };
 //      });
 //      $('#remove' + newPostID).on('click', function() {
 //        $('#indPost' + newPostID).remove();
 //        $('#postCount').text(postCount - 1);
 //      });
 //    };
 //  });  
});





