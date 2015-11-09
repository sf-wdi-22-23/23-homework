Rails.application.routes.draw do
  root to: 'creatures#index'
  
  resources :creatures #, only: [:index, :new, :create, :show, :edit, :update, :destroy]

  # get '/creatures/new', to: 'creatures#new', as: 'new_creature'
  # post '/creatures', to: 'creatures#create'

  # get '/creatures/:id', to: 'creatures#show', as: 'creature'

  # get "/creatures/:id", to: "creatures#edit", as: "edit_creature"

  # put "/creatures/:id", to: "creatures#update"

  # delete 'creatures/:id', to: 'creatures#destory'

end
