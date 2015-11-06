What is a strength of Rails (or something you like about Rails)?

Rails is opinionated so it allows the user to get up and running sooner.

What is the name of the server Rails comes with, and what is the name of the database it comes with?

WEBrick. The database is sqlite3.

What is a "resource"?

A resource is what a user can access from a server.

What is a "controller"? How is it different from a "route"?

A controller is separate from the route. A controller controls the action of the route.

In Express, server.js contained our routes. Where was controller logic defined in our Express projects?

app/controllers

Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?

public/views in express. It contains html pages.

The app/controllers/articles_controller.rb file looks like:
What does the first line ArticlesController < ApplicationController mean?

The articles controller inherits from the application controller.

How does ArticlesController#new know which view to display?

The @show method points to the views folder.

Why does @article have that @?

It's an instance variable.

What is ActiveRecord? What was the equivalent tool we used with Express?

Mongoose. We use ActiveRecord to create models.

What is a "migration"?

Allow you to alter your database schema over time.

List at least one question you have about Rails (can go over 8 word max if needed).