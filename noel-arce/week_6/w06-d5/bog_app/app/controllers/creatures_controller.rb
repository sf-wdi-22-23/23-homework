class CreaturesController < ApplicationController

	def index # METHOD to show all creatures
		@creatures = Creature.all # get all creatures from db (Creature.all) and save to instance variable (@creatures)
		render :index # render index view file (it will have access to instance variables)
	end

end
