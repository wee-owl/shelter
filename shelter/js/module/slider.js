import { petsData } from "./data.js";
import { shuffle } from "./pets.js";

let slides = document.querySelectorAll('.card');
const btnRight = document.querySelector('.slider__button-right');
const btnLeft = document.querySelector('.slider__button-left');
let alsoArr;

const createAlsoCards = (slides) => {
  const petsName = [...slides].map(el => el.children[1].firstElementChild.textContent);
  const petsDataName = petsData.map(el => el.name);
  alsoArr = [...petsName.filter(x => !petsDataName.includes(x)), ...petsDataName.filter(x => !petsName.includes(x))];
  shuffle(alsoArr);
};

const viewNewCards = () => {
  slides = document.querySelectorAll('.card');
  createAlsoCards(slides);
  slides.forEach((el, i) => {
    alsoArr.forEach((item, j) => {
      if (i === j) {
        el.children[0].src = `assets/images/pets-${item.toLowerCase()}.png`;
        el.children[1].firstElementChild.textContent = item;

        console.log(item.toLowerCase(), item);
      }
    });
  });
};

const delClass = () => {
  slides = document.querySelectorAll('.card');
  slides.forEach(el => {
    el.classList.remove('slider__card-right');
    el.classList.remove('slider__card-left');
  });
};

btnRight.addEventListener('click', (e) => {
  e.preventDefault();
  btnRight.disabled = true;
  btnLeft.disabled = true;
  viewNewCards();
  slides = document.querySelectorAll('.card');
  slides.forEach(el => el.classList.add('slider__card-right'));
  setTimeout(delClass, 1100);
  setTimeout(() => {
    btnRight.disabled = false;
    btnLeft.disabled = false;
}, 1100);
});

btnLeft.addEventListener('click', (e) => {
  e.preventDefault();
  btnRight.disabled = true;
  btnLeft.disabled = true;
  viewNewCards();
  slides = document.querySelectorAll('.card');
  slides.forEach(el => el.classList.add('slider__card-left'));
  setTimeout(delClass, 1100);
  setTimeout(() => {
    btnRight.disabled = false;
    btnLeft.disabled = false;
}, 1100);
});