class CreateBreakfasts < ActiveRecord::Migration
  def change
    create_table :breakfasts do |t|
      t.text :recipe

      t.timestamps null: false
    end
  end
end
