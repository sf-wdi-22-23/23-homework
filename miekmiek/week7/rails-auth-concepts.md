<!-- Secure Passwords and the User Model -->

1. It is possible to create a user without email, because I've come across websites that didn't require email.
2. User.password (class method)
3. (password=) is an instance method. It uses BCrypt to hash the password.
4. authenticate is an instance method. It uses BCrypt to check if the login password matches what's stored for the User.
5. User.self.confirm(email, password). Enter login email and password in the parenthesis.
6. authenticate, since it compares inputs with database info.

<!-- Login/Logout with Sessions -->

1. @current_user
2. SessionsController lets as create and end a session.
3. session#new creates a new session
4. session#create: if login succeeds, sets session user id to login user's id and redirects to the user's page. if login fails, redirects to create a new session.
5. sessions#destroy logs out.
6. sessions#edit

<!-- Current User with Helper Method -->

1. For authorizing the current user, edit current user information.
2. The helper method makes the current user information available everywhere.