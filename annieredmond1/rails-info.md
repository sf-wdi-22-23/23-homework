Homework
========


 1. What is a strength of Rails (or something you like about Rails)?

	Automatically sets up files!

2. What is the name of the server Rails comes with, and what is the name of the database it comes with?
	The server is Bin and database is Active Record

3. What is a "resource"?
	A collection of similar items

4. What is a "controller"? How is it different from a "route"?

	Controller receives requests and route picks which controllor

5. In Express, server.js contained our routes. Where was controller logic defined in our Express projects?
	It was in app.js file

6. Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?
	It looks like the index.ejs file


7. The app/controllers/articles_controller.rb file looks like:

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

	 a. What does the first line ArticlesController < ApplicationController mean?
	 	That ArticlesController inherits from ApplicationController
	 b. How does ArticlesController#new know which view to display?
	 	It knows with the show method
	 c. Why does @article have that @?
	 	Because it's an instance variable

8. What is ActiveRecord? What was the equivalent tool we used with Express?
	It's the database, we used Mongo before

9. What is a "migration"?
	It's a class

10. List at least one question you have about Rails (can go over 8 word max if needed).
	Can we go over migration again?
