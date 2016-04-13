import {
  chartFormat
} from 'lesson-03/helpers/chart-format';
import {
  module,
  test
} from 'qunit';

module(`Unit | Helper | chart format`);

// Replace this with your real tests.
test(`it works`, (assert) => {
  const exampleData = [
    {
      date: `2015/1/1`,
      price: 1000,
    }, {
      date: `2016/12/2`,
      price: 300,
    },
  ];

  const result = chartFormat([exampleData]);
  assert.deepEqual(result, {
    labels: [`2015/1/1`, `2016/12/2`],
    datasets: [
      {
        label: `My First dataset`,
        fillColor: `rgba(220,220,220,0.2)`,
        strokeColor: `rgba(220,220,220,1)`,
        pointColor: `rgba(220,220,220,1)`,
        pointStrokeColor: `#fff`,
        pointHighlightFill: `#fff`,
        pointHighlightStroke: `rgba(220,220,220,1)`,
        data: [1000, 300],
      },
    ],
  });
});
