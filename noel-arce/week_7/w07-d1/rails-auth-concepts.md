### Secure Passwords and the User Model

1. Could you create a user without an email? How do you know?
	* I do not think you can create a user without and email because to authenticate a user, the password must be associated with an email.

2. How would you call the User model's password getter method (is it an instance method or a class method)?
	* I believe it is an instance method.

3. Is the User model's password= an instance method or a class method? What is it using BCrypt for?
	* I believe it starts as an instance method that becomes a class method once it is encrypted using BCrypt.

4. Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?
	* I do not know.

5. How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?
	* I do not know.

6. Which User model method interacts with the database?
	* The password setter interacts with the database because that is the method used to create a new password and save it.

### Login/Logout with Sessions

1. What object does Rails give us to access session information? What kind of object is it?
	* Session ID.  It is usually a 32-character string.

2. Why do we have a SessionsController?
	* Not 100% sure but I think it is so that users do not have to always identify and authenticate information for every request made.

3. What does the sessions#new controller action do?
	* It brings the user to a login form.

4. The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?
	* If a login succeeds, it saves the user info to that session.  If it fails, it redirects a user to the login form again.

5. What does sessions#destroy do (signup, login, or logout)?
	* It logs out the user and destroys that session and redirects to the index (root) page.

6. What route(s) would we have to add if we want users to be able to edit their information?
	* An EDIT route would need to be added for the users to edit their information.


### Current User with Helper Method

1. Why would we want to keep track of the currently logged in user?
	* Keeping track of the current user will help so that in each view, data that is relecant to that user can be displayed.

2. What is the current_user helper method in app/controllers/application_controller.rb doing?
	* I do not know exactly.






