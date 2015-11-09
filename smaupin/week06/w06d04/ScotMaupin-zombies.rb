# Please copy and paste each command into a file YOURNAME-zombies.rb

LEVEL 1:

Try to find a Zombie where the ID is 1.

Create a new Zombie.

Find the last Zombie in the database, but don't use IDs

Find all Zombies ordered by their names.
Zombie.all.order(:name)

Update Zombie 3's graveyard to 'Benny Hills Memorial'
Zombie.find(3).update({graveyard: 'Benny Hills Memorial'})

Destroy the Zombie with an ID of 3.
Zombie.find(3).Destroy

LEVEL 2:

Define a Zombie model.
class Zombie < ActiveRecord::Base
end

Add a validation that checks for the presence of a Zombie's name

Add a validation that checks for the uniqueness of a Zombie's name.

Validate both the uniqueness and the presence of a Zombie's name on a single line, using the new validation syntax.

A Weapon belongs to a Zombie. Create that relationship.
class Weapon < ActiveRecord::Base
  belongs_to :zombie
end

Assuming the models and relationships are properly defined, find all the weapons that belong to Zombie 'Ashley'.
z = Zombie.find(1)
z.weapons

LEVEL 3:

Print out the zombie's name and graveyard.

Link to the zombie's show page. Use the zombie's name as the anchor text
<p>
<%= link_to zombie.name, zombie %>
</p>

Use an each block to print the names of all the zombies.
<ul>
<% zombies.each do |z| %>
  <li> <%= z.name %> </li>
<% end %>
</ul>

In the each block, if a zombie has more than one tweet, print out SMART ZOMBIE.
<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= zombie.name %>
      <% if zombie.tweets.size > 1%>
      SMART ZOMBIE
      <% end %>
    </li>
  <% end %>
</ul>

In the each block, make the zombie's name link to its edit page.
<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= link_to zombie.name, edit_zombie_path(zombie) %>
    </li>
  <% end %>
</ul>

LEVEL 4:

Create the show action for the ZombiesController which finds a Zombie based on params[:id]. Store the Zombie object to an instance variable named @zombie.
class ZombiesController < ApplicationController
  def show
    # put the show code here
    @zombie = Zombie.find(params[:id])
  end
end

Finish the respond_to block so the action returns the XML of the @zombie record
class ZombiesController < ApplicationController
  def show
    @zombie = Zombie.find(params[:id])

    respond_to do |format|
      format.xml { render xml: @zombie }
    end
  end
end

Write a create action that will create a new Zombie from the params and then redirect to the created Zombie's show page. Make sure to use Rails 4 strong_parameters.
class ZombiesController < ApplicationController
  def create
    @zombie = Zombie.create(zombie_params)
    redirect_to zombie_path(@zombie)
  end

  private

  def zombie_params
    params.require(:zombie).permit(:name, :graveyard)
  end
end

Add a before_action that calls a method to check if a Zombie has tweets. Redirect to zombies_path if the zombie doesn't have tweets, only on show.
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

LEVEL 5

Create a resources route for zombies.
TwitterForZombies::Application.routes.draw do
  resources :zombies
  

end

Create a custom route so that '/undead' will go to the undead action on the ZombiesController.
TwitterForZombies::Application.routes.draw do
  get 'undead' => 'zombies#undead'
end

Create a redirect for '/undead' to '/zombies'.
TwitterForZombies::Application.routes.draw do
  get '/undead', to: redirect('/zombies')
end

Create a root route to the ZombiesController index action.
TwitterForZombies::Application.routes.draw do
  root to: 'zombies#index'
end

Create a named route. It should generate a path like '/zombies/:name' where :name is a parameter, and points to the index action in ZombiesController. Name the route 'graveyard'
TwitterForZombies::Application.routes.draw do
  get '/zombies/:name', to: 'zombies#index', :as => 'graveyard'
end

END LEVEL FIVE
