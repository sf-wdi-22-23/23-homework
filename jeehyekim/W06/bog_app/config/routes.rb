Rails.application.routes.draw do

  resources :creatures
  
  root to:'creatures#index'


end
