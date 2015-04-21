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

    if (!selectedSelections.length) {
      return (
        <span>Nothing Selected</span>
      );
    }
    return (
      <div>
        <ul>
          {selectedSelections.map((selection) => {
            return (
              <li>
                {selection.quantity > 1 ? <span>{selection.quantity} x </span> : null}
                {selection.name}
                &nbsp;{App.Money.centsToFormatted(selection.quantity * selection.amount_cents)}
              </li>
              );
          })}
        </ul>
        <span>{App.Money.centsToFormatted(totalCents)}</span>
      </div>
    );
  }
});

