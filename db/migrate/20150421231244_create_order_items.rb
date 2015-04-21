class CreateOrderItems < ActiveRecord::Migration
  def change
    create_table :order_items do |t|
      t.integer :cost_each_cents, null: false, default: 0
      t.references :order, index: true
      t.integer :itemable_id
      t.string :itemable_type
      t.integer :quantity, null: false, default: 0

      t.timestamps null: false
    end
  end
end
