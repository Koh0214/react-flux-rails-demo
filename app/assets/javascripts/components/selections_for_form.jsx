App.SelectionsForForm = React.createClass({
  mixins: [Alt.addons.ReactStateMagicMixin],

  statics: {
    registerStores: {
      selections: App.Stores.SelectionStore
    }
  },
  render() {
    var selectedSelections = _.filter(this.state.selections.selections, function(selection) { return selection.isChecked && !selection.hasVariations && selection.quantity > 0});
    return (
      <div>
          {selectedSelections.map((selection) => {
            return (
              <div className="row">
                <input type='text' value={selection.name} />
              </div>
              );
          })}
      </div>
    );
  }
});

