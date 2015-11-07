Rails.application.routes.draw do

  root to: 'creatures#index' # GET ('/')root route
  resources :creatures, only: [:index] # equivalent to: get "/creatures", to: "creatures#index"

end
