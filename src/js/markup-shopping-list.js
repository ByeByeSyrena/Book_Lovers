import { handleViewportResize } from './shopping-list';

const BOOKS_CARDS = 'bookCards';

export let bookArray = JSON.parse(localStorage.getItem(BOOKS_CARDS));

const listMarkup = document.querySelector('.js-markup-shopping__list');
const placeholder = document.querySelector('.js-placeholder');
const pagination = document.querySelector('.pagination');

listMarkup.addEventListener('click', deleteCard);

export function deleteCard(evt) {
  if (!evt.target.id) {
    return;
  }
  const bookIdDelete = evt.target.id;

  const newArray = bookArray.filter(book => book._id !== bookIdDelete);

  localStorage.setItem(BOOKS_CARDS, JSON.stringify(newArray));
  bookArray = JSON.parse(localStorage.getItem(BOOKS_CARDS));

  handleViewportResize();
}

export function setMarkup(array) {
  listMarkup.innerHTML = creatMarkup(array);
  if (array.length) {
    placeholder.style.display = 'none';
    listMarkup.style.display = 'flex';
    pagination.style.display = 'flex';
  } else {
    listMarkup.style.display = 'none';
    pagination.style.display = 'none';
    placeholder.style.display = 'flex';
  }
}

export function creatMarkup(books) {
  return books.reduce(
    (
      acc,
      { _id, book_image, title, list_name, description, author, buy_links }
    ) =>
      acc +
      `<li class="shopping__list__item ">
        <button type="button" class="shopping__list__btn__delete delete__button" id="${_id}">
        </button>
        <img
          class="shopping__list__book__image"
          src="${
            book_image
              ? book_image
              : 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png'
          }"
          alt="${title ? title : 'Sorry no title'}"
        />
        <div class="shopping__list__box__description">
          <h3 class="shopping__list__book__title">${
            title ? title : 'Sorry no title'
          }</h3>
          <p class="shopping__list__category">${
            list_name ? list_name : 'Sorry no category'
          }</p>
          <p class="shopping__list__description">${
            description ? description : 'Sorry no description'
          }</p>
          <p class="shopping__list__author">${author}</p>
        </div>
        <ul class="shopping__list__link__list">
        <li class="shopping__list__link__item">
          <a href="${buy_links[0].url}" target="_blank"
            ><img
              class="shopping__list__link__images amazon"
              src="${require('../images/shopping-list/link-svg/image1.svg')}"
              alt="${buy_links[0].name}"
          /></a>
        </li>
        <li class="shopping__list__link__item">
          <a href="${buy_links[1].url}" target="_blank"
            ><img
              class="shopping__list__link__images"
              src="${require('../images/shopping-list/link-svg/image2.svg')}"
              alt="${buy_links[1].url}"
          /></a>
        </li>
        <li class="shopping__list__link__item">
          <a href="${buy_links[4].url}" target="_blank"
            ><img
              class="shopping__list__link__images"
              src="${require('../images/shopping-list/link-svg/image3.svg')}"
              alt="${buy_links[4].name}"
          /></a>
        </li>
      </ul>
      </li>`,
    ''
  );
}

// localStorage.clear('bookCards');
// localStorage.clear('bookCard');
// localStorage.clear('BOOKS_CARDS');
