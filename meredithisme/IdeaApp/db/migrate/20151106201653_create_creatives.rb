class CreateCreatives < ActiveRecord::Migration
  def change
    create_table :creatives do |t|
      t.string :title
      t.string :artist
      t.integer :year
      t.string :cover_art

      t.timestamps null: false
    end
  end
end
