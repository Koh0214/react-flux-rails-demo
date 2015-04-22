module IsSelectable
  extend ActiveSupport::Concern

  included do
    has_many :order_items, as: :itemable
    attr_accessor :is_selected, :quantity, :order_item_id
  end

  def decorate_selection_and_quantity(order)
    oi = order.order_items.where(itemable: self).first
    return unless oi.present?
    self.quantity = oi.quantity
    self.order_item_id = oi.id
    self.is_selected = true
  end

  def selectable_json
    {
      id: id,
      name: name,
      name_to_s: name_to_s,
      amount_cents: amount_cents,
      allowMultiple: allow_multiple,
      maxQuantity: max_quantity.present? ? max_quantity : 1,
      isChecked: is_selected.present? ? is_selected : false,
      orderItemId: order_item_id.present? ? order_item_id : nil,
      quantity: quantity.present? ? quantity : 1
    }
  end
end
