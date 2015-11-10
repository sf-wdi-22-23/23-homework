####1.What is a strength of Rails?
Convention over configuration / tells you what's wrong

####2.What is a name of the server and name of the database Rails comes with?
WEBrick, a server distributed with Ruby by default and SQLite3 for db.

####3.What is a "resource"?
A collection of similar objects such as articles and people. You can create, read, update, destroy them

####4.What is a "controller"? How is it different from a "route"?
A controller receives specific requests – Routing decides which controller receives which requests.

####5.In Express, server.js contained our routes. Where was controller logic defined in our Express projects?
a route handler can certainly serve the role of a controller

####6.Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?
EJS. clownhats / specific methods MVC?

####7.
#####What does the first line ArticlesController < ApplicationController mean?
A controller is a class that is defined to inherit from ApplicationController.
#####How does ArticlesController#new know which view to display?
With no view available, Rails errors out. If not found, then it will attempt to load a template called application/new
#####Why does @article have that @?
every model can be initialized with its attributes, which are automatically mapped to the db

####8.What is ActiveRecord? What was the equivalent tool we used with Express?
The M in MVC - similar to our models in express

####9.What is a "migration"?
Migrations are a convenient way to alter your database schema over time

####10.List at least one question you have about Rails
I noticed rails creates a lot of files and things for you which is great. Whats the best way to manage them? 