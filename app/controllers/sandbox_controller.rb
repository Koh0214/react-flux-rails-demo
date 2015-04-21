class SandboxController < ApplicationController
  def index
    @selections = [
      { id: 0, amount_cents: 7500, quantity: 1, name: 'Snowboarding', group_id: nil, hasVariations: false, allowMultiple: false, isChecked: true },
      { id: 1, amount_cents: 500, quantity: 1, name: 'Nightlight', group_id: nil, hasVariations: false, allowMultiple: false, isChecked: false },
      { id: 2, amount_cents: 100, quantity: 1, name: 'Snack Shack Cash', group_id: nil, hasVariations: false, maxQuantity: 20, allowMultiple: true, isChecked: false },
      { id: 3, amount_cents: 0, quantity: 0, name: 'T-Shirt', group_id: nil, hasVariations: true, allowMultiple: false, isChecked: false },
      { id: 4, amount_cents: 2000, quantity: 1, name: 'L', group_id: 3, hasVariations: false, allowMultiple: true, maxQuantity: 2, isChecked: false },
      { id: 5, amount_cents: 2200, quantity: 1, name: 'M', group_id: 3, hasVariations: false, allowMultiple: true, maxQuantity: 3, isChecked: false },
    ]
  end
end
