Level 1

Zombie.find(1)
Zombie.create({name: "Annie", graveyard: "Back Hill"})
Zombie.last
Zombie.all.reorder('name')
Zombie.find(3).update({graveyard: "Benny Hills Memorial"})
Zombie.find(3).destroy

Level 2

class Zombie< ActiveRecord::Base
end

class Zombie < ActiveRecord::Base
  validates_presence_of :name
end

class Zombie < ActiveRecord::Base
  validates_uniqueness_of :name
end

class Zombie < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
end

class Weapon < ActiveRecord::Base
  belongs_to :zombie
end

Ash = Zombie.find_by({name: "Ashley"})
Ash.weapons.all

Level 3

<h1><%= zombie.name %></h1>

<p>
  <%= zombie.graveyard %>
</p>

<p>
  <a href="/zombies/<%= zombie.id %>">Ashley</a>
</p>

<ul>
<% zombies.each do |zombie| %>
  <li> <%=zombie.name%></li>
  <%end%>
</ul>

<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= zombie.name %>
      	<%if zombie.tweets.count > 1 %>
      		 SMART ZOMBIE
      	<%end%>
    </li>
  <% end %>
</ul>

<ul>
  <% zombies.each do |zombie| %>
    <li>
      <a href="/zombies/<%=zombie.id%>/edit"><%= zombie.name %></a>
    </li>
  <% end %>
</ul>

class ZombiesController < ApplicationController
  def show
    @zombie = Zombie.find params[:id]
  end
end

class ZombiesController < ApplicationController
  def show
    @zombie = Zombie.find(params[:id])

    respond_to do |format|
      format.xml { render xml: @zombie }
    end
  end
end

class ZombiesController < ApplicationController
  def create
    @zombie = Zombie.create(params.require(:zombie).permit(:name, :graveyard))
    redirect_to @zombie
  end


 class ZombiesController < ApplicationController
  before_action :find_zombie
  before_action :check_tweets, only: :show

  def show
    render action: :show
  end

  def find_zombie
    @zombie = Zombie.find params[:id]
  end
  
  def check_tweets
    if @zombie.tweets.size == 0
      redirect_to zombies_path
    end
  end
  
end

Level 5

TwitterForZombies::Application.routes.draw do
  resources :zombies
end

TwitterForZombies::Application.routes.draw do
  get '/undead', to: 'zombies#undead'

end


TwitterForZombies::Application.routes.draw do
  get '/undead', to: redirect('/zombies')
end

TwitterForZombies::Application.routes.draw do
  root to: 'zombies#index'  

end

TwitterForZombies::Application.routes.draw do
  get '/zombies/:name', to: 'zombies#index', as: 'graveyard'
end




























