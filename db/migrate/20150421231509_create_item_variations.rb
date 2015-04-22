class CreateItemVariations < ActiveRecord::Migration
  def change
    create_table :item_variations do |t|
      t.string :name
      t.references :item, index: true
      t.integer :amount_cents, null: false, default: 0
      t.timestamps null: false
      t.integer :max_quantity, null: false, default: 0
      t.boolean :allow_multiple, default: false, null: false
    end
  end
end
