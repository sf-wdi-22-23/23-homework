1. What is a strength of Rails (or something you like about Rails)?
	Its opinionated, so maybe it can guide me in the right direction.

1. What is the name of the server Rails comes with, and what is the name of the database it comes with?
	WEBrickmk is the server, Active Record is the database or Model

1. What is a "resource"?
	Resources are any and all instances of models.  Hash or objects in Javascript are kind of like resources.

1. What is a "controller"? How is it different from a "route"?
	Routes determine which controller to use.  Controllers get the data from models to display in views and allow users to manipulate data in the models.

1. In Express, `server.js` contained our routes. Where was controller logic defined in our Express projects?
	In our app.js.

1. Look at `app/views/layouts/application.html.erb`. What does this file remind you of / what does it contain?
	It looks like an ejs file.  Client side html.

1. The `app/controllers/articles_controller.rb` file looks like:

	```ruby
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
	```

  * What does the first line `ArticlesController < ApplicationController` mean?
  	It means ApplicationController is inheriting attributes from ArticlesController

  * How does `ArticlesController#new` know which view to display?
  	I don't know

  * Why does `@article` have that `@`?
	Its an instance variable.

1. What is ActiveRecord? What was the equivalent tool we used with Express?
	ActiveRecord is the model.  In express, we used MongoDB

1. What is a "migration"?
	A migration is when you want to make a change across all instances of a model, like add a new attribute.  Its a put request for all.

1. List at least one question you have about Rails (can go over 8 word max if needed).
	I dont fully understand how MVC compares/contrasts to the stack we used for project 1.
	Whats the answer to this question "How does `ArticlesController#new` know which view to display?"

