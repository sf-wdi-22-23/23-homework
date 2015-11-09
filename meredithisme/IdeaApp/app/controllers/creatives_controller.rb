class CreativesController < ApplicationController
  def index
  	@creative = Creative.all
  	render :index
  end

  def show
  end

  def new
  end

  def create
  end
end
