1. What is a strength of Rails (or something you like about Rails)?

	- Rails allows you to write less code while accomplishing more than other languages and frameworks.


2. What is the name of the server Rails comes with, and what is the name of the database it comes with?

	- WEBrick is the server. SQLite3 is the database.


3. What is a "resource"?

	- A resource is a collection of similar objects.


4. What is a "controller"? How is it different from a "route"?

	- A controller is what receives the specific requests for the application.  A route decides which controller receives which request.


5. In Express, server.js contained our routes. Where was controller logic defined in our Express projects?

	- Controller logic was defined in the app.js file with the AJAX routes.


6. Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?

	- It reminds me of an HTML/EJS file. It contains a stylesheet and javascript linked in the head, as well as a yield file/data in the body.


7. The app/controllers/articles_controller.rb file looks like:...
	What does the first line ArticlesController < ApplicationController mean?

		- This line means that the ArticlesController inherits properties from the ApplicationController.

	How does ArticlesController#new know which view to display?

		- The ArticlesController knows which view to display based on the show method defined in the class.

	Why does @article have that @?

		- @article dictates which parts of the file to display


8. What is ActiveRecord? What was the equivalent tool we used with Express?

	- ActiveRecord is the model or layer of the system responsible for representing business data and logic.


9. What is a "migration"?

	- A "migration" is a new version of the database.
 

10. List at least one question you have about Rails (can go over 8 word max if needed).

	- What purpose do all the directories and files that are automatically made have?  It seemed like we only worked with the app and config folders and didn't touch anything else.  Do they play a bigger role in larger projects?

