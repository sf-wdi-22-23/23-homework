##Auth in Rails homework

###Secure Passwords and the User Model
1.Could you create a user without an `email`? How do you know?
  * No. the class validates whether there is an email or not and in the `self.confirm` method, user is created by using the email param.
1.How would you call the User model's `password` getter method (is it an instance method or a class method)?
  * Instance method.
1.Is the User model's `password=` an instance method or a class method? What is it using BCrypt for?
  * Instance method. BCrypt is for salting and hashing the passwrod.
1.Is the User model's `authenticate` an instance method or a class method? What does it use BCrypt for? What does it return if passwords match?
  * Instance method. It uses BCrypt to confirm that the password entered by the user is the same as the hash saved when user created account. 
1.How would you call the User model's `self.confirm` method (is it an instance method or a class method)? What does it do?
  * Class method. Takes the params entered by user to confirm that they match an account in the database.
1.Which User model method interacts with the database?
  * The `self.confirm` method.




###Login/Logout with Sessions
1.What object does Rails give us to access session information? What kind of object is it?
  * The user id. 
1.Why do we have a SessionsController?
  * It's used to keep track of visitor or user data
1.What does the `sessions#new` controller action do?
  * Creates a new session. 
1.The `sessions#create` controller action controls login. What does `sessions#create` do if login succeeds? What if it fails?
  * If it succeeds, redirects to the user's path. If it doesn't, it redirects_to a new session path
1.What does `sessions#destroy` do (signup, login, or logout)?
  * Logout. Sets the session user id to nil and redirects to the root page
1.What route(s) would we have to add if we want users to be able to edit their information?
  * Edit and Update




###Current User with Helper Method
1.Why would we want to keep track of the currently logged in user?
  * This will help us create a session and keep them logged in.
1.What is the `current_user` helper method in `app/controllers/application_controller.rb` doing?
  * It looks up the user from the `session[:user_id]` to see if it exists.









