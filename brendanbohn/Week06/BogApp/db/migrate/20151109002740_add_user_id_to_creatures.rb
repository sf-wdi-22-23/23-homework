class AddUserIdToCreatures < ActiveRecord::Migration
  def change
    add_column :creatures, :user_id, :integer
    add_index :creatures, :user_id
  end
end
