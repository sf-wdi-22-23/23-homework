class CreativesController < ApplicationController
  def index
  	@creative = Creative.all
  	render :index
  end

  def show
     id = params[:id]
    @creative = Creative.find(id)
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

	def edit
        # save the id parameter to a variable
        id = params[:id]
        # look up the creature by id and save to an instance variable
        @creative = Creative.find(id)
        # render the edit form view -- it will have access to the @creature instance variable
        render :edit	
    end

     def update
        # save the id paramater from the url
        creative_id = params[:id]
        # find the creature to update by id
        creative = Creative.find(creative_id)

        # get updated creature data from params
        updated_attributes = params.require(:creative).permit(:name, :description)
        # update the creature
        creative.update_attributes(updated_attributes)

        # redirect to single creative show page for this creative
        redirect_to creative
       
    end
end
