Level 1

Zombie.find(1)
Zombie.create
Zombie.last
Zombie.order(:name)

z = Zombie.find(3)
z.graveyard = 'Benny Hills Memorial'
z.save

Zombie.find(3).destroy

Level 2

class Zombie < ActiveRecord::Base
end

class Zombie < ActiveRecord::Base
  validates_presence_of :name
end

class Zombie < ActiveRecord::Base
  validates_uniqueness_of :name
end

validates :name, presence: true, uniqueness: true

class Weapon < ActiveRecord::Base
  belongs_to :zombie
end

Zombie.find(1).weapons

Level 3

<% zombie = Zombie.first %>
<h1><%= zombie.name %></h1>
<p>
  <%= zombie.graveyard %>
</p>


<p>
<%= link_to zombie.name, zombie_path(zombie)  %>
</p>


<ul>
<% zombies.each do |zombie| %>
  <li><%= zombie.name %></li>
<% end %>
</ul>



<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= zombie.name %>
      <% if zombie.tweets.size > 1 %> 
      SMART ZOMBIE
      <% end %>
    </li>
  <% end %>
</ul>



<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%=link_to zombie.name, edit_zombie_path(zombie) %>
    </li>
  <% end %>
</ul>

Level 4

class ZombiesController < ApplicationController
  def show
    @zombie = Zombie.find(params[:id])
  end
end


class ZombiesController < ApplicationController
  def show
    @zombie = Zombie.find(params[:id])

    respond_to do |format|
      format.xml  {render xml: @zombie}
    end
  end
end


def create
  @zombie = Zombie.create(zombie_params)
  redirect_to zombie_path(@zombie)
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
  resources:zombies
end

TwitterForZombies::Application.routes.draw do
  get 'undead' => 'zombies#undead'
end

TwitterForZombies::Application.routes.draw do
  get '/undead', to: redirect('/zombies')
end

TwitterForZombies::Application.routes.draw do
  root to: 'zombies#index'
end


TwitterForZombies::Application.routes.draw do
  get '/zombies/:name', to: 'zombies#index', as: '/graveyard'
endz