import Ember from 'ember';

function add(x, y) {
  return x + y;
}

function getPriceFromSale(sale) {
  return parseInt(Ember.get(sale, `price`), 10);
}

export function priceByDate([salesData]) {
  return Object.keys(salesData).map((date) => {
    const salesForDate = salesData[date];
    const sum = salesForDate.map(getPriceFromSale).reduce(add);

    return {
      date,
      price: sum,
    };
  });
}

export default Ember.Helper.helper(priceByDate);
