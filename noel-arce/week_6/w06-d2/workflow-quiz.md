#UX and Workflow

1. Write a brief and complete user narrative for you're favorite user interaction with any web application or mobile app.
	* Noel just moved to the Bay Area and is still adjusting to the public transportation system in the city.  While waiting at different platforms and bus stops, he sometimes questions if he is at the correct spot or how long until the next bus/train arrives.  While some locations provide maps, they can be difficult to read and the monitors are not always accurate with their time esitmations.  It would be convenient to have an app that not only adjusts ETA for shuttles and buses in real-time, but to also have a map incorporated to show you the best route to take to your destination.

2. Describe in your own words what it means to build an application 'outside-in'.
	* Building an application 'outside-in' means to start on the client side and then work your way to the server.  As a developer, it is better to first consider what the user sees and interacts with before working on the backend.  Doing this also helps the developer get a basic idea of how things will interact and connect to the server as the client uses the application.  At minimum, the developer should get the HTML, any basic CSS/Bootstrap, and just enough client-side JS going before shifting the the backend.

3. Name three of your favorite and most effective debugging techniques.
	* console.logging throughout your code to see what data or responses the client or server is is getting back
	* using the developer tools to test any code before changing it in Sublime
	* frequently commiting and using git checkout to revert back to a previous commit should all else fail


#Project 1 Review

1. Write a brief step by step of what workflow process you ended up doing for Project 1.
	* For Project 1, the workflow approach I took was to start with my User Narratives and Wireframing.  I did my best to plan out as many details I could think of including, User Experience and routes and models.  Following that, I set up a basic Bootstrap template for what my site should look like, including the buttons that would be necessary to get it to function.  I then moved onto the client JS and server routes to make sure that the client and server were commuticating correctly.  I set up my models and schemas once I finally decided what type of information was necessary to be saved.  I ran several test to ensure that the basic functions of the app were working before moving onto additional features.

2. Write what workflow do you wish you had done and what will your workflow look like in future projects?
 * User Login/Logout was a challenge for me and looking back I think it would be advantageous to begin with that.  While my app works, without the security of have a user authorization set up, anyone can create and edit information on the app.  Additionally, I realized that I got ahead of myself with ideas and didn't plan well enough.  I think there is no such thing as overplanning, and in the future I will try to plan and better, maybe writing every thought I have rather than trying to weigh there values before writing.  Do more wireframes, as a major issue was I stuck only to one or two wireframe plans and didn't fully consider the user experience for each wireframe set up.  I would also like to do much more pseudocoding.

3. Recall a problem you had or are having with your project 1 and write a sample stackoverflow.com question.

		What you're trying to accomplish
			I would like to set up a way for trips to be editted or deleted by only the user that created that post.

		What you've tried already
			I have not started to solve this problem yet.

		What error you are receiving or problem you are having
			None yet.  Just don't know where to start

# Resourcefulness
	* If I was asked by an employer or client to find the best Django module for authentication, I would choose Django-Registration.  The pros of using this module is that it has some versatiliy.  There are two methods you can set up.  The simpler method is a one-phase registration, where the user signs up and is immediately active and logged into their account.  The second way, and in my opinion more secure method, is a two-phase registration.  This involves signing up with a new account and then, before it can be activated, you must click a link in a verification email that is sent to you.  While some may look at this as a con, due to it having more steps, I see it providing more security.  The verification email ensures that the user is who they say they are, making the experience more secure.


