const operate = require('./operate');

const calculate = (input, calcObject) => {
  const { num1, num2, displayValue, operator } = calcObject;
  if (input === 'reset') {
    return { num1: null, num2: null, displayValue: null, operator: null };
  }

  if (/[0-9]/.test(input)) {
    if (num1 === null) {
      const newNum1 = input;
      return {
        num1: newNum1,
        num2,
        displayValue: newNum1,
        operator,
      };
    }
    if (operator !== null) {
      const newNum2 = num2 === null ? input : num2 + input;
      return {
        num1,
        num2: newNum2,
        displayValue: newNum2,
        operator,
      };
    }
  }

  if (['+', '-', '*', '/'].includes(input)) {
    return {
      num1: num1 !== null ? num1 : '0',
      num2,
      displayValue: num1 !== null ? num1 : '0',
      operator: input,
    };
  }

  if (input === '=') {
    if (num1 !== null && num2 !== null && operator !== null) {
      const result = operate(operator, parseFloat(num1), parseFloat(num2));
      return {
        num1: result,
        num2: null,
        displayValue: result,
        operator: null,
      };
    }
    return calcObject;
  }

  return displayValue;
};

module.exports = calculate;
