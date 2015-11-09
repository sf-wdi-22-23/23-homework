UX and Workflow
1. User narrative -gmail
	-I want to create an account
	-i want to log in
	-i want to see all my emails
	-i want to create files to sort emails in
	-i want to move emails in and out of files as i see fit
	-i want to create contacts
	-i want to send an email 
	-i want to see my contacts populate in the address bar as i type
	-i want to send email to non contacts
	-i want to delete emails i don't want
	-i want a safty mechaninisum incase i delete something by mistake

2. Outside-in
to work closest to the user experience first.   Meaning that you start with what the user is going to see and work with first, then build the mechanics that they can't see that makes the thing they are looking at work second.

3. Debugging
	-reading the errors in the terminal or the console.
	-the colored indicators in sublime
	-google to figure out what the errors mean

Project Review
1.Workflow process
	-Started with the a User Story, then did a combination of wireframing and pages to be included diagram, then Model layouts, then scope with icebox ideas, then finished up with Milestones and trello before I even started coding
	-started coding with basic framing, laying out the pages and connections I anticipated using, adding modules, setting up the basic HTML and bootstrap to house all the parts of my site.
	-laid out my modles and connected those to the server file
	-create a database and a few routs
	-moved onto making HTML forms and jquery handlers and saving those sumbmissions to the database
	-worked on redirecting after succssful form submissions
	-saving and deleting to the database
	-built sign in form and saved user with security mesures salt and hash provided by bcrypt
	-authiticate user is logged in on each page load
	-added sessions that were saved in the database
	-changed app name
	-personalized site with user login including greeting with user name
	-adjust company model to connect users to companies using reference to user _id
	-first deploy to heroku
	-rework user experience by adjusting page locations and access
	-add the sorting of companies to the file feature, and adjust company schema to acomidate that
	-create an edit option to company profiles that saves changes to database
	-major addition of css and site appearance
	-connect to glassdoors api
	-show api results and save selected api query results to database
	-adjust details for heroku
	-add readme information 
	-add more results features from api

2.Wishful Workflow
I think my workflow went really well.  I spent lots of time at the beging mapping out everything so i had a good handle of where i was going before i even started.  Most of the things i set out to do i was able to achieve, and aside from running out of time to do things i catogorized as stretch options, I have a very well functioning site that i am proud of.

3. Problem with Project/ stackoverflow
	- The goal of the navigation bar is to collapse when the screen is smaller and produce a drop down menue that contains the links that disappear from the navigation bar when it is large.  The problem is that the buttons don't stay showing when you click on the menue, and it is imposssible to click the links when the navitation bar is small.
	-I have tried altering my CSS, and recopying a raw bootstrap naviationbar over. To find where the problem is.  
	-I assume given that i have taken a working naviagtion code in HTML, that my CSS is impacting the naviation bar somehow that i am not seeing.
	-HTML
	<nav class="navbar navbar-default">
	  <div class="container-fluid">
	    <!-- Brand and toggle get grouped for better mobile display -->
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="/">Networking Organizer</a>
	    </div>

	    <!-- Collect the nav links, forms, and other content for toggling -->
	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul class="nav navbar-nav">
	        <li ><a class= 'noUser' href="/company_create">Search Companies</a></li>
	        <li ><a class= 'loggedIn' href="/company_create">Add Company</a></li>
	        <li><a class='loggedIn' href="/profile">Profile</a></li>
	        <li><a class='loggedIn' href="/businesses">Your Companies</a></li>
	      </ul>

	      <ul class="nav navbar-nav navbar-right">
	        <li id='welcome_message' class='loggedIn navbar-text'><li>
	        <li class='noUser'><a href="/signup">Start Organzing</a></li>
	        <li class='noUser'><a href="/login">Sign In</a></li>
	        <li id='logout' class='loggedIn'><a href="#">Log Out</a></li>
	      </ul>
	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>

	-CSS
	@media (max-width: 860px) {
	    .navbar-header {
	        float: none;
	    }
	    .navbar-toggle {
	        display: block;
	    }
	    .navbar-collapse {
	        border-top: 1px solid transparent;
	        box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
	    }
	    .navbar-collapse.collapse {
	        display: none!important;
	    }
	    .navbar-nav {
	        float: none!important;
	        margin: 7.5px -15px;
	    }
	    .navbar-nav>li {
	        float: none;
	    }
	    .navbar-nav>li>a {
	        padding-top: 10px;
	        padding-bottom: 10px;
	    }
	}

	.navbar{
		background: transparent;
		background:rgba(255, 255, 255, 0.3);
		border-color: transparent;
		color: black;
	}

	.navbar-nav > li > a {
	    color: black;
	}

	#welcome_message{
		margin-top: 10px;
		font-size: 20px;
	}

	.noUser{
		display: none;
	}


Resourcefulness
-Python Django
Given that python has a ready to use authintication system that works "out of the box" it would be important to know exactly what special features this boss of mine wants. 
I think my choice would boil down to what option has the most amount of resources available that can help me get through building whatever this boss wants given that i have no background in the language.  things that lack documentation i would shy away from, verses things that had more users and documentation.  This way if i came across something i did not understand there is a larger community to query to.

-if its backend that would adjust the system for how a username and password is stored. -django.contrib.auth.models
	-Username is passed to the authenticate() method is assumed to be an email address and the user is queried based on the email instead of the username.
	there is a Authenticate_backends setting that can be set to backends.EmailAuthBackend that assumes the user has passed all the authorization to create an email .
	



