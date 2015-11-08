Rails.application.routes.draw do

  resources :creatures, only: [:index]
  
  # root to: 'creatures#index'
  get 'creatures/index'


end
