const calculate = require('./calculatefunc');

let data;
beforeEach(() => {
  data = { num1: null, num2: null, displayValue: null, operator: null };
});

describe("when 'input' is 'reset'", () => {
  it('all properties are set to `null`', () => {
    const input = 'reset';
    data = { num1: '10', num2: '20', displayValue: '20', operator: '+' };
    const calculation = calculate(input, data);
    expect(calculation).toHaveProperty('num1', null);
    expect(calculation).toHaveProperty('num2', null);
    expect(calculation).toHaveProperty('displayValue', null);
    expect(calculation).toHaveProperty('operator', null);
  });
});

describe("when 'input' is '='", () => {
  const input = '=';

  it("returns an object with 'num1' property set to the binary operation of 'data.num2' and 'data.num1' if all property of data is defined", () => {
    data = { num1: '10', num2: '20', displayValue: '20', operator: '+' };
    const calculation = calculate(input, data);
    expect(calculation).toHaveProperty('num1', 30);
    expect(calculation).toHaveProperty('num2', null);
    expect(calculation).toHaveProperty('displayValue', 30);
    expect(calculation).toHaveProperty('operator', null);
  });

  it("returns an object with same values as 'data' if any of the data property is not defined", () => {
    const calculation = calculate(input, data);
    expect(calculation).toHaveProperty('num1', data.num1);
    expect(calculation).toHaveProperty('num2', data.num2);
    expect(calculation).toHaveProperty('displayValue', data.displayValue);
    expect(calculation).toHaveProperty('operator', data.operator);
  });
});

describe("when 'input' is a valid binary operator", () => {
  const input = '+';

  it("returns an object with 'num1' property set to the binary operation of 'data.num2' and 'data.num1' if all property of data is defined", () => {
    data = { num1: '10', num2: '20', displayValue: '20', operator: '+' };
    const calculation = calculate(input, data);
    expect(calculation).toHaveProperty('num1', 30);
    expect(calculation).toHaveProperty('num2', null);
    expect(calculation).toHaveProperty('displayValue', 30);
    expect(calculation).toHaveProperty('operator', input);
  });

  it("returns an object with same values as 'data' if 'data.num2' is not defined", () => {
    data = { num1: '10', num2: null, displayValue: '20', operator: '+' };
    const calculation = calculate(input, data);
    expect(calculation).toHaveProperty('num1', data.num1);
    expect(calculation).toHaveProperty('num2', null);
    expect(calculation).toHaveProperty('displayValue', data.num1);
    expect(calculation).toHaveProperty('operator', input);
  });

  it("returns an object with 'num1' property set to 'data.num2' if 'data.num1' is not defined", () => {
    data = { num1: null, num2: '40', displayValue: null, operator: '+' };
    const calculation = calculate(input, data);
    expect(calculation).toHaveProperty('num1', data.num2);
    expect(calculation).toHaveProperty('num2', null);
    expect(calculation).toHaveProperty('displayValue', data.num2);
    expect(calculation).toHaveProperty('operator', input);
  });
});
