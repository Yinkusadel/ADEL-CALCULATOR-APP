const operate = require('./operator');

test('adds 1 + 2 to equal 3', () => {
  expect(operate('+', 1, 2)).toBe(3);
});

test('subtract 2 - 1 to equal 1', () => {
  expect(operate('-', 2, 1)).toBe(1);
});

test('multiply 1 * 2 to equal 2', () => {
  expect(operate('*', 1, 2)).toBe(2);
});

test('subtract 4 / 2 to equal 2', () => {
  expect(operate('/', 4, 2)).toBe(2);
});
