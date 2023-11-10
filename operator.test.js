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

test('divide 4 / 2 to equal 2', () => {
  expect(operate('/', 4, 2)).toBe(2);
});

test('divide 4 / 0 to equal invalid operation', () => {
  expect(operate('/', 4, 0)).toBe(`Division by zero is not allowed`);
});

test('subtract 300000 - 10000 to equal 290000', () => {
  expect(operate('-', 300000, 10000)).toBe(290000);
});

test('multiply 300000 * 10000 to equal 3000000000', () => {
  expect(operate('*', 300000, 10000)).toBe(3000000000);
});

test('adds 300000 + 10000 to equal 310000', () => {
  expect(operate('+', 300000, 10000)).toBe(310000);
});

test('subtract 5.5 - 3.3 to equal 2.2', () => {
  expect(operate('-', 5.5, 3.3)).toBe(2.2);
});

test('multiply 5.5 * 3.3 to equal 18.15', () => {
  expect(operate('*', 5.5, 3.3)).toBe(18.15);
});

test('adds 5.5 + 3.3 to equal 8.8', () => {
  expect(operate('+', 5.5, 3.3)).toBe(8.8);
});

test('divide 5.5 / 2.2 to equal 2.5', () => {
  expect(operate('/', 5.5, 2.2)).toBe(2.5);
});

test('add 0.2 + 0.1 to equal 0.3', () => {
  expect(operate('+', 0.2, 0.1, 12)).toBe(0.3);
});

test('subtract 0.3 - 0.2 to equal 0.1', () => {
  expect(operate('-', 0.3, 0.2, 12)).toBe(0.1);
});

test('multiply 0.5 * 0.3 to equal 0.15', () => {
  expect(operate('*', 0.5, 0.3)).toBe(0.15);
});

test('divide 0.4 / 0.2 to equal 2', () => {
  expect(operate('/', 0.4, 0.2)).toBe(2);
});
