class CreaturesController < ApplicationController

	before_action :find_creature, only: [:show, :edit, :update, :destroy]


	def index
		@creatures = Creature.all.order("created_at DESC")
	end

	def show

	end

	def new
		@creature = current_user.creatures.build
	end

	def create
		@creature = current_user.creatures.build(creature_params)
		if @creature.save
			redirect_to @creature, notice: "Successfully created a new creature!"
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @creature.update(creature_params)
			redirect_to @creature, notice: "Creature was Successfully updated!"
		else 
			render 'edit'
		end
	end

	def destroy
		@creature.destroy
		redirect_to root_path
	end


	private

	def creature_params
		params.require(:creature).permit(:name, :desc, :img)
	end

	def find_creature
		@creature = Creature.find(params[:id])
	end

end
