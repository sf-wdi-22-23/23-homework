# UX and Workflow 


1. Write a brief and complete user narrative for you're favorite user interaction with any web application or mobile app.

My favorite web application is Twitter. Twitter allows a user to write a post with the restriction of 140 characters. A user can choose to follow other users. A user can view posts from other followed users. A user can retweet and like tweets for later viewing. A user can also view popular tweets from trending topics. Lastly, a user can send direct messages without any character restrictions. 

2. Describe in your own words what it means to build an application 'outside-in'.

To build an application 'outside-in' means building the framework for the user first and then add in additional features for the user. Example would be to build a login first, user schema, and then add in all the additional features a user can then use.  

3. Name three of your favorite and most effective debugging techniques.

- Console.log 
- return 
- if (err)


# PROJECT 1 Review 


1. Write a brief step by step of what workflow process you ended up doing for Project 1. For example, maybe you wrote user narratives first, then drew a schema drawing, and then started templating. Feel free to reference your Project 1 code and materials and break up your answer by day.

The workflow process for my Project 1 started with writing down different concepts, once I narrowed down the functionality of my application for one user I then proceeded to draw out the basic framework for the application using wireframe. Meanwhile, I solidify my plan by writing out a user narrative so there is a user flow in terms of functionality. After that, I started to build my application for one user. Once I finished, I expanded my project to store data and add-in additional schemas. 

2. Write what workflow do you wish you had done and what will your workflow look like in future projects?

The main workflow process I would change is to really build the application outside-in. For my project 1, I built the functionality first for one user first. In retrospective, I should design the login and schema first and then incorporate additional features. I only added database, schemas, and logins the day before the project was due. Although my project was approved, I feel like I needed to add in more features to meet requirements. 

3. Recall a problem you had or are having with your project 1 and write a sample stackoverflow.com question. Remember to include
i. What you're trying to accomplish
ii. What you've tried already
iii. What error you are receiving or problem you are having
iv. Relevant, brief code samples

i. A problem I have with my project is selecting the image ID to delete an image from my back-end database. 

ii. When I append my images from my database I have the following: 

	<div id = "<%= imageIds[i] %>" class='col-md-6 text-center image-block'></div>

	On my client side I have the following: 

	$('#saved').on('click', '.image-block', function(e) {
	e.preventDefault(); 
	var imageId = $(this).attr('id'); 
	var deleteImage = $(this).closest('div'); 
	// var id = $(imageblock).data("imageIds");
      $.ajax ({
        url: '/api/images/'  + imageId, 
        type: 'DELETE',
      })
      .done(function (data) {
        console.log(data);
        $(deleteImage).remove();
        console.log("this image has been removed");
      })
      .fail(function(data) {
      console.log("this image could not be deleted");
      });

iii. Currently, when I click on an image I receive "this image could not be deleted".

iv. I believe it is selecting the right image file to delete on the front-end, however the back-end linkage is false. The code I have for the server is: 

app.delete("/api/images/:_id", function (req, res) {
	console.log(req.params._id)
	db.Image.find({
		_id: req.params._id 
	}).remove(function(err, post) {
	});

my post route is: 
app.post("/api/images", function (req, res) {
	var newImage = req.body; 
	db.Image.create({lat: newImage.lat, lng: newImage.lng, url: newImage.url, name: newImage.name}, function (err, post) {
		if (err) {return console.log("create error:" + err);}
		console.log("created", post);
		// req.session.newImage = newImage;
		
		
		console.log("this post" + post);
		res.json(post);
		// res.cookie('imageId', image._id);

	});
}

# Resourcefulness

I would use the 'django.contrib.auth' for the authentication framework and 'django.contrib.contenttypes' for the content type system. The auth systems consists of Users, permissions: Binary (yes/no), groups, configurable password hashing system, forms and view tools for logging in users, or restricting content, and pluggable backend system. 

The cons is that it is generic and some problems require third-party packages such as Password strength checking, throttling of login attempts, authentication against third-parties (OAuth). 















