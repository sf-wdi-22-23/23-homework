
*1. What is a strength of Rails (or something you like about Rails)?*
  
  It seems to handle lots of the logistics of ajax for you.

*2. What is the name of the server Rails comes with, and what is the name of the database it comes with?*

  The server is called WEBrick, an the name of the database is SQLite3.

*3. What is a "resource"?*

  A resource is a collection of similar object, like 'books', or 'movies', or 'instruments.'

*4. What is a "controller"? How is it different from a "route"?*
  
  A controller recieves the requests for the application and responds. A route is a path either to the control or from the controller to somewher else. Routes decide which controller recieve the message.

*5. In Express, server.js contained our routes. Where was controller logic defined in our Express projects?*

  controller logic happened in app.js. (I think)

*6. Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?*

  It contains the template that will build the html page, and it reminds me of the ejs templates we did with Express.

*7. The app/controllers/articles_controller.rb file looks like:*

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
  *- What does the first line ArticlesController < ApplicationController mean?*

    It means that ArticlesController is a class that inherits certain properties automatically from the class ApplicationController, which it is a child of.

  *- How does ArticlesController#new know which view to display?*

    When it creates the Article, it is given an id.

  *- Why does @article have that @?*

    It is an instance variable. The @ allows it to be called outside of the method it was instantiated in.

*8. What is ActiveRecord? What was the equivalent tool we used with Express?*

  It's a library that gives object relational mapping to databases like MySQL and Postgres. That allows ruby to use and interact with the database as if it was one large object. I think the equivalent in Express was Mongoose.

*9. What is a "migration"?*

  A migration is moving sets of data to a table, where things have been associated with columns and rows, and adds an id number, as well as a created_on and updated_on columns. I didn't really understand them well beyond that.

*10. List at least one question you have about Rails (can go over 8 word max if needed).*

  Is there a good cheat sheet that just lists the order to check on and make routes/ set-up a rails app so I can practice that over and over to start memorizing all the steps?
