Rails.application.routes.draw do

  devise_for :users
  resources :creatures

  root "creatures#index"

end
