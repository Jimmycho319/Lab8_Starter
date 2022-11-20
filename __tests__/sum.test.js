// sum.test.js
const sum = require('../code-to-unit-test/sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

let summ = sum(10,2);
expect(summ).toBe(12);