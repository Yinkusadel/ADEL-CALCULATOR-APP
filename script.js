const themeRadios = document.querySelectorAll('input[name="theme"]');
const bodyTheme = document.querySelector('.theme-one');

themeRadios.forEach((radio) => {
  radio.addEventListener('change', function () {
    if (this.id === 'theme-choice-one') {
      bodyTheme.classList.add('theme-one');
      bodyTheme.classList.remove('theme-two');
      bodyTheme.classList.remove('theme-three');
    } else if (this.id === 'theme-choice-two') {
      bodyTheme.classList.remove('theme-one');
      bodyTheme.classList.remove('theme-three');
      bodyTheme.classList.add('theme-two');
    } else if (this.id === 'theme-choice-three') {
      bodyTheme.classList.remove('theme-one');
      bodyTheme.classList.remove('theme-two');
      bodyTheme.classList.add('theme-three');
    }
  });
});
