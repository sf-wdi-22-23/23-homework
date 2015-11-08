#Find 1
Zombie.find_by(id:1)
#Create
Zombie.create({name: "blah", graveyard: "San Francisco"})
#Find 2
Zombie.last
#Query
Zombie.order(:name)
#Update
Zombie.find_by(id:3).update(graveyard: 'Benny Hills Memorial')
#Destroy
Zombie.find_by(id:3).destroy

#Create Model
class Zombie < ActiveRecord::Base

end 
#Validations I 
class Zombie < ActiveRecord::Base
	validates :name, presence: true
end 
# Validations II 
class Zombie < ActiveRecord::Base
	validates :name, uniqueness: true
end 
#Validation III
class Zombie < ActiveRecord::Base
	validates :name, uniqueness: true, presence: true
end
#Belongs to 
class Weapon < ActiveRecord::Base
	belongs_to :zombie 
end 
#Relationship Find 
Zombie.find(1).weapon

#Views Simple 
<% zombie = Zombie.first %>

<h1><%= zombie.name %></h1>
<p>
	<%= zombie.graveyard %>
</p> 
#Linking
<% zombie = Zombie.first %> 
<p>
<%= link_to zombie.name, zombie %> 
</p> 
#Each Blocks 
<% zombies = Zombie.all %> 
<ul> 
<% zombies.each do |zombie| %> 
	<li><%= zombie.name %></li> 
<% end %> 
</ul> 
#If 
<% zombies = Zombie.all %> 
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
#Linking in blocks
<% zombies = Zombie.all %>
<ul>
 <% zombies.each do |zombie| %>
 	<li>
 	 <%= link_to zombie.name, edit_zombie_path(zombie) %>
 	</li>
 <% end %>
</ul> 

#Show Action 
app/controllers/zombies_controller.#!/usr/bin/env ruby -wKU
class ZombiesController < ApplicationController
	def show
		@zombie = Zombie.find(params[:id])
	end
end

#Respond to
app/controllers/zombies_controller.#!/usr/bin/env ruby -wKU
class ZombiesController < ApplicationController
	def show
		@zombie = Zombie.find(params[:id])
		respond_to do |format|
			format.xml { render xml: @zombie}
	end
 end
end

#Controller create action
app/controllers/zombies_controller.#!/usr/bin/env ruby -wKU
# params = {zombie: {name: 'Gregg', graveyard: 'TBA'}}
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

#Controller before action
app/controllers/zombies_controller.#!/usr/bin/env ruby -wKU
class ZombiesController < ApplicationController
	before_action :find_zombie
	before_action :check_tweet, only: :show

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













