Rails.application.routes.draw do

  # user routes
  root 'users#index'
  resources :users, only: [:create, :show]
  get 'alternative'=> 'users#alternative'

end
