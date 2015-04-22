class ItemVariation < ActiveRecord::Base
  belongs_to :item
  include IsSelectable

  def name_to_s
    "#{item.name} - #{name}"
  end

  def as_json(options=nil)
    selectable_json.merge(
      {
        item_id: item_id,
        itemable_type: 'ItemVariation',
        hasVariations: false,
      }
    )
  end
end
