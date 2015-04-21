App.Money = {
  centsToFormatted: function(cents) {
    return accounting.formatMoney(cents / 100);
  }
};
