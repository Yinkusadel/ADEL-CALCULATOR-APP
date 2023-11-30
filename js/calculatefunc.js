const operate = require('./operate');

const calculate = (input, calcObject) => {
  let { num1, num2, displayValue, operator } = calcObject;
  if (input === 'reset') {
    return { num1: null, num2: null, displayValue: null, operator: null };
  }

  if (/[0-9]/.test(input)) {
    if (num1 === null) {
      const newNum1 = input;
      return {
        num1: newNum1.toString(),
        num2,
        displayValue: newNum1,
        operator,
      };
    }
    if (operator !== null) {
      const newNum2 = num2 === null ? input : num2 + input;
      return {
        num1: num1.toString(),
        num2: newNum2,
        displayValue: newNum2,
        operator,
      };
    }
  }

  if (['+', '-', '*', '/'].includes(input)) {
    if (num1 !== null && num2 !== null && operator !== null) {
      num1 = operate(operator, parseFloat(num1), parseFloat(num2)).toString();
      num2 = null;
    } else if (num1 !== null && num2 == null && operator !== null) {
      num1 = parseFloat(num1).toString();
      num2 = null;
    } else if (num1 == null && num2 !== null && operator !== null) {
      num1 = parseFloat(num2).toString();
      num2 = null;
    } else {
      num1 = displayValue !== null ? parseFloat(displayValue).toString() : null;
    }

    operator = input;
    displayValue = num1;

    return { num1, num2, displayValue, operator };
  }

  if (input === '=') {
    if (num1 !== null && num2 !== null && operator !== null) {
      const result = operate(operator, parseFloat(num1), parseFloat(num2));
      return {
        num1: result.toString(),
        num2: null,
        displayValue: result.toString(),
        operator: null,
      };
    }
    return calcObject;
  }

  return calcObject;
};

module.exports = calculate;
