const operate = (operator, num1, num2) => {
  let result;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Both operands must be numbers';
  }
  if (Math.abs(num1) >= 1e14 || Math.abs(num2) >= 1e14) {
    return 'out of range';
  }

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        return 'Division by zero is not allowed';
      }
      result = num1 / num2;
      break;
    default:
      return 'Invalid operator';
  }
  if (result > 1e14) {
    return 'out of range';
  }
  const parsedResult = parseFloat(result.toPrecision(12));

  return parsedResult;
};

module.exports = operate;
