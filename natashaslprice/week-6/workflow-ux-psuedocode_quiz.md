
# UX and Workflow

1. Write a brief and complete user narrative for you're favorite user interaction with any web application or mobile app.
  - I want to be able to see where my friends photos were taken, and view other photos that were taken at the same location

2. Describe in your own words what it means to build an application 'outside-in'.
  - You start building an app based on what the user will see, before building the functionality that sits behind it. For example, to build an app that has a log in form the process would be:
    1. use html to build the form on the web page that the user will actually see
    2. write the client side code to take the input from the form and make it useable before sending it to the server
    3. write the server side code to take that input and do something with it, for example to log the user in

3. Name three of your favorite and most effective debugging techniques.
  - building from the outside-in: doing this on Project 1 meant that I caught any errors as they arose and knew exactly what they related to
  - console-log: writing in console-logs with explicit text to help me know where the console-logs are from means you can work out where the error is occurring
  - dev tools: having dev tools open allows you to see where things stop working

# PROJECT 1 Review

1. Write what workflow do you wish you had done and what will your workflow look like in future projects?
  - I was pretty happy with my workflow. I broke my long scope down into 7 smaller scopes. Each time I started a new scope, I wrote a to-do list that broke that scope down into chunks. It allowed me to condense a lot of work down into do-able sized sections and not get overwhelmed. I will do this again on future projects!

2. Recall a problem you had or are having with your project 1 and write a sample stackoverflow.com question. Remember to include
What you're trying to accomplish
What you've tried already
What error you are receiving or problem you are having
Relevant, brief code samples
  - Hi! I am looking for help with a server.js function that I can't make work properly...

    My app is a book app that has a User model and a Book model. Users have booksReadEnjoyed (books that the user has read and enjoyed in the past), and Books have usersReadEnjoyed (users who have read and enjoed that book). The booksReadEnjoyed and usersReadEnjoyed are both referenced models.

    I am writing a recommendations function that should work like this:

    // find session user

    // find all books that the session user has read and enjoyed

    // for each of these books, find all other users that have read and enjoyed that book

    // for each of those other users, find the other books that they have read and enjoyed

    My recommendations function currently looks like this:

    ``` js

    app.get('/recommendations', function(req, res) {
  	// find user by session id
  	db.User.findById(req.session.userId)
  	.populate('booksReadEnjoyed')
  	.exec(function(err, user) {
  		// find other users who have read these books
  		console.log("session user is: ", user);
  		db.User.find( { booksReadEnjoyed: { $in: user.booksReadEnjoyed } } , function(err, users) {
  			console.log("allUsers found are: ", users.length);
  			// if only one user don't show any recommendations
  			if (users.length === 1) {
  				console.log("no recommendations available");
  				var books = [];
  				res.render('recommendations', { user: user, books: books } );
  			}
  			else {
  				// find all books in these users
  				db.Book.find( { usersReadEnjoyed: { $in: users } } , function(err, books) {
  					console.log('books', books);
  					console.log('done');
  					for (var i = 0; i < books.length; i++) {
  						for (var j = 0; j < user.booksReadEnjoyed.length; j++) {
  							if (books[i] && user.booksReadEnjoyed[j]) {
  								if (books[i].title === user.booksReadEnjoyed[j].title) {
  									books.splice(i, 1);
  								}
  							}
  						}
  					}
  					console.log("allBooks found are: ", books);
  					res.render('recommendations', { user: user, books: books } );
  				});
  			}
  		});
  	});
  });
  ```
    It 'mostly' works, but sometimes a book that the session user has already read and enjoyed appears, which is not supposed to happen.

    Does anyone have any ideas for how to improve my code?

    Thanks!

# Resourcefulness

1. Although you might know nothing about Python, imagine you've been asked by your employer or client to find the best Django module for doing authentication. (Django is like Rails but built in python). Pick the Django module you'd use and list the pros and cons of why to use or not use it and why you think it is the best.
  - I would suggest using DJANGO-ALLAUTH.
    - Pros: includes many of the features that used to require separate modules (registration, account management, 3rd party account authentication), despite being fairly new has a good rating on the djangopackages.com website, has a good number of stackoverflow questions/answers
    - Cons: the documentation isn't particularly descriptive, it is fairly new 
