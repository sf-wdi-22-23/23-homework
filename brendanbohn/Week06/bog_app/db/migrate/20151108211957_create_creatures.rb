class CreateCreatures < ActiveRecord::Migration
  def change
    create_table :creatures do |t|
      t.string :title
      t.text :desc
      t.string :img

      t.timestamps null: false
    end
  end
end
