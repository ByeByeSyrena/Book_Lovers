const BOOKS_CARDS = 'bookCards';

// const arraTest = [
//   {
//     id: '1122334',
//     img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
//     alt: 'book images',
//     title: 'Book title',
//     category: 'categorya',
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
//     author: 'book author',
//   },
//   {
//     id: '1122333',
//     img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
//     alt: 'book images',
//     title: 'Book title',
//     category: 'categorya',
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
//     author: 'book author',
//   },
//   {
//     id: '1122332',
//     img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
//     alt: 'book images',
//     title: 'Book title',
//     category: 'categorya',
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
//     author: 'book author',
//   },
//   {
//     id: '1122331',
//     img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
//     alt: 'book images',
//     title: 'Book title',
//     category: 'categorya',
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
//     author: 'book author',
//   },
//   {
//     id: '1123411',
//     img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
//     alt: 'book images',
//     title: 'Book title',
//     category: 'categorya',
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
//     author: 'book author',
//   },
//   {
//     id: '23412351234',
//     img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
//     alt: 'book images',
//     title: 'Book title',
//     category: 'categorya',
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
//     author: 'book author',
//   },
//   {
//     id: '1324234',
//     img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
//     alt: 'book images',
//     title: 'Book title',
//     category: 'categorya',
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
//     author: 'book author',
//   },
//   {
//     id: '1123412341',
//     img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
//     alt: 'book images',
//     title: 'Book title',
//     category: 'categorya',
//     description:
//       'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
//     author: 'book author',
//   },
// ];

// localStorage.setItem(BOOKS_CARDS, JSON.stringify(arraTest));

let bookArray = JSON.parse(localStorage.getItem(BOOKS_CARDS));

const listMarkup = document.querySelector('.js-markup-shopping__list');
const placeholder = document.querySelector('.js-placeholder');
listMarkup.addEventListener('click', deleteCard);

setMarkup(bookArray);

export function deleteCard(evt) {
    evt.preventDefault();
    if(!evt.target.id){
        return
    }
    
    const bookIdDelete = evt.target.id;
    const newArray = bookArray.filter(book => book.id !== bookIdDelete);
 
    localStorage.setItem(BOOKS_CARDS, JSON.stringify(newArray));
    bookArray = JSON.parse(localStorage.getItem(BOOKS_CARDS))
  
    setMarkup(bookArray)

}

function setMarkup(array) {
  listMarkup.innerHTML = creatMarkup(array);
  if (array.length) {
    placeholder.style.display = 'none';
  } else {
    placeholder.style.display = 'flex';
  }
}

export function creatMarkup(books) {
  return books.reduce(
    (acc, { id, img, alt, title, category, description, author }) =>
      acc +
      ` <li class="shopping__list__item ">
        <button type="button" class="shopping__list__btn__delete">
        <svg class="delete__button" id="${id}"></svg>
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
                class="shopping__list__link__images"
                src="${require('../images/shopping-list/link_image/image_1.png')}"
                alt="link books"
            /></a>
          </li>
          <li class="shopping__list__link__item">
            <a href=""
              ><img
                class="shopping__list__link__images"
                src="${require('../images/shopping-list/link_image/image_2.png')}"
                alt="link books"
            /></a>
          </li>
          <li class="shopping__list__link__item">
            <a href=""
              ><img
                class="shopping__list__link__images"
                src="${require('../images/shopping-list/link_image/image_3.png')}"
                alt="link books"
            /></a>
          </li>
        </ul>
      </li>`,
    ''
  );
}
