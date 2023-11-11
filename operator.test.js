const operate = require('./operator');

// basic arithmetic
test('add 0.2 + 0.1 to equal 0.3', () => {
  expect(operate('+', 0.2, 0.1)).toBe(0.3);
});

test('add 1.005 + 0.005 to equal 1.01', () => {
  expect(operate('+', 1.005, 0.005)).toBe(1.01);
});

test('subtract 2 - 1 to equal 1', () => {
  expect(operate('-', 2, 1)).toBe(1);
});

test('divide 4 / 2 to equal 2', () => {
  expect(operate('/', 4, 2)).toBe(2);
});

test('add 2.345 + 0.345 to equal 2.69', () => {
  expect(operate('+', 2.345, 0.345)).toBe(2.69);
});

// basic arithmetic ends

// Zero as operand
test('add 0 + 5 to equal 5', () => {
  expect(operate('+', 0, 5)).toBe(5);
});

test('subtract 8 - 0 to equal 8', () => {
  expect(operate('-', 8, 0)).toBe(8);
});

test('multiply 0 * 3 to equal 0', () => {
  expect(operate('*', 0, 3)).toBe(0);
});

test('divide 0 / 2 to equal 0', () => {
  expect(operate('/', 0, 2)).toBe(0);
});

// Zero as operand ends

// Division by zero
test('divide 6 / 0 to return Error', () => {
  expect(operate('/', 6, 0)).toBe(`Division by zero is not allowed`);
});

test('divide 0 / 0 to return Error', () => {
  expect(operate('/', 0, 0)).toBe(`Division by zero is not allowed`);
});

// Division by zero ends

// Decimal operands
test('adds 0.1 + 0.2 to equal 0.3', () => {
  expect(operate('+', 0.1, 0.2)).toBe(0.3);
});

test('subtract 1.5 - 0.5 to equal 1.0', () => {
  expect(operate('-', 1.5, 0.5)).toBe(1.0);
});

test('multiply 0.2 * 0.3 to equal 0.06', () => {
  expect(operate('*', 0.2, 0.3)).toBe(0.06);
});

test('divide 0.9 / 0.3 to equal 3.0', () => {
  expect(operate('/', 0.9, 0.3)).toBe(3.0);
});

// Decimal operands ends

// Large numbers
test('adds 1000000 + 500000 to equal 1500000', () => {
  expect(operate('+', 1000000, 500000)).toBe(1500000);
});

test('subtract 999999 - 500000 to equal 499999', () => {
  expect(operate('-', 999999, 500000)).toBe(499999);
});

test('multiply 123456 * 789012 to equal 97346958772', () => {
  expect(operate('*', 123456, 789012)).toBe(97408265472);
});

test('divide 1000000  / 10 to equal 100000', () => {
  expect(operate('/', 1000000, 10)).toBe(100000);
});

// Large numbers end

// Mixing Positive and Negative Numbers

test(' add (-2) + 4 to equal 2', () => {
  expect(operate('+', -2, 4)).toBe(2);
});

test('subtract 3 - (-1) to equal 4', () => {
  expect(operate('-', 3, -1)).toBe(4);
});

test('multiply (-3) * (-2) to equal 6', () => {
  expect(operate('*', -3, -2)).toBe(6);
});

test('divide 8 / (-2) to equal -4', () => {
  expect(operate('/', 8, -2)).toBe(-4);
});

// Mixing Positive and Negative Numbers ends

// Extreme Values
test(' add 1e308 + 1e308 to return potential overflow', () => {
  expect(operate('+', 1e308, 1e308)).toBe('infinity');
});

test('subtract -1e308 - 1e308 to return potential overflow', () => {
  expect(operate('-', -1e308, 1e308)).toBe('infinity');
});

test('multiply 1e308 * 2 to return potential overflow', () => {
  expect(operate('*', 1e308, 2)).toBe('infinity');
});

test('divide 1 / 1e-308 to exceed precision limit', () => {
  expect(operate('/', 1, 1e-308)).toBe('infinity');
});

// Extreme Values ends

// Mixing Data Types

test(' add "2" + 3 to return Error', () => {
  expect(operate('+', '2', 3)).toBe('Both operands must be numbers');
});

test('subtract 4 - "1" to return Error', () => {
  expect(operate('-', 4, '1')).toBe('Both operands must be numbers');
});

// Mixing Data Types ends

// Unsupported Operators
test('unknown operator 5 % 2 to exceed Error', () => {
  expect(operate('%', 5, 2)).toBe('Invalid operator');
});

// Unsupported Operators ends
