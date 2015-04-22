class OrderItem < ActiveRecord::Base
  belongs_to :order
  belongs_to :itemable, polymorphic: true
  delegate :name, to: :itemable

  def to_s
    "#{name} #{quantity}"
  end
end
