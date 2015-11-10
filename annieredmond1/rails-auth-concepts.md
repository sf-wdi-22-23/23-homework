Secure Passwords and the User Model
===================================

1. Could you create a user without an email? How do you know?
	Yes, you could create with a unique username.

2. How would you call the User model's password getter method (is it an instance method or a class method)?
	It's a class method.

3. Is the User model's password= an instance method or a class method? What is it using BCrypt for?
	It's a class method and is using bcrypt to create a password digest.

4. Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it 	return if passwords match?
	It's an instance method and used BCrypt make the password digest again to see if they match.  It returns self.

5. How would you call the User model's self.confirm method (is it an instance method or a class method)? What does 		it do?
	It's an instance method.  It runs the authenticate method on the user whose email was passed in.

6. Which User model method interacts with the database?
	self.confirm



Login/Logout with Sessions
==========================

1. What object does Rails give us to access session information? What kind of object is it?
	The sessino hash

2. Why do we have a SessionsController?
	So that we can have new, create and destroy paths.

3. What does the sessions#new controller action do?
	It's a login form.

4. The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it 	fails?
	If it succeeds it redirects to the user's page.  If it fails it goes to the new session path

5. What does sessions#destroy do (signup, login, or logout)?
	It logs out


6. What route(s) would we have to add if we want users to be able to edit their information?
	We would create an edit route and an update route



Current User with Helper Method
===============================

1. Why would we want to keep track of the currently logged in user?
	If different views were available to users, or if the current user has different authorizations in the page.

2. What is the current_user helper method in app/controllers/application_controller.rb doing?
	It makes the current_user method available in views (so that we can do the things in the previous answer)
















