# Rails Auth Concepts

##User Model

1. You could create a user without an email, sure. I think most companies only use emails because it allows them to correspond with the user.

2. To call the User model' password i believe you would call this method:
  
  //def self.confirm(email_param, password_param)
    //user = User.find_by_email(email_param)
    //user.authenticate(password_param)
  //end
  It is a class method.

  3. The User model's password is an instance variable, It is using BCrypt to create a new password digest.


  4. The User model's authenticate method is class variable. It uses BCrypt to check that the password entered is equal to the password of the user.
  If passwords match, it returns itself, the secure password.

  5. You would call the self.confirm method with an email and password parameter.
  It is a class method that finds the User in the database and then authenticates the user's password.

  6. The self.confirm method interacts with the database.

##Login / Logout

1. Rails gives us a session hash to keep track of user data. The type of object is a hash.

2. We have a sessions controller so that we can create and delete user information.

3. The sessions new method give us a path to create new users.

4. The create method grabs the user login and password, then checks to see if that user exists.
If the user exists, it redirects the user to the user path. Otherwise it is redirect to a new sessions path.

5. The method destroy logs the user out.

6. We would need to add a Update and Edit route to edit a user. 

##Current User

1. We would want to keep track of the current user so that we know what that user has access to and the paths they can access.

2. I am not sure what the helper_method does.


