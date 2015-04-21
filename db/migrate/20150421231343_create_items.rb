class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.integer :amount_cents, null: false, default: 0
      t.boolean :allow_multiple, default: false, null: false
      t.timestamps null: false
      t.integer :max_quantity, null: false, default: 0
    end
  end
end
