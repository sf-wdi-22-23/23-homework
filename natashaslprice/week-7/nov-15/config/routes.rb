Rails.application.routes.draw do

  # user routes
  root 'users#splash'
  resources :users, only: [:create, :show, :index]
  get 'alternative'=> 'users#alternative'

end
