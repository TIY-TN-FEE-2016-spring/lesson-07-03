import Ember from 'ember';

export default Ember.Controller.extend({
  // chartData: {
  //   "labels": ["2016-15-10", "2016-04-13", "2016-04-14", "2015-06-03"],
  //   "dataset": [{
  //     "data": [100, 1350, 200, 200]
  //   }]
  // },

  chartData: {
    "labels": ["2016-15-10", "2016-04-13", "2016-04-14", "2015-06-03"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            "data": [100, 1350, 200, 200]
        }
    ]
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
