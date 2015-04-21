(function(App) {
  class SelectionActions {
    selectSelection(selection) {
      this.dispatch(selection);
    }
    selectSelectionVariation(variation) {
      this.dispatch(variation);
    }
    quantityForSelection(quandon) {
      this.dispatch(quandon);
    }
    updateSelections(selections) {
      this.dispatch(selections);
    }
    selectionsFailed(errorMessage) {
      this.dispatch(errorMessage);
    }
  }
  App.Actions.SelectionActions = App.Flux.createActions(SelectionActions);
})(window.App)
