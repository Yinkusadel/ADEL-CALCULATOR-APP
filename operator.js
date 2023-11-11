const operate = (operator, num1, num2) => {
  let result;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Both operands must be numbers';
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
  if (num1 >= 1e14 || num1 <= -1e14 || num2 >= 1e14 || num2 <= -1e14 || result > 1e14) {
    return 'infinity';
  }
  const parsedResult = parseFloat(result.toPrecision(12));

  return parsedResult;
};

operate();

module.exports = operate;
