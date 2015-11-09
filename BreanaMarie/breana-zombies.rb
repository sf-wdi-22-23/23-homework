Level 1
#Find
$ Zombie.find(1)
#<Zombie id: 1, name: "Ashley", graveyard: "Glen Haven Memorial Cemetery">
Successfully found Zombie where ID = 1.
#Crete
$ Bill = Zombie.create
#FindII
$ Zombie.last
#<Zombie id: 3, name: "Katie", graveyard: "My Father's Basement">
Found the last Zombie!
#Query
#<ActiveRecord::Relation [#<Zombie id: 2, name: "Ashley", graveyard: "Glen Haven Memorial Cemetery">, #<Zombie id: 1, name: "Bob", graveyard: "Chapel Hill Cemetery">, #<Zombie id: 3, name: "Katie", graveyard: "My Father's Basement">]>
Found all Zombies ordered by their names.
#Update
$ Zombie.find(3).update(graveyard: 'Benny Hills Memorial')
true
Successfully updated Zombie 3s graveyard
#Destroy
$ Zombie.find(3).destroy
#<Zombie id: 3, name: "Katie", graveyard: "My Father's Basement">
Destroyed Zombie 3.

Level 2
#Create Model
class Zombie < ActiveRecord::Base
end
#ValidationsI
class Zombie < ActiveRecord::Base
  # insert validation here
  validates_presence_of :name
end

#ValidationsII
class Zombie < ActiveRecord::Base
  # insert validation here
  validates_uniqueness_of :name
end
#VAlidationsIII
class Zombie < ActiveRecord::Base
  # insert validation here
  validates :name,
  uniqueness:true,
  presence:true
end
#Belongs to
class Weapon < ActiveRecord::Base
  belongs_to :zombie
end

#Relationship Find$ Zombie.find(1).weapons
$ Zombie.find(1).weapons
#<ActiveRecord::Associations::CollectionProxy [#<Weapon id: 1, name: "Hammer", strength: 1, zombie_id: 1>]>
Successfully found all of Ashleys weapons.

Level 3
# Views Simple
<h1><%= zombie.name %></h1>

<p>
  <%= zombie.graveyard %>
</p>
# Linking
<p>
<%= link_to zombie.name, zombie %>
</p>
# Each Blocks
<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= zombie.name %>
    </li>
  <% end %>
</ul>
# If
<ul>
  <% zombies.each do |zombie| %>
    <li>
      if(zombie.tweet.length >=  tweet
      <%= zombie.name %>
      <%if zombie.tweets.size > 1 %>SMART ZOMBIE<% end %>
    </li>
  <% end %>
</ul>

# Linking in Blocks

<% zombies = Zombie.all %>

<ul>
  <% zombies.each do |zombie| %>
    <li>
      <%= link_to zombie.name, edit_zombie_path(zombie) %>
    </li>
  <% end %>
</ul>

Level 4
# Show Action

# Respond To

# Controller Create Action

# Controller Before Action




