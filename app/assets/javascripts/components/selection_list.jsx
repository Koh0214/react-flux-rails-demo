App.SelectionList = React.createClass({
  mixins: [Alt.addons.ReactStateMagicMixin],

  statics: {
    registerStores: {
      selections: App.Stores.SelectionStore
    }
  },
  componentDidMount() {
    App.Actions.SelectionActions.updateSelections(this.props.selections);
  },
  render() {
    var topLevelSelections = _.filter(this.state.selections.selections, function(aos) { return aos.itemable_type === "Item"});
    if (!topLevelSelections.length) {
      return (
        <span>Nothing</span>
      );
    }
    return (
      <form>
        {topLevelSelections.map((selection) => {
          var variations = _.filter(this.state.selections.selections, function(aos) { return aos.itemable_id === selection.id && aos.itemable_type === 'ItemVariation'});
          return (
            <App.SelectionListItem variations={variations} selection={selection} />
            );
        })}
      </form>
    );
  }
});

