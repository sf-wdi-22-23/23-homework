# Level 1

Zombie.find(1)

Zombie.create

Zombie.last

Zombie.order(:name)

Zombie.find(3).graveyard = 'Benny Hills Memorial'

Zombie.destroy(3)

# Level 2
class Zombie
  validates_presence_of :name
  validates_uniqueness_of :name
  validates :name, presence: true, :uniqueness: true
end

class Weapon
  belongs_to :zombie
end

Zombie.find_by(name: 'Ashley').weapons

# Level 3

# views
<%= zombie.name %>
<%= zombie.graveyard %>

# linking
<%= link_to zombie.name, zombie %>

# each block
<ul>
  <% zombies.each do |zombie| %>
  <li> <%= zombie.name %> </li>
  <% end %>
</ul>

# if
<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= zombie.name %>
      <% if zombie.tweets.count > 1 %>
      SMART ZOMBIE
      <% end %>
    </li>
  <% end %>
</ul>

# linking in blocks
<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= link_to zombie.name, edit_zombie_path(zombie) %>
    </li>
  <% end %>
</ul>

# Level 4

class ZombiesController < ApplicationController
  def show
    @zombie = Zombie.find(params[:id])
    respond_to do |format|
      format.xml do
        render xml: @zombie
      end
    end
  end
end