Zombie.find(1)
Zombie.create
Zombie.last
Zombie.order(:name)

zom3 = Zombie.find(3)
zom3.update(graveyard: "Benny Hills Memorial")

Zombie.find(3).destroy

class Zombie < ActiveRecord::Base

end