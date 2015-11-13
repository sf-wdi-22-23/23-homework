Rails.application.routes.draw do
  root to: 'creatures#index'

  # make an index route for creatures resource.
  # get "/creatures", to: "creatures#index"
  resources :creatures, only: [:index]

end