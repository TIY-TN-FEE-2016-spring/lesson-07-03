import Ember from 'ember';

function sumOfPrices(arr) {
  return arr.reduce((carry, curr) => {
    return carry + parseFloat(Ember.get(curr, `price`));
  }, 0);
}

export function sumPrice([salesInfo]) {
  const format = {
    labels: [],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [],
      },
    ],
  };

  return Object.keys(salesInfo).reduce((carry, propertyName) => {
    const oldDataSet = carry.datasets[0];

    return {
      labels: [...carry.labels, propertyName],
      datasets: [
        {
          ...oldDataSet,
          data: [...oldDataSet.data, sumOfPrices(salesInfo[propertyName])],
        }
      ]
    };
  }, format);
}

export default Ember.Helper.helper(sumPrice);
