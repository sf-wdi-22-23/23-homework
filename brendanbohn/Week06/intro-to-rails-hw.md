# Intro To Rails Homework

1. What is a strength of Rails (or something you like about Rails)?

	Rails is a framework that speeds up development time with Ruby.

1. What is the name of the server Rails comes with, and what is the name of the database it comes with?

	WEBrick is the web server. The database is SQLite.

1. What is a "resource"?

	A resource is data.

1. What is a "controller"? How is it different from a "route"?

	A controller is a class that inherits from ApplicationController. A route tells data where it should go.

1. In Express, server.js contained our routes. Where was controller logic defined in our Express projects?

	Routes are inside the ArticlesController

1. Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?

	EJS, it contains clown-hats and html.

1.
	* What does the first line ArticlesController < ApplicationController mean?

		ArticlesController is a subclass of ApplicationController and inherits from it.

	* How does ArticlesController#new know which view to display?

		It inherits from ApplicationController.

	* Why does @article have that @?

		Its an instance variable, every article has this variable.

1. What is ActiveRecord? What was the equivalent tool we used with Express?

	Its like mongoose, it gives extra function to models.

1. What is a "migration"?

	Ruby classes that are designed to make it simple to create and modify database tables.

1. List at least one question you have about Rails (can go over 8 word max if needed).

	How much do we need to know about the file structure created for use by Rails.