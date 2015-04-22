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

  def to_s
    if quantity > 1
      "#{name} x #{quantity}"
    else 
      name
    end
  end

  private

  def assign_cost
    self.cost_each_cents = itemable.amount_cents
  end
end
