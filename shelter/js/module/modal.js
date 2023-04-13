import { petsData } from "./data.js";

const sliderWrapper = document.querySelector('.slider__wrapper');

const viewPopup = () => {
  const petsCards = document.querySelectorAll('.card');
  const popup = document.querySelector('.popup');

  const createModal = (pet) => {
    popup.style.display = 'flex';
    popup.innerHTML = `
      <div class="popup__block">
        <button class="popup__close" type="button" aria-label="Close modal window">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="currentColor"/>
          </svg>          
        </button>
        <div class="popup__container">
          <img class="popup__image" src="assets/images/pets-${(pet.name).toLowerCase()}.png" alt="">
          <div class="popup__description">
            <p class="popup__title">${pet.name}</p>
            <p class="popup__subtitle">${pet.type} - ${pet.breed}</p>
            <p class="popup__note">${pet.description}</p>
            <ul class="popup__list">
              <li class="popup__item"><b>Age:</b> ${pet.age}</li>
              <li class="popup__item"><b>Inoculations:</b> ${pet.inoculations}</li>
              <li class="popup__item"><b>Diseases:</b> ${pet.diseases}</li>
              <li class="popup__item"><b>Parasites:</b> ${pet.parasites}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  };

  const closeModal = () => {
    popup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup__block') || e.target.closest('.popup__close')) {
        popup.style.display = '';
        document.body.classList.remove('body-active');
      };
    });
  };

  petsData.forEach((pet, i) => {
    [...petsCards].forEach((card, j) => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        if (card.querySelector('.card__name').textContent == pet.name) {
          createModal(pet);
          document.body.classList.add('body-active');
        }
      });
      closeModal();
    });
  });
};
viewPopup();

let observer = new MutationObserver(mutationRecords => viewPopup());
observer.observe(sliderWrapper, {
  childList: true,
  characterDataOldValue: true
});