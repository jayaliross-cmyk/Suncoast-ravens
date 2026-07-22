
const menuButton = document.querySelector('[data-menu]');
const drawer = document.querySelector('[data-drawer]');
if(menuButton && drawer){
  menuButton.addEventListener('click', () => {
    drawer.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', drawer.classList.contains('open'));
  });
}
document.querySelectorAll('form[data-preview-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('This form is ready to connect to Formspree, Google Forms, or another form service.');
  });
});
