const startApp = () => {
  const buttonContainer = document.querySelector('.calculator-btns');
  const userInput = document.querySelector('.user-input');

  buttonContainer.addEventListener('click', (event) => {
    if (event.target.type === 'button') {
      userInput.textContent += event.target.value;
    }
  });
};

startApp();
