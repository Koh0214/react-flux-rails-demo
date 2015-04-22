App.SelectionsForForm = React.createClass({
  mixins: [Alt.addons.ReactStateMagicMixin],

  statics: {
    registerStores: {
      selections: App.Stores.SelectionStore
    }
  },
  render() {
    var selectedSelections = _.filter(this.state.selections.selections, function(selection) { return !selection.hasVariations });
    return (
      <div>
          {selectedSelections.map((selection,index) => {
            return (
              <div>
                { selection.orderItemId ?  <input type='hidden' name={"order[order_items_attributes][" + index + "][id]"} value={selection.orderItemId} /> : null }
                <input type='hidden' name={"order[order_items_attributes][" + index + "][itemable_id]"} value={selection.id} />
                <input type='hidden' name={"order[order_items_attributes][" + index + "][itemable_type]"} value={selection.itemable_type} />
                <input type='hidden' name={"order[order_items_attributes][" + index + "][quantity]"} value={selection.quantity} />
                <input type='hidden' name={"order[order_items_attributes][" + index + "][_destroy]"} value={!selection.isChecked} />
              </div>
              );
          })}
      </div>
    );
  }
});

