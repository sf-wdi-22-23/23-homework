Secure Passwords and the User Model

Could you create a user without an email? How do you know?

# You can create a user without an email because email just a taco or replacement for usersname. most meaningful words can be a reasonable login name. I know cause some website don't ask your email for usersname.

How would you call the User model's password getter method (is it an instance method or a class method)?

#It's a class method, since no @ and not attr: set in the top of the model

Is the User model's password= an instance method or a class method? What is it using BCrypt for?

#The password is an instance method, using BCrypt to digest the user's passwrod to an computer password that regular people can't not break it easily.

Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?

#The authentication is an instance method, using BCrypt to matching the new input password match the database passwrod, if matched return a hash password that is the key for user to log in.

How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?

#class method that checks if the email and password is matched.

Which User model method interacts with the database?

#def self.confirm does

Login/Logout with Sessions

What object does Rails give us to access session information? What kind of object is it?

#session id 32 and hash values, session storage, log in , authenticated and request and response 

Why do we have a SessionsController?

# controls log in and log out and create new and delete sessions

What does the sessions#new controller action do?

# new, create , destroy

The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?

#redirect to logged in content if success, if failed redirect to log in or alert page

What does sessions#destroy do (signup, login, or logout)?

# redirect to index page, root file

What route(s) would we have to add if we want users to be able to edit their information?

def edit
	find id in data, if match update 
	else redirect 
end 

Current User with Helper Method

Why would we want to keep track of the currently logged in user?

#can access user profile , Authorization and track logged in users

What is the current_user helper method in app/controllers/application_controller.rb doing?

available to views
Authorization - @current_user.present? means the user is logged in.
User Profile - user_path(@current_user) will be the path to the current user's profile