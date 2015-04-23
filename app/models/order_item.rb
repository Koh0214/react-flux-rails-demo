class OrderItem < ActiveRecord::Base
  belongs_to :order
  belongs_to :itemable, polymorphic: true
  delegate :name, :name_to_s, to: :itemable
  validates_presence_of :itemable_id, :itemable_type
  before_save :assign_cost
  monetize :cost_cents

  def cost_cents
    quantity * cost_each_cents
  end

  def name_to_s
    "#{itemable.name_to_s}#{quantity_to_s}"
  end

  def quantity_to_s
    if quantity.present? && quantity > 1
      " x #{quantity}"
    end
  end

  private

  def assign_cost
    self.cost_each_cents = itemable.amount_cents
  end
end
