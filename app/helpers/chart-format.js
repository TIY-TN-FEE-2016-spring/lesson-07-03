import Ember from 'ember';

function mapBy(arr, key) {
  return arr.map((item) => {
    return Ember.get(item, key);
  });
}

export function chartFormat([stats]) {
  return {
    datasets: [
      {
        data: mapBy(stats, `price`),
        fillColor: `rgba(220,220,220,0.2)`,
        label: `My First dataset`,
        pointColor: `rgba(220,220,220,1)`,
        pointHighlightFill: `#fff`,
        pointHighlightStroke: `rgba(220,220,220,1)`,
        pointStrokeColor: `#fff`,
        strokeColor: `rgba(220,220,220,1)`,
      },
    ],
    labels: mapBy(stats, `date`),
  };
}

export default Ember.Helper.helper(chartFormat);
