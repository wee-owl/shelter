const burgerBtn = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');
const overlay = document.querySelector('.overlay');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('nav__burger-active');
  navList.classList.toggle('nav__list-active');
  overlay.classList.toggle('overlay-active');
  document.body.classList.toggle('body-active');
});

document.addEventListener('click', (e) => {
  if (e.target === overlay || e.target.closest('.nav__item')) {
    burgerBtn.classList.remove('nav__burger-active');
    navList.classList.remove('nav__list-active');
    overlay.classList.remove('overlay-active');
    document.body.classList.remove('body-active');
  };
});