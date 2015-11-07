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
  	Creature.create(creature_params)
  	redirect_to('/')
  end

  # show one creature, based on that creatures id
  def show
  	@creature = Creature.find(params[:id])
  end

  def 

  private

  # validate params 
  def creature_params
  	params.require(:creature).permit(:name, :desc)
  end

end
