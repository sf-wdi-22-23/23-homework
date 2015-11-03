# Workflow, UX, and Psuedo Coding Quiz

## UX and Workflow

1. Write a brief and complete user narrative for you're favorite user interaction with any web application or mobile app.

	* I'm Brendan and I use Instagram to share my photos with friends. I am able to organize my photos through the use of hashtags. I can also explore other users' photos through searching usernames, hashtags, or locations. I have followers and follow other users, creating a network of pictures.

1. Describe in your own words what it means to build an application 'outside-in'.

	* Building apps from client-side to server-side. This means building things like HTML first, then adding client-side function through JS, then finally adding server-side function.

1. Name three of your favorite and most effective debugging techniques.

	* CLTSOOI
	* Using dev tools in chrome
	* Plugins

## Project 1 Review

2. Write a brief step by step of what workflow process you ended up doing for Project 1. For example, maybe you wrote user narratives first, then drew a schema drawing, and then started templating. Feel free to reference your Project 1 code and materials and break up your answer by day.

	* Created user narratives, wireframes, and kanban board.
	* Built static, hardcoded HTML files for each of my pages.
	* Gave function to my profile page, adding new trips that got appended to the HTML.
	* Models day. Creating the user and post model and storing data in the server.
	*	Google Maps API day, using "Searchbox" in my log a new trip form to get coordinates, then displaying them on the maps page
	* Creating a secure user and session
	* Logging in/out
	* Giving the search bar on explore page function and general styling

2. Write what workflow do you wish you had done and what will your workflow look like in future projects?

	* I was actually pretty happy with my workflow. One thing I would change though is not to focus so much on styling until the last day. As a designer, this was hard for me.

2. Recall a problem you had or are having with your project 1 and write a sample stackoverflow.com question. 

	I'm still trying to figure out how to add weights to certain terms in my explore search bar.
	As of now, I am searching in a way where each term is given the same way. I'd like to have locations with more weight than dates, which have more weight than a description.
	```js
		db.Post
	    .find(
	        { $text : { $search : req.params.search } }, 
	        { score : { $meta: "textScore" } }
	    )
	    .sort({ score : { $meta : "textScore" } })
	    .exec(function(err, results) {
	        res.json(results);
	    });
	 ```
	 I'm assuming I need to put something in my Post model?

## Resourcefullness

3. Although you might know nothing about Python, imagine you've been asked by your employer or client to find the best Django module for doing authentication. (Django is like Rails but built in python). Pick the Django module you'd use and list the pros and cons of why to use or not use it and why you think it is the best.

	* It looks like there are a lot of options and I would need to know more about the specific requirements for the project to choose one.
		* I'd probably recommend using the auth that Django comes with and manipulate it to meet requirements.

