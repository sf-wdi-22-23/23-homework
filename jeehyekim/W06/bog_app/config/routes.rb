Rails.application.routes.draw do

  resources :creatures, only: [:index, :new, :create, :show]
  
  root to:'creatures#index'


end
