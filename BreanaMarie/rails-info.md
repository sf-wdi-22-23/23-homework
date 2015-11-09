
What is a strength of Rails (or something you like about Rails)?
	there is so many gems that do all the heavy lifting

What is the name of the server Rails comes with, and what is the name of the database it comes with?
	WEBBrick  SQLite3

What is a "resource"?
	a collection of similar objects

What is a "controller"? How is it different from a "route"?
	controller recieves requests from the application, a rout decides which controller receives which request

In Express, server.js contained our routes. Where was controller logic defined in our Express projects?
	sdgrseg

Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?
	its like the connections we made to all the documents needed to display a page

The app/controllers/articles_controller.rb file looks like:
	kinda like the app.js ajax comands
		What does the first line ArticlesController < ApplicationController mean?
			it defines the class ArticlesController a child of ApplicationController
		How does ArticlesController#new know which view to display?
			it is defiended under the def show
		Why does @article have that @?
			because it is an instance variables

What is ActiveRecord? What was the equivalent tool we used with Express?
	object relational mapping system that is similar to Mongoose

What is a "migration"?
	a change to a schema that modifies how the data sits on the database

List at least one question you have about Rails (can go over 8 word max if needed).
	how flexible is rails to custimization?