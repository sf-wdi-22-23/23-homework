1. What is a strength of Rails (or something you like about Rails)?
  - Fast to build the basics

2. What is the name of the server Rails comes with, and what is the name of the database it comes with?
  - Server: WEBrick
  - Db: Active Record

3. What is a "resource"?
  - A collection of similar objects

4. What is a "controller"? How is it different from a "route"?
  - Controller: recieves requests for the application
  - A route decides which controller received which requests

5. What is a "migration"?
  - A class that occurs each time a new save is made to the db

6. In Express, our server.js defined our routes. Where was controller logic defined in our Express projects?
  - client side js

7. Look at app/views/layouts/application.html.erb. What does this file remind you of / what does it contain?
  - It is the same as the head partial in JS. It contains the links to the local and non-local stylesheets and js files

8. The app/controllers/articles_controller.rb file looks like:

```rb

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

  - What does the first line ArticlesController < ApplicationController mean?
    - Ensures that ArticlesController inherits from ApplicationController

  - How does ArticlesController#new know which view to display?
    - Because the views page (new.html.erb) has the same name

  - Why does @article have that @?
    - It is an instance variable, so that each instance of Article can use these methods

9. List at least one question you have about Rails (can go over 8 word max if needed).
  - Do we ever learn what happens in all of the other files that appear?!
  - How often do developers change the set up?
