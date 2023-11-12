const operate = (operator, num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return '12 chars max';
  }
  if (Math.abs(num1) >= 1e14 || Math.abs(num2) >= 1e14) {
    return 'out of range';
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
      return 'Invalid operator';
  }
  if (result > 1e14 || result < -1e14) {
    return 'out of range';
  }

  return parseFloat(result.toPrecision(12));
};

module.exports = operate;
