class Recipe < ActiveRecord::Base
	belongs_to :users


	

  validates :name, :instructions,
    presence: true,
    length: { maximum: 255 }
end
