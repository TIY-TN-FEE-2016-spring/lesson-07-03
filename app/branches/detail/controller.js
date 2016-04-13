import Ember from 'ember';

export default Ember.Controller.extend({
  chartOptions: {
    responsive: true
  },
  newSale: {
    saleDate: null,
    price: ``,
  },

  saveSale(branch, attrs) {
    // Create a new sale record
    const sale = this.store.createRecord(`sale`, attrs);
    sale.set(`branch`, branch);

    // Save new sale record
    sale.save().then(() => {
      // Clear our form
      this.set(`newSale`, {
        saleDate: null,
        price: ``,
      });
    });
  },
});
