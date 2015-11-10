class CreaturesController < ApplicationController
  
  # show homepage with all creatures
  def index
  	@creatures = Creature.all
  end

  # show create new creature page with a form
  def new
  	@creature = Creature.new
  end

  # using params from form, create new creature and redirect to homepage
  def create
  	Creature.new(creature_params)
  	# if created and saved, redirect
  	if creature.save
			redirect_to('/')
		end
  end

  # show one creature, based on that creatures id
  def show
  	# find creature to show by id
  	@creature = Creature.find(params[:id])
  end

  # show edit creature page, based on that creatures id
  def edit 
  	@creature = Creature.find(params[:id])
  end

	# using params from form, update creature and redirect to show creature page
	def update
		# find creature to update by id
		creature = Creature.find(params[:id])
		# updated creature with new params from form
		creature.update_attributes(creature_params)
		# redirect to creature show page
		redirect_to creature
	end

	# destroy a creature based on id
	def destroy
		# find creature to destroy by id
		creature = Creature.find(params[:id])
		# destroy creature
		creature.destroy
		# redirect to index
		redirect_to('/')
	end

  private

  # validate params 
  def creature_params
  	params.require(:creature).permit(:name, :desc)
  end

end
