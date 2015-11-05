class ArticlesController < ApplicationController
	
	# show action. show.html.erb
	# Find article interested in using id
	# use instance variable so Rails shows all instances in the view
	def show
		@article = Article.find(params[:id])
	end

	# new action. new.html.erb is being displayed
	def new 
	end

	# create method for form
	def create
		# see what the form parameters look like
		# render plain: params[:article].inspect
		
		# create new article using the form params
		@article = Article.new(article_params)

		# save article in db
		@article.save

		# redirect to show action
		redirect_to @article
	end

	# be explicit about which params allowed, prevents mass assignment
	# make it private so can't be called outside intended context
	private
		def article_params
			params.require(:article).permit(:title, :text)
		end

end
