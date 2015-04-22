App.SelectedSelectionsList = React.createClass({
  mixins: [Alt.addons.ReactStateMagicMixin],

  statics: {
    registerStores: {
      selections: App.Stores.SelectionStore
    }
  },
  render() {
    var selectedSelections = _.filter(this.state.selections.selections, function(selection) { return selection.isChecked && !selection.hasVariations && selection.quantity > 0});
    var totalCents = _.reduce(selectedSelections, function(memo,selection){ return memo + (selection.quantity * selection.amount_cents); }, 0);

    return (
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Qty</th>
            <th>Item</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {selectedSelections.map((selection) => {
            return (
              <tr>
                <td>{selection.quantity}</td>
                <td>{selection.name}</td>
                <td>{App.Money.centsToFormatted(selection.quantity * selection.amount_cents)}</td>
              </tr>
              );
          })}
          <tr className='info'>
            <td></td>
            <td>Total</td>
            <td>{App.Money.centsToFormatted(totalCents)}</td>
          </tr>
        </tbody>
      </table>
    );
  }
});

