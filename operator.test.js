const operate = require('./operator');

test('adds 1 + 2 to equal 3', () => {
  expect(operate('+', 1, 2)).toBe(3);
  expect(operate('-', 2, 1)).toBe(1);
  expect(operate('*', 1, 2)).toBe(2);
  expect(operate('/', 4, 2)).toBe(2);
});
