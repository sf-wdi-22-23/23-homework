Secure Passwords and the User Model

1. Could you create a user without an email? How do you know?

No. The validation requires the presence of both an email and password.

2. How would you call the User model's password getter method (is it an instance method or a class method)?

User.password. It is an instance method.

3. Is the User model's password= an instance method or a class method? What is it using BCrypt for?

It is an instance method. It is using bcrypt to generate an encrypted password.

4. Is the User model's authenticate an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?

A class method. It returns self if the passwords match.

5. How would you call the User model's self.confirm method (is it an instance method or a class method)? What does it do?

You would call the method by submitting the form data to the controller that routes to the user class. The method takes in the users email and password and locates the user to check the password against that users password. 

6. Which User model method interacts with the database?

Self.confirm asks the database to return the user with a matching email address. 

Login/Logout with Sessions

1. What object does Rails give us to access session information? What kind of object is it?
Why do we have a SessionsController?

The session object. 

2. What does the sessions#new controller action do?

It creates and sets a new session, as well as destroys a session if the session is ended.

3. The sessions#create controller action controls login. What does sessions#create do if login succeeds? What if it fails?

If the user is validated, then the session is reestablished. If not then a new session is set.

4. What does sessions#destroy do (signup, login, or logout)?

Session destroy sets the session to nil, ending the session.

5. What route(s) would we have to add if we want users to be able to edit their information?

An update route.

Current User with Helper Method

1. Why would we want to keep track of the currently logged in user?

So that user can have access to their information when they log into the site and have that information remain in its proper place as the user navigates around the website.

2. What is the current_user helper method in app/controllers/application_controller.rb doing?

Not sure.