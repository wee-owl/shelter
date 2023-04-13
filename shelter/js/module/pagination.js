import { petsData } from "./data.js";
import { getSlider } from "./pets.js";
import { shuffle } from "./pets.js";

document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector('.slider__wrapper');
  const btnFarLeft = document.querySelector('.slider__button-farleft');
  const btnFarRight = document.querySelector('.slider__button-farright');
  const btnLeft = document.querySelector('.slider__button-left');
  const btnRight = document.querySelector('.slider__button-right');
  const btnNumber = document.querySelector('.slider__button-number');
  let arr;

  const createShuffleArr = (page) => {
    arr = [];
    for (let i = 0; i < page; i++) {
      let shuffleArr = petsData.slice(0);
      shuffle(shuffleArr);
      arr[i] = [];
      arr[i].push(shuffleArr);
    }
  };

  const create48Array = () => {
    if (sliderWrapper.clientWidth >= 1200) {
      createShuffleArr(6);
    } else if (sliderWrapper.clientWidth >= 890 || sliderWrapper.clientWidth >= 581) {
      createShuffleArr(8);
    } else {
      createShuffleArr(16);
    }
  };
  create48Array();

  const viewCards = () => {
    if (+btnNumber.textContent === 1) {
      if (sliderWrapper.clientWidth >= 1200) {
        sliderWrapper.style.height = "900px";
        sliderWrapper.innerHTML = '';
        arr[0].flat().forEach(el => getSlider(el));
      } else if (sliderWrapper.clientWidth >= 890) {
        sliderWrapper.style.height = "900px";
        sliderWrapper.innerHTML = '';
        arr[0].flat().forEach(el => getSlider(el));
      } else if (sliderWrapper.clientWidth >= 581) {
        sliderWrapper.style.height = "1365px";
        sliderWrapper.innerHTML = '';
        arr[0].flat().forEach(el => getSlider(el));
      } else {
        sliderWrapper.style.height = "1365px";
        sliderWrapper.innerHTML = '';
        arr[0].flat().forEach(el => getSlider(el));
      }
    } else {
      if (sliderWrapper.clientWidth >= 1200) {
        sliderWrapper.style.height = "900px";
        sliderWrapper.innerHTML = '';
        arr[+btnNumber.textContent-1].flat().forEach(el => getSlider(el));
      } else if (sliderWrapper.clientWidth >= 890) {
        sliderWrapper.style.height = "900px";
        sliderWrapper.innerHTML = '';
        arr[+btnNumber.textContent-1].flat().forEach(el => getSlider(el));
      } else if (sliderWrapper.clientWidth >= 581) {
        sliderWrapper.style.height = "1365px";
        sliderWrapper.innerHTML = '';
        arr[+btnNumber.textContent-1].flat().forEach(el => getSlider(el));
      } else {
        sliderWrapper.style.height = "1365px";
        sliderWrapper.innerHTML = '';
        arr[+btnNumber.textContent-1].flat().forEach(el => getSlider(el));
      }
    }
  };
  viewCards();

  btnRight.addEventListener('click', (e) => {
    e.preventDefault();
    let count = +btnNumber.textContent;
    
    if (sliderWrapper.clientWidth >= 1200) {
      if (count < 5) {
        count++;
        btnNumber.textContent = count;
        viewCards();
        btnLeft.disabled = false;
        btnFarLeft.disabled = false;
      } else {
        count++;
        btnNumber.textContent = count;
        viewCards();
        btnRight.disabled = true;
        btnFarRight.disabled = true;
      }
    } else if (sliderWrapper.clientWidth >= 890 || sliderWrapper.clientWidth >= 581) {
      if (count < 7) {
        count++;
        btnNumber.textContent = count;
        viewCards();
        btnLeft.disabled = false;
        btnFarLeft.disabled = false;
      } else {
        count++;
        btnNumber.textContent = count;
        viewCards();
        btnRight.disabled = true;
        btnFarRight.disabled = true;
      }
    } else {
      if (count < 15) {
        count++;
        btnNumber.textContent = count;
        viewCards();
        btnLeft.disabled = false;
        btnFarLeft.disabled = false;
      } else {
        count++;
        btnNumber.textContent = count;
        viewCards();
        btnRight.disabled = true;
        btnFarRight.disabled = true;
      }
    }
  });

  btnFarRight.addEventListener('click', (e) => {
    e.preventDefault();
    if (btnFarRight.disabled === false) {
      if (sliderWrapper.clientWidth >= 1200) {
        btnNumber.textContent = 6;
        viewCards();
      } else if (sliderWrapper.clientWidth >= 890 || sliderWrapper.clientWidth >= 581) {
        btnNumber.textContent = 8;
        viewCards();
      } else {
        btnNumber.textContent = 16;
        viewCards();
      }
      btnRight.disabled = true;
      btnFarRight.disabled = true;
      btnLeft.disabled = false;
      btnFarLeft.disabled = false;
    }
  });

  btnLeft.addEventListener('click', (e) => {
    e.preventDefault();
    let count = +btnNumber.textContent;

    if (sliderWrapper.clientWidth >= 1200 || sliderWrapper.clientWidth >= 890) {
      if (count > 2) {
        count--;
        btnNumber.textContent = count;
        viewCards();
        btnLeft.disabled = false;
        btnFarLeft.disabled = false;
        btnRight.disabled = false;
        btnFarRight.disabled = false;
      } else {
        count--;
        btnNumber.textContent = count;
        viewCards();
        btnLeft.disabled = true;
        btnFarLeft.disabled = true;
      }
    } else if (sliderWrapper.clientWidth >= 581 || sliderWrapper.clientWidth < 581) {
      if (count > 2) {
        count--;
        btnNumber.textContent = count;
        viewCards();
        btnLeft.disabled = false;
        btnFarLeft.disabled = false;
        btnRight.disabled = false;
        btnFarRight.disabled = false;
      } else {
        count--;
        btnNumber.textContent = count;
        viewCards();
        btnLeft.disabled = true;
        btnFarLeft.disabled = true;
      }
    }
  });

  btnFarLeft.addEventListener('click', (e) => {
    e.preventDefault();
    if (btnFarLeft.disabled === false) {
      btnNumber.textContent = 1;
      viewCards();
      btnRight.disabled = false;
      btnFarRight.disabled = false;
      btnLeft.disabled = true;
      btnFarLeft.disabled = true;
    }
  });

  window.addEventListener('resize', () => {
    create48Array();
    sliderWrapper.style.height = "";
    let count = +btnNumber.textContent;

    if (sliderWrapper.clientWidth >= 1200) {
        if (count >= 6) {
          btnNumber.textContent = 6;
          btnRight.disabled = true;
          btnFarRight.disabled = true;
        } else {
          btnRight.disabled = false;
          btnFarRight.disabled = false;
        }

    } else if (sliderWrapper.clientWidth < 1200 && sliderWrapper.clientWidth >= 581) {
        if (count >= 8) {
          btnNumber.textContent = 8;
          btnRight.disabled = true;
          btnFarRight.disabled = true;
        } else {
          btnRight.disabled = false;
          btnFarRight.disabled = false;
        }

    } else if (sliderWrapper.clientWidth < 581) {
        if (count >= 16) {
          btnNumber.textContent = 16;
          btnRight.disabled = true;
          btnFarRight.disabled = true;
        } else {
          btnRight.disabled = false;
          btnFarRight.disabled = false;
        }
    }
  });
});