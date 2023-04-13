import { petsData } from "./data.js";

const sliderWrapper = document.querySelector('.slider__wrapper');

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
shuffle(petsData);

export const getSlider = (pet) => {
  const card = document.createElement('div');
  card.classList.add('slider__card');
  card.classList.add('card');
  card.innerHTML = `
  <img class="card__image" src="assets/images/pets-${(pet.name).toLowerCase()}.png" alt="">
  <div class="card__description">
    <p class="card__name">${pet.name}</p>
    <a href="#0" class="card__button">Learn more</a>
  </div>
  `;
  sliderWrapper.append(card);
};

if (document.location.href.match(/main/)) {
  for (let i = 0; i < 3; i++) {
    getSlider(petsData[i]);
  }
} else {
  petsData.forEach(pet => getSlider(pet));
}