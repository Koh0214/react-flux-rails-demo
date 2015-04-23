App.SelectionListItem = React.createClass({
  onChange() {
    App.Actions.SelectionActions.selectSelection(this.props.selection);
  },
  shouldRenderSlave() {
    return this.props.selection.isChecked === true && this.props.selection.allowMultiple === true
  },
  shouldRenderSelect() {
    return this.props.variations.length > 0 && this.props.selection.isChecked === true
  },
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.selection.name}>
          <input
            type="checkbox"
            id={this.props.selection.name}
            checked={this.props.selection.isChecked}
            onChange={this.onChange}
          />
          &nbsp; {this.props.selection.name}
          &nbsp; {this.props.selection.amount_cents > 0 ? App.Money.centsToFormatted(this.props.selection.amount_cents) : null}
        </label>
        {this.shouldRenderSelect() ? <App.SelectionListItemSelectInput variations={this.props.variations} /> : null}
        {this.shouldRenderSlave() ? <App.SelectionListItemTextInput selection={this.props.selection} /> : null}
      </div>
    );
  }
});

App.SelectionListItemTextInput = React.createClass({
  onChange() {
    requestedQty = parseInt(event.target.value);
    if (this.props.selection.maxQuantity === 0) {
      // leave it
    } else if (requestedQty > this.props.selection.maxQuantity) {
      requestedQty = this.props.selection.maxQuantity;
    };
    if (requestedQty <= 0 || isNaN(requestedQty)) {
      requestedQty = 1;
    }
    quandon = { id: this.props.selection.id, qty: requestedQty};
    App.Actions.SelectionActions.quantityForSelection(quandon);
  },
  render() {
    return (
      <label>
        <input
          type="number"
          onChange={this.onChange}
          value={this.props.selection.quantity}
        />
      </label>
    );
  }
});

App.SelectionListItemSelectInput = React.createClass({
  onChange() {
    groupId = parseInt($(event.target).find(':selected').data('group-id'))
    quandon = { id: parseInt(event.target.value), item_id: groupId, isChecked: false};
    App.Actions.SelectionActions.selectSelectionVariation(quandon);
  },
  shouldRenderSlave() {
    return this.selectedVariation() && this.selectedVariation().allowMultiple === true
  },
  selectedVariation() {
    return _.filter(this.props.variations, function(variation) { return variation.isChecked && variation.quantity > 0})[0];
  },
  render() {
    return (
      <div>
        <select onChange={this.onChange}>
          {this.props.variations.map((variation) => {
            return (
              <option value={variation.id} selected={variation.isChecked} data-group-id={variation.item_id}>{variation.name} - {App.Money.centsToFormatted(variation.amount_cents)}</option>
              );
          })}
        </select>
        {this.shouldRenderSlave() ? <App.SelectionListItemTextInput selection={this.selectedVariation()} /> : null}
      </div>
    );
  }
});

