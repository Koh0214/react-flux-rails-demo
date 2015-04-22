class Order < ActiveRecord::Base
  has_many :order_items, dependent: :destroy
  accepts_nested_attributes_for :order_items, allow_destroy: true

  monetize :total_cost_cents

  def total_cost_cents
    order_items.map(&:cost_cents).sum
  end

  def items_for_order
    items = []
    Item.all.includes(:item_variations).each do |i|
      i.item_variations.each do |iv|
        iv.decorate_selection_and_quantity(self)
        i.is_selected = true if iv.is_selected
        items << iv
      end
      i.decorate_selection_and_quantity(self)
      items << i
    end
    items
  end
end
