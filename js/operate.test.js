import operate from './operate.js';

describe('with basic arithmetic', () => {
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
});

describe('with Zero as operand', () => {
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
});

describe('when handling Division by zero', () => {
  test('divide 6 / 0 to return Error', () => {
    expect(operate('/', 6, 0)).toBe(`MATH ERR`);
  });

  test('divide 0 / 0 to return Error', () => {
    expect(operate('/', 0, 0)).toBe(`MATH ERR`);
  });
});

describe('with decimal operands', () => {
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
});

describe('with Large numbers', () => {
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
});

describe('when Mixing Positive and Negative Numbers', () => {
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
});

describe('with Extreme Values', () => {
  test(' add 1e308 + 1e308 to return potential overflow', () => {
    expect(operate('+', 1e308, 1e308)).toBe('OUT OF RANGE');
  });

  test('subtract -1e308 - 1e308 to return potential overflow', () => {
    expect(operate('-', -1e308, 1e308)).toBe('OUT OF RANGE');
  });

  test('multiply 1e308 * 2 to return potential overflow', () => {
    expect(operate('*', 1e308, 2)).toBe('OUT OF RANGE');
  });

  test('divide 1 / 1e-308 to exceed precision limit', () => {
    expect(operate('/', 1, 1e-308)).toBe('OUT OF RANGE');
  });
});

describe('when Mixing Data Types', () => {
  test(' add "2" + 3 to return Error', () => {
    expect(operate('+', '2', 3)).toBe(5);
  });

  test(' add "a" + 3 to return Error', () => {
    expect(operate('+', 'a', 3)).toBe('NOT A NUMBER');
  });

  test('subtract 4 - "b" to return Error', () => {
    expect(operate('-', 4, 'b')).toBe('NOT A NUMBER');
  });
});

describe('with Unsupported Operators', () => {
  test('unknown operator 5 % 2 to exceed Error', () => {
    expect(operate('%', 5, 2)).toBe('INVALID OPERATOR');
  });
});

describe('when the operand is in range but the result is out of range', () => {
  test('multiply 1e10 * 1e10 to return potential overflow', () => {
    expect(operate('*', 1e10, 1e10)).toBe('OUT OF RANGE');
  });
});
