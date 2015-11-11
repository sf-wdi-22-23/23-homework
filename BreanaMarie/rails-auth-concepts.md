Secure Passwords and the User Model
- Could you create a user without an email? How do you know?
you can creat a user with anything you wanted to, there just has to be something that can be designated unique

- How would you call the User model's password getter method (is it an instance method or a class method)?
		def password
		  @password
		end
	this is an instance methood.

- Is the User model's password= an instance method or a class method? What is it using BCrypt for?
	this is a class method. 
	BCrypt is used to scramble the password in a way that makes it difficult for anyone to unscramble.

- Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?
	this is a class method, 
	BCrypt is used to scramble the entered password the same way it was when it was created.  This way it can be compaired against what is saved on the database.
	if passwords match, it returns true

- How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?
	def self.confirm(email_param, password_param)
	    user = User.find_by_email(email_param)
	    user.authenticate(password_param)
	  end
	this is a class methood


-Which User model method interacts with the database?
	def self.confirm(email_param, password_param)
	    user = User.find_by_email(email_param)
	    user.authenticate(password_param)
	  end

Login/Logout with Sessions
- What object does Rails give us to access session information? What kind of object is it?
	a session hash which is a 32 byte long MD5 hash value
	sessions consist of hash values an id and cookies

- Why do we have a SessionsController?
	so a user does not have to authinticate ever request to the server

- What does the sessions#new controller action do?
	creates a new session, usually done at login

- The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?
	if login in is successful then the session is created and the user does not have to authinticate again while logged in.
	if login is unsccessful, then there is no session created and the user is not logged in.

- What does sessions#destroy do (signup, login, or logout)?
	session destory clears the session created on the server and the cookies so the user is no longer loggedin.  this happens at the log out phase

- What route(s) would we have to add if we want users to be able to edit their information?
	sessions can not be edited by the user.
	the rout to change their account information would be PATCH/PUT


Current User with Helper Method
- Why would we want to keep track of the currently logged in user?
	prevents constant authintication from the user

- What is the current_user helper method in app/controllers/application_controller.rb doing?
	creating a session when there is successful login and then destorying the session when user logs out or there is no user logged in


