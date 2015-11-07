class AddImageToCreatures < ActiveRecord::Migration
  def change
    add_column :creatures, :image, :string
  end
end
