class CreaturesController < ApplicationController

	def index # METHOD to show all creatures
		@creatures = Creature.all # get all creatures from db (Creature.all) and save to instance variable (@creatures)
		render :index # render index view file (it will have access to instance variables)
	end

	def new # NEW creature form
		@creature = Creature.new # sets @creature to a new instance of a Creature
	  render :new # optional; this is the default behavior
	end

	def create # CREATE new creature in db
	  creature_params = params.require(:creature).permit(:name, :description) # validate params and save them as a variable
	  creature = Creature.new(creature_params) # create a new creature with those params
	  if creature.save # check that it saved
    	redirect_to creature # if saved, redirect to route that shows just this creature
    		# ^ same as redirect_to creature_path(creature)
    		# ^ same as redirect_to "/creatures/#{creature.id}"
	  end
	end

	def show #SHOW a single creature
		id = params[:id] # get the id parameter from the url and save as 'id'
		@creature = Creature.find(id) # find the creature with that 'id' and save to an instance variable(@creature)
		render :show # render the show page -- it will have access to the @creature variable
	end

end
