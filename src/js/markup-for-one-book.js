import axios from 'axios';
import getIdData from './fetch-one-book-info';
// ||Відкривання/Закривання модалки  ====>
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-pop-up-open]'),
    closeModalBtn: document.querySelector('[data-modal-pop-up-close]'),
    modal: document.querySelector('[data-modal-pop-up]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      toggleModal();
    }
  });
  document
    .querySelector('.pop-up .pop-up-container')
    .addEventListener('click', event => {
      event._isClicWithInModal = true;
    });
  refs.modal.addEventListener('click', event => {
    if (event._isClicWithInModal) return;
    toggleModal();
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
// <====== Відкривання/Закривання модалки ||

getIdData().then(content => {
  let form = document.querySelector('.pop-up__list__list');

  const htmlForm = `<li class="popup__list__item">
                <img
                  class="popup__list__book__image"
                  src="${content.book_image}"
                  alt="${content.alt}"
                />
                <div class="popup__list__box__description">
                  <h3 class="poup__list__book__title">${content.title}</h3>
                  <p class="popup__list__author">${content.author}</p>
                  <p class="popup__list__description">${content.description}</p>
                  

                  <ul class="popup__list__link__list">
                  <li class="popup__list__link__item">
                    <a href="${content.amazon_product_url}" target="_blank"
                      ><img
                        class="popup__list__link__images"
                        src="${require('../images/shopping-list/link-svg/image1.svg')}"
                        alt="link books"
                    /></a>
                  </li>
                  <li class="popup__list__link__item">
                    <a href="${content.buy_links[1].url}" target="_blank"
                      ><img
                        class="popup__list__link__images"
                        src="${require('../images/shopping-list/link-svg/image2.svg')}"
                        alt="link books"
                    /></a>
                  </li>
                  <li class="popup__list__link__item">
                    <a href="${content.buy_links[5].url}" target="_blank"
                      ><img
                        class="popup__list__link__images"
                        src="${require('../images/shopping-list/link-svg/image3.svg')}"
                        alt="link books"
                    /></a>
                  </li>
                </ul>
                </div>
                
              </li>`;

  form.insertAdjacentHTML('afterbegin', htmlForm);

  const umper = document.querySelector('[pop-up-umper]');
  const localStorBtn = document.querySelector('.yourorder-modal-submit-btn');
  localStorBtn.addEventListener('click', localStorageChange);
  let status = 'add';

  function localStorageChange() {
    if (status === 'add') {
      status = 'del';
      localStorBtn.textContent = 'remove from the shopping list';
      storageBoks.push([content]);
      umper.classList.toggle('is-hidden');
      return;
    } else {
      status = 'add';
      localStorBtn.textContent = 'add to shopping list';
      umper.classList.toggle('is-hidden');
      return;
    }
  }
});

// const b = localStorage.getItem('bookCards')
// console.log(JSON.parse(b))

const storageBoks = [];

// function addBook (oneBok){

//   oneBok
// }

console.log(storageBoks);

// localStorage.setItem(' bookCards' jsonContent);
