class CreativesController < ApplicationController
  def index
  	@creative = Creative.all
  	render :index
  end

  def show
     id = params[:id]
    @creature = Creature.find(id)
    render :show
  end

  def new
  	render :new
  	 @creative = Creative.new
  end

  def create
	  # validate params and save them as a variable
    creative_params = params.require(:creative).permit(:title, :artist, :year, :cover_art)
    # create a new creature with those params
    creative = Creative.new(creative_params)
    # check that it saved
    if creative.save
        # if saved, redirect to route that shows all creatures
    redirect_to creative

    # redirect_to creatives_path
      
  		end
	end
end
