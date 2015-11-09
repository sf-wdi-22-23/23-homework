class CreaturesController < ApplicationController

  def index
    @creatures = Creature.all
    render :index
  end

  def new
    @creature = Creature.new
    render :new
  end

  def create
    creature_params = params.require(:creature).permit(:name, :description)
    creature = Creature.new(creature_params)

    if creature.save 
      #same as redirect_to creature_path(creature)
      redirect_to creature
    end
  end

  def show
    # get the id parameter from the url
    id = params[:id]
    # find the creature with that id and save to instance variable
    @creature = Creature.find(id)
    render :show
  end

  def edit
    id = params[:id]
    @creature = Creature.find(id)
    render :edit
  end

  def update
    creature_id = params[:id]
    creature = Creature.find(creature_id)
    updated_attributes = params.require(:creature).permit(:name, :description)
    redirect_to creatures
  end

  def destroy
    id = params[:id]
    creature = Creature.find(id)
    creature.destroy
    redirect_to creatures_path
  end


end





















