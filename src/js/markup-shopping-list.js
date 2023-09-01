const BOOKS_CARDS = 'bookCards';
const bookArray = JSON.parse(localStorage.getItem(BOOKS_CARDS)) ?? [];

const listMarkup = document.querySelector('.js-markup')
const btnClick = document.querySelector('.js-btn-click');
const placeholder = document.querySelector('js-placeholder')

btnClick.addEventListener('click', deleteCard);

function deleteCard (evt) {
  const bookIdDelete = evt.currentTarget.id;
  console.log(bookIdDelete);
  bookArray.filter(book => book.id !== bookIdDelete);
  return localStorage.setItem(BOOKS_CARDS, JSON.stringify(bookArray));
};

listMarkup.innerHTML = creatMarkup(bookArray);

function creatMarkup(books) {
    console.log(books)
    return books.reduce((acc, book) => acc + 
       ` <li class="shopping__list__item">
        <button type="button" class="shopping__list__btn__delete js-btn-click id="${book.id}">
          <svg width="34" height="34" class="delete__button">
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
      </li>`, ""
    )

}
