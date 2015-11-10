<strong>Secure Passwords and the User Model</strong>

1. Could you create a user without an email? How do you know?
	- Yes, because authentication is based on user id and password
2. How would you call the User model's password getter method (is it an instance method or a class method)?
	- User.password
	- class method
3. Is the User model's password= an instance method or a class method? What is it using BCrypt for?
	- To salt and hash the password
4. Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?
	- Instance method
	- To salt and hash the password
	- The user
5. How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?
	- Instance method
	- Runs authenticate on the user whose email/ id was passed in
6. Which User model method interacts with the database?
	- self.confirm

<strong>Login/Logout with Sessions</strong>

1. What object does Rails give us to access session information?
	- Sessions
2. What kind of object is it?
	- Hash
3. Why do we have a SessionsController?
	- So we can add, create and destroy sessions
4. What does the sessions#new controller action do?
	- Shows the user a form to fill in to check whether the session user has log in details
5. The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?
	- If it succeeds it goes to the users page
	- If it fails it goes back to sessions#new 
6. What does sessions#destroy do (signup, login, or logout)?
	- Log out
7. What route(s) would we have to add if we want users to be able to edit their information?
	- Edit and update

<strong>Current User with Helper Method</strong>

1. Why would we want to keep track of the currently logged in user?
	- To allow them (authorize) to see certain things
	- So they don't have to keep logging in every time they visit a page
2. What is the current_user helper method in app/controllers/application_controller.rb doing?
	- Allows the current_user method (finding the session user) to be used in every controller
