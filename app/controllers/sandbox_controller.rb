class SandboxController < ApplicationController
  def index
    @selections = [
      { id: 0, amount_cents: 799, quantity: 1, name: 'Dune', group_id: nil, hasVariations: false, allowMultiple: false, isChecked: true },
      { id: 1, amount_cents: 2600, quantity: 1, name: 'Armada - Preorder', group_id: nil, hasVariations: false, allowMultiple: false, isChecked: false },
      { id: 2, amount_cents: 1400, quantity: 1, name: 'Ready Player One', group_id: nil, hasVariations: false, maxQuantity: 20, allowMultiple: true, isChecked: false },
      { id: 3, amount_cents: 0, quantity: 0, name: 'Foundation Trilogy', group_id: nil, hasVariations: true, allowMultiple: false, isChecked: false },
      { id: 4, amount_cents: 2825, quantity: 1, name: 'Hardcover', group_id: 3, hasVariations: false, allowMultiple: true, maxQuantity: 2, isChecked: false },
      { id: 5, amount_cents: 1708, quantity: 1, name: 'Paperback', group_id: 3, hasVariations: false, allowMultiple: true, maxQuantity: 3, isChecked: false },
    ]
  end
end
