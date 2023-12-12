import calculate from './calculate.js';

const startApp = () => {
  const buttonContainer = document.querySelector('.calculator-btns');
  const userInput = document.querySelector('.user-input');
  let calcObject = {
    num1: null,
    num2: null,
    displayValue: null,
    operator: null,
  };

  buttonContainer.addEventListener('click', (event) => {
    if (event.target.type === 'button') {
      const clickedValue = event.target.value;

      calcObject = calculate(clickedValue, calcObject);

      userInput.textContent = calcObject.displayValue;
    }
  });
};

startApp();
