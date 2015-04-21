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
    var topLevelSelections = _.filter(this.state.selections.selections, function(aos) { return aos.group_id === null});
    if (!topLevelSelections.length) {
      return (
        <span>Nothing</span>
      );
    }
    return (
      <form>
        {topLevelSelections.map((selection) => {
          var variations = _.filter(this.state.selections.selections, function(aos) { return aos.group_id === selection.id});
          return (
            <App.SelectionListItem variations={variations} selection={selection} />
            );
        })}
      </form>
    );
  }
});

