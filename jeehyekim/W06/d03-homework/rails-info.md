### Rails Info 

1. What is a strength of Rails ( or something you like about Rails)?
  * One of the great things is that it already anticipates what I will need as a developer.

1. What is the name of the server Rails comes with, and what is the name of the database it comes with?
  * Name of the server is WEBrick. 
  * Name of database is SQLite

1. What is a "resource"?
  * Resource is the term used for a collection of similar objects like articles, people, or animals. It is a method used to declare a standard REST resource

1. What is a "controller"? How is it different from a "route"?
  * A controller receives requests for the application whereas a route determines which controller receives which requests. 

1. Where was controller logic defined in our Express projects?
  * The controller logic is like schemas in our models folder

1. What does this file remind you of / what does it contain?
  * It's similar to defining a schema and requiring it for the app to use.  

1. What does the first line `ArticlesController < ApplicationController` mean?
  * The articles controller is inheriting from the application controller to use. 

1. How does `ArticlesController#new` know which view to display?
  * The articles_path helper uses the routes it generated. `bin/rake routes`

1. Why does `@article` have that @?
  * It indicates that we're using the new Article model to save the daata in the database

1. What is ActiveRecord? What was the equivalent tool we used with Express? 
  * facilitates the creation and use of objects in the database

1. What is a "migration"?
  * Migration is a ruby class designed to make it easier to create and modify database tables

1. List at least one question you have about Rails (can go over 8 word max if needed).
  * I'm not sure exactly what Rake is.