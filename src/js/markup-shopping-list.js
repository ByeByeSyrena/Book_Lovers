import { handleViewportResize } from './shopping-list';

const BOOKS_CARDS = 'bookCards';

const arraTest = [
  {
    id: '1',
    img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
    alt: 'book images',
    title: 'Book title 1',
    category: 'categorya',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
    author: 'book author',
  },
  {
    id: '2',
    img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
    alt: 'book images',
    title: 'Book title 2',
    category: 'categorya',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
    author: 'book author',
  },
  {
    id: '3',
    img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
    alt: 'book images',
    title: 'Book title 3',
    category: 'categorya',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
    author: 'book author',
  },
  {
    id: '4',
    img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
    alt: 'book images',
    title: 'Book title 4',
    category: 'categorya',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
    author: 'book author',
  },
  {
    id: '5',
    img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
    alt: 'book images',
    title: 'Book title 5',
    category: 'categorya',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
    author: 'book author',
  },
  {
    id: '6',
    img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
    alt: 'book images',
    title: 'Book title 6',
    category: 'categorya',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
    author: 'book author',
  },
  {
    id: '7',
    img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
    alt: 'book images',
    title: 'Book title 7',
    category: 'categorya',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
    author: 'book author',
  },
  {
    id: '8',
    img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
    alt: 'book images',
    title: 'Book title 8',
    category: 'categorya',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
    author: 'book author',
  },
];

localStorage.setItem(BOOKS_CARDS, JSON.stringify(arraTest));

export let bookArray = JSON.parse(localStorage.getItem(BOOKS_CARDS));

const listMarkup = document.querySelector('.js-markup-shopping__list');
const placeholder = document.querySelector('.js-placeholder');
const pagination = document.querySelector('.pagination');

listMarkup.addEventListener('click', deleteCard);


export function deleteCard(evt) {
    evt.preventDefault();
    if(!evt.target.id){
        return
    }
    const bookIdDelete = evt.target.id;
    const newArray = bookArray.filter(book => book.id !== bookIdDelete);
 
    localStorage.setItem(BOOKS_CARDS, JSON.stringify(newArray));
    bookArray = JSON.parse(localStorage.getItem(BOOKS_CARDS))
  
    handleViewportResize()
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
    (acc, { id, img, alt, title, category, description, author }) =>
      acc +
      `<li class="shopping__list__item ">
        <button type="button" class="shopping__list__btn__delete delete__button" id="${id}">
        </button>
        <img
          class="shopping__list__book__image"
          src="${img}"
          alt="${alt}"
        />
        <div class="shopping__list__box__description">
          <h3 class="shopping__list__book__title">${title}</h3>
          <p class="shopping__list__category">${category}</p>
          <p class="shopping__list__description">${description}</p>
          <p class="shopping__list__author">${author}</p>
        </div>
        <ul class="shopping__list__link__list">
        <li class="shopping__list__link__item">
          <a href=""
            ><img
              class="shopping__list__link__images amazon"
              src="${require('../images/shopping-list/link-svg/image1.svg')}"
              alt="link books amazon"
          /></a>
        </li>
        <li class="shopping__list__link__item">
          <a href=""
            ><img
              class="shopping__list__link__images"
              src="${require('../images/shopping-list/link-svg/image2.svg')}"
              alt="link books"
          /></a>
        </li>
        <li class="shopping__list__link__item">
          <a href=""
            ><img
              class="shopping__list__link__images"
              src="${require('../images/shopping-list/link-svg/image3.svg')}"
              alt="link books"
          /></a>
        </li>
      </ul>
      </li>`,
    ''
  );
}
