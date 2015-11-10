#What is a strength of Rails (or something you like about Rails)?
The strength of Rails is the set conventions for speedy configuration.

#What is the name of the server Rails comes with, and what is the name of the database it comes with?
Action Controller is the component that manages the controllers in a Rails application. Active record is the base for the models in a rails application, database can use SQLite, MySQL, and PostgreSQL. 

#What is a "resource"?
A resource is the term used for a collection of similar objects, such as articles. One can create, read, update, and destroy items for a resource aka CRUD. 

#What is a "controller"? How is it different from a "route"?
The controller processes incoming requests, extract parameters, and dispatches them to the indended action. 

#In Express, server.js contained our routes. Where was controller logic defined in our Express projects?
In our Express projects, the controller logic was in the app.js specifying the routes to the server.js. 
#Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?
The app/views/layouts/application.html.erb file reminds me of the index.ejs file with the HTML header, body, and links to other sheets. 

#The app/controllers/articles_controller.rb file looks like:

class ArticlesController < ApplicationController
    def new
    end

    def create
      @article = Article.new(article_params)

      @article.save
      redirect_to @article
    end

    def show
      @article = Article.find(params[:id])
    end

    private
      def article_params
        params.require(:article).permit(:title, :text)
      end
end
#What does the first line ArticlesController < ApplicationController mean?
A controller is simply a class that is defined to inherit from ApplicationController. 
#How does ArticlesController#new know which view to display?
ArticlesController will scan for new template by the format of the template and the handler that will be used. 
#Why does @article have that @?
By using @ the model can be initalized with its respective attributes which are automaticaly mapped to the respective database columns. 
#What is ActiveRecord? What was the equivalent tool we used with Express?
Active Record is the layer of the system responsible for representing business data and logic, similar to ExpressJS framework for Node.js. 

#What is a "migration"?
Migrations are a convenient way to alter database schema over time in a consistent and easy way. 
#List at least one question you have about Rails (can go over 8 word max if needed).
What are disadvantages in using Rails to set up projects especially with generators? 
