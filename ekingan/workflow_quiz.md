# Workflow, UX, and Psuedo Coding Quiz

##UX and Workflow

1 I am going to describe my interaction with My Wod, a mobile app used to track your progress at the gym
*I am at the gym and we are looking at the workout for the day. The workout requires that we increase the lift percentage from 50% to 80% of our one rep max lift.
I use my app to see what my one rep max lift is and the app calculates the weight I should lift based on a list of percentages.
*After the workout, I use my app to log my workout to record my progress. I can see if I am improving based on the historical data saved in the app.

2 To build an app from outside-in means that you would first start with the user interface. You would make sure the UI is able to receive the data you need to provide, and able to display the data.
Then you would move on to the client side interactivity, making sure that works well. At that point, you can move on to server side interaction. You can make fake data on the 
server file to make sure everything works, before moving on to using a database. Using this method, you can build your web app
in phases without overcomplicating things and make sure each peice works before moving on. 

3 Three of my favorite debugging techniques are:
* console logging! I use this often to make sure I am getting or sending the data I need. Or to see if click handlers are functioning in the correct way.
* inspect element - this is super helpful when you need to be sure you are using the correct jQuery selectors, to make sure data-ids are being stored correctly, 
or html is bring appending in the right way.
* using the web app - by running through the functionality of the app, you can discover what is and what is not functioning properly.

##Project 1 Review

1 My project 1 workflow
*For project one, I started by writing user naratives and drawing out some wireframes.
*Then I made the basic html template using bootstrap to style it in a simple way.
*I got my client side functionality working, making sure it was working as far as entering data, updating it and deleting it.
*Then I got my server involved, putting some hard-coded data on the server.js file. I made sure my routes were working and that my hard-coded data were displaying properly
*This is when I got my database involved. I made sure it was working properly for inputing, deleting and changing items.
*Then I got authentication working and changed my models to accomodate users
*At this point, I started to debug the site making sure all functionality was working as planned. Of course, not everything was so I went back and tried to fix things to work as I had intended.
*Once this was done, I asked for some advice from a few people as far as user exprience goes. I tried to make the site more user friendly based on their suggestions
*Then I tried to get the app working on a mobile device
*Finally, I styled it, adding custom fonts etc

2I actually really liked my workflow. I would perhaps get feedback earlier to get the user exprience dialed in right after getting the client side functionality working.
The same goes for getting the mobile friendly version working before involving the server and db.

3 A problem I am having with my project 1 is that I would like information to come back from the database as a sorted list. 
I want the data to be sorted in this way: 
*First in the list would be items that have not been purchased yet
*Second would be the items that are purchased that have the least time left before they expire
*Third would be items with the longest time left before they expire

Below is the route to get all items from the user's list:

app.get('/', function (req, res) {
	if(req.session.user ) {
		db.Item.find({user: req.session.user._id}, function (err, items){ // user: req.session.user._id
			if (err){
				console.log("error getting items from db");
			}
			
			res.render("index", {items: items});
		});
	} else {
		res.render('splash');
		// res.render('index', {items: [{name: 'strawberries'}, {name: 'peaches'}, {name: 'bacon'}]}); //put fake items

	}
});

I would like to try inserting this code on the line directly above "res.render("index", {items:items});

"db.Item.find({}, null, {sort: {expiresAt: -1}}, function(err, docs) { ... });"

Honestly, I have not tried this yet but am not sure it will work. 

##Resourcefulness

1 When looking for a user authentication system for Django there are numberous modules that will cover specific aspects of user authentication.
Gjango has a great gereral auth system that is part of the Django distribution but needs to be enabled. I would start here and see if this meet the 
authentication needs. https://docs.djangoproject.com/en/dev/topics/auth/('https://docs.djangoproject.com/en/dev/topics/auth/'') 

