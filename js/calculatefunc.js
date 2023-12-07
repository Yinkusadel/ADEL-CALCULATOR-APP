const operate = require('./operate');

const calculate = (input, calcObject) => {
  let { num1, num2, displayValue, operator } = calcObject;
  let deleteNum2;
  let concatenatedNum1;

  switch (input) {
    case 'reset':
      return { num1: null, num2: null, displayValue: null, operator: null };

    case 'DEL':
      if (operator === null && num2 === null) {
        const deleteNum1 = num1 === null ? null : num1.slice(0, -1);
        return {
          num1: deleteNum1,
          num2,
          displayValue: deleteNum1,
          operator,
        };
      }
      deleteNum2 = num2 === null ? null : num2.slice(0, -1);
      return {
        num1,
        num2: deleteNum2,
        displayValue: deleteNum2 || displayValue,
        operator,
      };

    case '=':
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

    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (operator !== null) {
        const newNum2 = num2 === null ? input : `${num2}${input}`;
        return {
          num1: num1.toString(),
          num2: newNum2,
          displayValue: newNum2,
          operator,
        };
      }
      concatenatedNum1 = num1 === null ? input : `${num1}${input}`;
      return {
        num1: concatenatedNum1,
        num2,
        displayValue: concatenatedNum1,
        operator,
      };

    case '+':
    case '-':
    case '*':
    case '/':
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

    default:
      return calcObject;
  }
};

module.exports = calculate;
