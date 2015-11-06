## Level 1
Zombie.find(1)

Zombie.create

Zombie.last

Zombie.order(:name)

Zombie.find(3).update(graveyard: "Benny Hills Memorial")

Zombie.find(3).destroy


## Level 2
class Zombie < ActiveRecord::Base
  validates_presence_of :name
  validates_uniqueness_of :name
  validates :name, presence:true, uniqueness: true
end

class Weapon < ActiveRecord::Base
  belongs_to :zombie
end

Zombie.find(1).weapons


# Level 3
<h1><%= zombie.name %></h1>

<p>
  <%= zombie.graveyard %>
</p>


link_to zombie.name, zombie_path(zombie)

<ul>
<% zombies.each do |zombie| %>
  <li> <%= zombie.name %> </li>
</ul>
<% end %>

<% if zombie.tweets.size > 1 %>
      <em>SMART ZOMBIE</em>
      <% end %>

<%= link_to zombie.name, edit_zombie_path(zombie) %>


# Level 4
def show
  @zombie = Zombie.find(params[:id])
end



 respond_to do |format|
      format.xml {render xml: @zombie }
    end



def create
  @zombie = Zombie.create(zombie_params)
  redirect_to zombie_path(@zombie)
end



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





