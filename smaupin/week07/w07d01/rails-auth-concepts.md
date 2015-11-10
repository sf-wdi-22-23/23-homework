##Secure Passwords and the User Model##


*1. Could you create a user without an email? How do you know?*

	If email wasn't a required or even accepted field in your user Model then it would be possible to create a user without an email.

*2. How would you call the User model's password getter method (is it an instance method or a class method)?*

	@password is used as an instance method, but I think the getter since it happens inside the class user model would be a class method? I'm not really sure or sure why that distinction is important.

*3. Is the User model's password= an instance method or a class method? What is it using BCrypt for?*

	That is using an instance method. I can tell because it has an @ before the method, and the method is actually defined elsewhere outside te password method.

*4. Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?*

	Authenticate seems to be a class method. It is fully self contained within the user clas model and references nothing outside of itself. (not confident that this is right, haha)

*5. How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?*

	It seems to also be a class method. You could call it by entering 'self.confirm()' and passing the email parameters and password parameters to the method. 

*6. Which User model method interacts with the database?*

	self.confirm does some database interaction when it looks for the User.find_by_email(email_param).



##Login/Logout with Sessions##


*1. What object does Rails give us to access session information? What kind of object is it?*

	A session, which is labeled with a session id.

*2. Why do we have a SessionsController?*

	I'm not sure. So that it can keep track of the session, and then when a user has been authenticated, the session controller knows it's okay to do session stuff with that user. if the user isn't authenticated, the session controller will be all 'nope.' (?)

*3. What does the sessions#new controller action do?*

	Takes the new(action) for the session(controller). Starting a session that wasn't existing before(?)

*4. The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?*

	If it succeeeds, it redirects tot he user_path. If it fails, it redirects to the root_path

*5. What does sessions#destroy do (signup, login, or logout)?*

	sets all to 'nil', which should not be the credentials of any actual user, and then redirects to the root.

*6. What route(s) would we have to add if we want users to be able to edit their information?*

	In express this is a put, or patch action. Here it would be included if you created the models without the only: factor, but for good practice, the strong parameters should be there. To edit, you would want to add :edit and then add the paths in the other files that I am not going to come up with right now.



##Current User with Helper Method##

*1. Why would we want to keep track of the currently logged in user?*

	It lets you know who is doing things, and lets you open up options to them as a current user that you might want to hide from guests or other users with different permissions.

*2. What is the current_user helper method in app/controllers/application_controller.rb doing?*

	It makes the current user method available to views (as the handy-dandy commented out code tells me), but Im not ecactly sure what that does.
