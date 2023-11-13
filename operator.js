const operate = (operator, num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'NOT A NUMBER';
  }
  if (Math.abs(num1) >= 1e14 || Math.abs(num2) >= 1e14) {
    return 'OUT OF RANGE';
  }

  let result;

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
        return 'MATH ERR';
      }
      result = num1 / num2;
      break;
    default:
      return 'INVALID OPERATOR';
  }
  if (Math.abs(result) > 1e14) {
    return 'OUT OF RANGE';
  }

  return parseFloat(result.toPrecision(12));
};

module.exports = operate;
