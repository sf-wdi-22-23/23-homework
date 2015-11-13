console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	// an array to catch posts.
	var allPosts = [];


	//a generic post object
	var mPost = function(postText, postDateTime) {
		this.postText = postText;
		this.postDateTime = postDateTime;
		this.likedStatus = 'unliked';
		this.deleteThis = 'no';
		
	};


//function to add the input text to the html
	var displayPost = function() {
		// var newDiv = document.createElement("div");
		// 	newDiv.className = "m-post";
		// var newPPost = document.createElement("p");
		// 	newPPost.className = "post-text";
		// var newPDate = document.createElement("p");
		// 	newPDate.className = "post-date-time";
		// var newPostText = document.createTextNode(postText);
		// 	newPPost.appendChild(newPostText);
		// var newPostDate = document.createTextNode(postDateTime);
		// 	newPDate.appendChild(newPostDate);

		// 	newDiv.appendChild(newPPost); 
		// 	newDiv.appendChild(newPDate);

		// var bottomDiv = document.getElementById("bottom-div");
		// 	bottomDiv.insertBefore(newDiv, bottomDiv.childNodes[0]);

	};
//resets the input field to the original state.
	var resetInput = function() {
		document.getElementById("m-post-input").value = '';
	};

	$('#post-form').submit(function(e) {

	  
		e.preventDefault();
		var postText = document.getElementById("m-post-input").value;
		var postDateTime = new Date();
		//console.log(postText);
		//console.log(postDateTime);

		//function to make a new post object
		var makePostObj = new mPost(postText, postDateTime);
		//console.log(makePostObj);
		allPosts.push(makePostObj);
		console.log(allPosts);
		
		var data = $(this).serialize();

		//displayPost();
			var newDiv = document.createElement("div");
				newDiv.className = "m-post";
			var newPPost = document.createElement("p");
				newPPost.className = "post-text";
			var newPDate = document.createElement("p");
				newPDate.className = "post-date-time";
			var newPostText = document.createTextNode(postText);
				newPPost.appendChild(newPostText);
			var newPostDate = document.createTextNode(postDateTime);
				newPDate.appendChild(newPostDate);

				newDiv.appendChild(newPPost); 
				
				// delete button making
			var newSpan = document.createElement("span");
				newSpan.className = "close";
				newSpan.id = "<%= data._id %>";

			var XinText = document.createTextNode("X");
				newSpan.appendChild(XinText);
				newDiv.appendChild(newSpan);

				//adding date and time
				newDiv.appendChild(newPDate);

				//putting the completed 'post' into the html
			var bottomDiv = document.getElementById("bottom-div");
				bottomDiv.insertBefore(newDiv, bottomDiv.childNodes[0]);
		resetInput();
	  	
		

	  	// send post to server
	  	$.ajax({
	  		url: '/posts',
	  		type: 'POST',
	  		data: data
	  	})
	  	.done(function(data){
	  		console.log("grabbed it.");
	  	})
	  	.fail(function(data) {
	  		console.log("post failed.");
	  	});


	// Remove button Delete Function
	  $('.close').click(function (e) {
	  	e.preventDefault();
	  	//console.log("sane");

	  	//send delete request to server
	  	var mPostDiv = $(this).closest('div');
	  	var mPostId = $(mPostDiv).data().id;
	  	$.ajax({
	  		url: '/posts/' + mPostId,
	  		type: 'DELETE'
	  	})
	  	.done(function(data) {
	  		console.log(data);
	  		$(deletedPost).remove();
	  		console.log('Post Deleted.');
	  	})
	  	.fail(function(data) {
	  		console.log('Post Delete Failed');
	  	});


	  	$(mPostDiv).remove();
	  });
	 }

	);

 

});


