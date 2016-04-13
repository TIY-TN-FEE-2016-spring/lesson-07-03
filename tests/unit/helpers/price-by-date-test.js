import { priceByDate } from 'lesson-03/helpers/price-by-date';
import { module, test } from 'qunit';

module(`Unit | Helper | price by date`);

// Replace this with your real tests.
test(`it works`, (assert) => {
  const testValues = {
    '2015/1/1': [{ price: 1000 }],
    '2016/12/2': [{ price: `100` }, { price: 200 }],
  };

  const result = priceByDate([testValues]);

  assert.deepEqual(result, [
    { date: `2015/1/1`, price: 1000 },
    { date: `2016/12/2`, price: 300 },
  ]);
});
