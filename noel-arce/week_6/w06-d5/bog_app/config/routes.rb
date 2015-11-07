Rails.application.routes.draw do

  root to: 'creatures#index' # GET ('/')root route
  
  resources :creatures, only: [:index, :new, :create, :show, :edit, :update] 
    # ':index' equivalent to: get "/creatures", to: "creatures#index"
    # ':new' equivalent to: get "/creatures/new", to: "creatures#new", as: "new_creature"
    # ':creature' equivalent to: post "/creatures", to: "creatures#create"
    # ':show' equivalent to: get "/creatures/:id", to: "creatures#show", as: "creature"
    # ':edit' equivalent to: get "/creatures/:id", to: "creatures#edit", as: "edit_creature"
    # ':update' equivalent to: patch "/creatures/:id", to: "creatures#update" AND put "/creatures/:id", to: "creatures#update"
end
