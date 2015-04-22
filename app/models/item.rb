class Item < ActiveRecord::Base
  has_many :order_items, as: :itemable
  has_many :item_variations
  attr_accessor :is_selected, :quantity

  def decorate_selection_and_quantity(order)
    oi = order.order_items.where(itemable: self).first
    return unless oi.present?
    self.quantity = oi.quantity
    self.is_selected = true
  end

  def as_json(options=nil)
    {
      id: id,
      name: name,
      amount_cents: amount_cents,
      itemable_id: id,
      itemable_type: 'Item',
      hasVariations: item_variations.present?,
      allowMultiple: allow_multiple,
      maxQuantity: max_quantity.present? ? max_quantity : 1,
      isChecked: is_selected.present? ? is_selected : false,
      quantity: quantity.present? ? quantity : 1
    }
  end
end
