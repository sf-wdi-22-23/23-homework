Rails.application.routes.draw do

  resources :creatures, only: [:index, :new, :create, :show, :edit, :update]
  
  root to:'creatures#index'


end
