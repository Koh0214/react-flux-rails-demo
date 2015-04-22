class Item < ActiveRecord::Base
  has_many :item_variations
  include IsSelectable

  def name_to_s
    name
  end

  def as_json(options=nil)
    selectable_json.merge(
      {
        item_id: id,
        itemable_type: 'Item',
        hasVariations: item_variations.present?
      }
    )
  end
end
