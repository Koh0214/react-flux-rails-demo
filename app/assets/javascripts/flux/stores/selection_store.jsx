(function(App) {
  class SelectionStore {
    constructor() {
      this.selections = [];
      this.bindListeners({
        handleUpdateSelections: App.Actions.SelectionActions.UPDATE_SELECTIONS,
        handleSelectionsFailed: App.Actions.SelectionActions.SELECTIONS_FAILED,
        handleSelectSelection: App.Actions.SelectionActions.SELECT_SELECTION,
        handleSelectSelectionVariation: App.Actions.SelectionActions.SELECT_SELECTION_VARIATION,
        handleQuantityForSelection: App.Actions.SelectionActions.QUANTITY_FOR_SELECTION
      });
    }

    handleUpdateSelections(selections) {
      this.selections = selections;
      this.errorMessage = null;
    }

    handleQuantityForSelection(quandon) {
      this.selections.forEach((selection) => {
        if (selection.id === quandon.id) {
          selection.quantity = quandon.qty;
        }
      });
    }
    handleSelectSelection(selectedSelection) {
      this.selections.forEach((selection) => {
        // select/deselect top level items
        if (selection.id === selectedSelection.id && selection.itemable_type === selectedSelection.itemable_type) {
          selection.isChecked = !selectedSelection.isChecked;
        }
        // deselect variations on top level deselection
        if (selection.item_id === selectedSelection.id && selection.itemable_type === 'ItemVariation') {
          selection.isChecked = false;
        }
      });
    }

    handleSelectSelectionVariation(selectedVariation) {
      this.selections.forEach((selection) => {
        if (selection.itemable_type === 'ItemVariation') {
          if (selection.id === selectedVariation.id) {
            selection.isChecked = true;
          } else if (selection.item_id === selectedVariation.item_id) {
            selection.isChecked = false;
          }
        }
      });
    }
    handleFetchSelections() {
      this.selections = [];
    }

    handleSelectionsFailed(errorMessage) {
      this.errorMessage = errorMessage;
    }

  }
  App.Stores.SelectionStore = App.Flux.createStore(SelectionStore, 'SelectionStore');
})(window.App)
