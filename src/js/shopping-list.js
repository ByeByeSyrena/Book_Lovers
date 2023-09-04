import { bookArray, setMarkup } from './markup-shopping-list';

const BOOKS_CARDS = 'bookCards';

const pagination = document.querySelector('.pagination');
const nextPage = document.querySelector('.next-page');
const prevPage = document.querySelector('.prev-page');
const firstPage = document.querySelector('.first-page');
const lastPage = document.querySelector('.last-page');
const numbersPage = document.querySelector('.numbers');

pagination.addEventListener('click', onClick);
numbersPage.addEventListener('click', onActiveBtn);

let perPage = null;
let totalPages = 0;
let pageNumber = 1;

export function handleViewportResize() {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth < 767) {
    perPage = 4;
  } else {
    perPage = 3;
  }

  totalPages = Math.ceil(bookArray.length / perPage);
  if (pageNumber === 1 || pageNumber > totalPages) {
    numbersPage.innerHTML = creatButtonPages(totalPages);
  }

  if (pageNumber === 1) {
    const firstElement = numbersPage.firstElementChild;
    firstElement?.classList.add('active-page');
  }

  if (numbersPage.children.length > totalPages || pageNumber > totalPages) {
    const lastElement = numbersPage.lastElementChild;
    if (pageNumber > totalPages) {
      pageNumber -= 1;
      lastElement?.classList.add('active-page');
      setMarkupBooks(perPage);
      return
    }
    numbersPage.removeChild(lastElement)
  }

  setMarkupBooks(perPage);
}

window.addEventListener('resize', handleViewportResize);
window.addEventListener('load', handleViewportResize);

export function setMarkupBooks(currentItem) {
  const startIndex = (pageNumber - 1) * currentItem;
  const endIndex = startIndex + currentItem;
  const visibleBooks = bookArray.slice(startIndex, endIndex);

  setMarkup(visibleBooks);
}

function onClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const buttonValue = evt.target.textContent;
  if (buttonValue === '<') {
    pageNumber -= 1;
  } else if (buttonValue === '>') {
    pageNumber += 1;
  } else if (buttonValue === '<<') {
    pageNumber = 1;
  } else if (buttonValue === '>>') {
    pageNumber = totalPages;
  } else {
    pageNumber = Number(buttonValue);
  }

  if (pageNumber <= 1) {
    firstPage.disabled = true;
    prevPage.disabled = true;
    nextPage.disabled = false;
    lastPage.disabled = false;
  } else if (pageNumber >= totalPages) {
    lastPage.disabled = true;
    nextPage.disabled = true;
    prevPage.disabled = false;
    firstPage.disabled = false;
  } else if (pageNumber < totalPages || pageNumber > 1) {
    nextPage.disabled = false;
    lastPage.disabled = false;
    prevPage.disabled = false;
    firstPage.disabled = false;
  }

  handleViewportResize();
}

function creatButtonPages(page) {
  const visiblePages = [];
  for (let i = 1; i <= page; i += 1) {
    if (i) {
      visiblePages.push(i);
    }
  }
  return visiblePages.reduce(
    (acc, page) =>
      acc +
      `<button type="button" class="page-link page-item current-page">${page}</button>`,
    ''
  );
}

function onActiveBtn(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveBtn = document.querySelector('.active-page');
  currentActiveBtn?.classList.remove('active-page');

  const nextActivBtn = evt.target;
  nextActivBtn.classList.add('active-page');
}
