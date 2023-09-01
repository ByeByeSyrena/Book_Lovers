// const arraTest = [
    //     {
//         id: '1122334',
//         img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
//         alt: 'book images',
//         title: 'Book title',
//         category: 'categorya',
//         description:
//           'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
//         author: 'book author',
//       },
//       {
//         id: '1122333',
//         img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
//         alt: 'book images',
//         title: 'Book title',
//         category: 'categorya',
//         description:
//           'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
//         author: 'book author',
//       },
//       {
//         id: '1122332',
//         img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
//         alt: 'book images',
//         title: 'Book title',
//         category: 'categorya',
//         description:
//           'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
//         author: 'book author',
//       },
//       {
//         id: '1122331',
//         img: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png',
//         alt: 'book images',
//         title: 'Book title',
//         category: 'categorya',
//         description:
//           'Lorem ipsum dolor, sit amet consectetur adipisicing elit Provident ducimus sunt nostrum esse enim obcaecati cupiditate est veniam assumenda neque ea aut quam facilis deserunt laboriosam incidunt nemo, alias ex',
//         author: 'book author',
//       },
// ]

// localStorage.setItem(BOOKS_CARDS, JSON.stringify(arraTest))



const BOOKS_CARDS = 'bookCards';
let bookArray = JSON.parse(localStorage.getItem(BOOKS_CARDS));

const listMarkup = document.querySelector('.js-markup');
const placeholder = document.querySelector('.js-placeholder');
listMarkup.addEventListener('click', deleteCard);

setMarkup(bookArray);

function deleteCard(evt) {
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
    placeholder.style.display = 'block';
}
}

function creatMarkup(books) {
  return books.reduce(
    (acc, book) =>
      acc +
      ` <li class="shopping__list__item">
        <button type="button" class="shopping__list__btn__delete js-btn-click" >
          <svg width="34" height="34" class="delete__button" id="${book.id}">
            <use href="./images/icons.svg#icon-remove-trash-can"></use>
          </svg>
        </button>
        <img
          class="shopping__list__book__image"
          src="${book.img}"
          alt="${book.alt}"
        />
        <div class="shopping__list__box__description">
          <h3 class="shopping__list__book__title">${book.title}</h3>
          <p class="shopping__list__category">${book.category}</p>
          <p class="shopping__list__description">${book.description}</p>
          <p class="shopping__list__author">${book.author}</p>
        </div>
        <ul class="shopping__list__link__list">
          <li class="shopping__list__link__item">
            <a href=""
              ><img
                class="shopping__list__link__images"
                src="./images/shopping-list/link_image/image_1.png"
                alt="link books"
            /></a>
          </li>
          <li class="shopping__list__link__item">
            <a href=""
              ><img
                class="shopping__list__link__images"
                src="./images/shopping-list/link_image/image_2.png"
                alt="link books"
            /></a>
          </li>
          <li class="shopping__list__link__item">
            <a href=""
              ><img
                class="shopping__list__link__images"
                src="./images/shopping-list/link_image/image_3.png"
                alt="link books"
            /></a>
          </li>
        </ul>
      </li>`,
    ''
  );
}

