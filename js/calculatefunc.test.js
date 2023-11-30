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
    expect(calculation).toHaveProperty('num1', '30');
    expect(calculation).toHaveProperty('num2', null);
    expect(calculation).toHaveProperty('displayValue', '30');
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
    expect(calculation).toHaveProperty('num1', '30');
    expect(calculation).toHaveProperty('num2', null);
    expect(calculation).toHaveProperty('displayValue', '30');
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
    data = { num1: null, num2: '40', displayValue: '40', operator: '+' };
    const calculation = calculate(input, data);
    expect(calculation).toHaveProperty('num1', data.num2);
    expect(calculation).toHaveProperty('num2', null);
    expect(calculation).toHaveProperty('displayValue', data.num2);
    expect(calculation).toHaveProperty('operator', input);
  });
});

describe("when 'input' is a number", () => {
  const input = '5';

  it("returns an object with 'num2' property concatenate with the input value if 'data.num2' is defined", () => {
    data = { num1: '10', num2: '2', displayValue: '2', operator: '+' };
    const calculation = calculate(input, data);
    expect(calculation).toHaveProperty('num1', data.num1);
    expect(calculation).toHaveProperty('num2', '25');
    expect(calculation).toHaveProperty('displayValue', '25');
    expect(calculation).toHaveProperty('operator', data.operator);
  });

  it("returns an object with 'num2' property set to the input value if 'data.num2' is not defined", () => {
    data = { num1: '10', num2: null, displayValue: '10', operator: '+' };
    const calculation = calculate(input, data);
    expect(calculation).toHaveProperty('num1', data.num1);
    expect(calculation).toHaveProperty('num2', '5');
    expect(calculation).toHaveProperty('displayValue', '5');
    expect(calculation).toHaveProperty('operator', data.operator);
  });
});

describe("when 'input' is a defined first", () => {
  it("returns an object with 'num1' if  property input value 'data.num2' is not defined ", () => {
    const input = '3';
    const calculation = calculate(input, data);
    expect(calculation).toHaveProperty('num1', '3');
    expect(calculation).toHaveProperty('num2', data.num2);
    expect(calculation).toHaveProperty('displayValue', '3');
    expect(calculation).toHaveProperty('operator', data.operator);
  });

  it("returns an object with 'operator' if  property input value 'data.num1' is not defined ", () => {
    const input = '+';
    const calculation = calculate(input, data);
    expect(calculation).toHaveProperty('num1', null);
    expect(calculation).toHaveProperty('num2', null);
    expect(calculation).toHaveProperty('displayValue', null);
    expect(calculation).toHaveProperty('operator', input);
  });

  it("returns an object with 'input'property value if 'data.num1','data.num2','data.operator' is not defined ", () => {
    const input = '=';
    const calculation = calculate(input, data);
    expect(calculation).toHaveProperty('num1', null);
    expect(calculation).toHaveProperty('num2', null);
    expect(calculation).toHaveProperty('displayValue', null);
    expect(calculation).toHaveProperty('operator', null);
  });

  it("returns an object with 'input'property value if empty ", () => {
    const input = null;
    const calculation = calculate(input, data);
    expect(calculation).toHaveProperty('num1', null);
    expect(calculation).toHaveProperty('num2', null);
    expect(calculation).toHaveProperty('displayValue', null);
    expect(calculation).toHaveProperty('operator', null);
  });
});

describe('when series of input is calculated', () => {
  // 2 + 3 + 4 / - 5 * 2 = 8
  const testCases = [
    {
      buttonName: '2',
      expectedOperandOne: '2',
      expectedOperandTwo: null,
      expectedDisplayValue: '2',
      expectedOperator: null,
    },
    {
      buttonName: '+',
      expectedOperandOne: '2',
      expectedOperandTwo: null,
      expectedDisplayValue: '2',
      expectedOperator: '+',
    },
    {
      buttonName: '3',
      expectedOperandOne: '2',
      expectedOperandTwo: '3',
      expectedDisplayValue: '3',
      expectedOperator: '+',
    },
    {
      buttonName: '+',
      expectedOperandOne: '5',
      expectedOperandTwo: null,
      expectedDisplayValue: '5',
      expectedOperator: '+',
    },
    {
      buttonName: '4',
      expectedOperandOne: '5',
      expectedOperandTwo: '4',
      expectedDisplayValue: '4',
      expectedOperator: '+',
    },
    {
      buttonName: '/',
      expectedOperandOne: '9',
      expectedOperandTwo: null,
      expectedDisplayValue: '9',
      expectedOperator: '/',
    },
    {
      buttonName: '-',
      expectedOperandOne: '9',
      expectedOperandTwo: null,
      expectedDisplayValue: '9',
      expectedOperator: '-',
    },
    {
      buttonName: '5',
      expectedOperandOne: '9',
      expectedOperandTwo: '5',
      expectedDisplayValue: '5',
      expectedOperator: '-',
    },
    {
      buttonName: '*',
      expectedOperandOne: '4',
      expectedOperandTwo: null,
      expectedDisplayValue: '4',
      expectedOperator: '*',
    },
    {
      buttonName: '2',
      expectedOperandOne: '4',
      expectedOperandTwo: '2',
      expectedDisplayValue: '2',
      expectedOperator: '*',
    },

    {
      buttonName: '=',
      expectedOperandOne: '8',
      expectedOperandTwo: null,
      expectedDisplayValue: '8',
      expectedOperator: null,
    },
  ];

  let calcData = { num1: null, num2: null, displayValue: null, operator: null };

  testCases.forEach(
    ({
      buttonName,
      expectedOperandOne,
      expectedOperandTwo,
      expectedDisplayValue,
      expectedOperator,
    }) => {
      it(`returns an object with 'input' ${buttonName}`, () => {
        calcData = calculate(buttonName, calcData);
        expect(calcData).toHaveProperty('num1', expectedOperandOne);
        expect(calcData).toHaveProperty('num2', expectedOperandTwo);
        expect(calcData).toHaveProperty('displayValue', expectedDisplayValue);
        expect(calcData).toHaveProperty('operator', expectedOperator);
      });
    },
  );
});
