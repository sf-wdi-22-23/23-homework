1. CRAIGSLIST USER NARRATIVE
Users navigate to craigslist.com where they are prompted to choose an area based on country, state, and city, if they have never been to the site before.  After navigating to the subpage for their local area, users can search all of craigslist via a searchbar and they can also navigate to different topics or subtopics through href links.  For example, a user can browse through all items currently up for sale by clicking on the for sale link, or they can be more specific by entering a subcategory of for sale, like bikes.  Inside each subcategory, users can also search for more specific things.  For example, inside bikes, users can search for bikes by size, color, type, etc.  Users also have the ability to create new posts, and they are guided through how to specify the details about their post so that other users can easily navigate to them.

2. Building outside-in means that we always want to start on the client side and then work out way into the server and database and stuff like that.  So if I want a user to be able to sign in to my app, first I'm going to create the form in html so the user has a place to submit their information, then I'm going to work on client side javascript so that I can listen for the submission of that form.  Then I'm going to make an ajax call and make a route through my server so that I can save that user information in the database.

3. a.console.log for life
   b. debugger;
   c. rubber duck program to remind myself what I'm trying to accomplish, then go through the code line by line, making sure I understand what each line does and checking for syntax errors

PROJECT 1 REVIEW
1.  The first thing I did was write a description of the problem I was trying to solve and how my app would do it.  Then I created narratives for how different users would interact with my app.  Then I drew up wireframes for each of the pages my users would interact with.  Then I created the basic html mockups based on the wireframes.  Then I started working on the client side javascript to attach event listeners to buttons and stuff like that.  Then I created the models and decided how and why they would interact.  After the client and models were set up I worked on setting up my server ad creating objects with my models to save in the database.  Lots of AJAX and RESTful routing.

2. I started the auth stuff too early.  I wanted to make sure that jobs taken out of the queue by a user would not be accessible by other users, so I did all of my auth stuff so that I could connect a rider to a job when it was added to myjobs by the rider.  This was not super outside in.  In retrospect, at that point in the process, I would have instead just added a attribute to all jobs called available that had a default boolean of true.  When jobs removed from the queue, I could have done a put route to change available to false.  Then I would have had more time to make sure the client side stuff was all set before moving into the models and database.

3. I'm trying to add cookies so that when I make changes to the server, it won't automatically log my user out.  My cookies work, but the problem is I need to make the cookies a condition of displaying the jobs on my ejs page and I don't know a. if that is even possible, or b. how to write out that condition.  I've tried a ton of different things to no avail.

 <% if ((!job.rider && job.completed === false) && job.available === true) { %>

 I need something like if job.rider.cookies === 

 The problem I'm having is that when cookies are enabled, no jobs show up on my courier.ejs page

**below is an exchange I had with Matt.  It probably fixes my problem but I dont understand how to implement it.
John Costa [12:35 PM] 
hey matt i could use some help this afternoon.  i have my cookies set up and they are working, but im having trouble setting conditions in my ejs.  is there a time we can meet that works for you?  thanks man

mattwock [12:42 PM] 
I'll see what I can do. My hypothesis, however is that you can send the cookie info as a local variable to your EJS file. Something like:

mattwock [12:44 PM]
var loggedInCookie = res.cookies.currentUser || null;
res.render("index", { cookie: loggedInCookie });

mattwock [12:45 PM]
Then do an if (cookie) { // your logged in HTML here } else { // your logged out user HTML }

RESOURCEFULNESS
django-allauth is a one stop shop for authentication in Django.  It covers a broad enough space that it can be used for almost any authentication you might want to do.  A google search shows that it is very popular among developers.  If you want something more specific to your needs (like for social apps or something), there are other options, but in general allauth does what you need, and you only need to learn this one module for all auth stuff.