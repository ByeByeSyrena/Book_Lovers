import { creatMarkup } from './markup-shopping-list';

const BOOKS_CARDS = 'bookCards';

document.addEventListener('DOMContentLoaded', function () {
  const pagination = document.querySelector('.pagination');
  const quantityCards = document.querySelector('.shopping__list__list');
  const pageList = document.querySelector('.pagination-list');
  const pageItem = document.querySelectorAll('.page-item');
  const lastPage = document.querySelector('.last-page');
  const nextPage = document.querySelector('.next-page');
  const prevPage = document.querySelector('.prev-page');
  const firstPage = document.querySelector('.first-page');
  const numbers = document.querySelector('.numbers');

  const perPage = window.innerWidth >= 768 ? 3 : 4;
  let bookArray = JSON.parse(localStorage.getItem(BOOKS_CARDS));
  let currentPage = 1;
  

  function getPages(totalPages, currentPage) {
    const maxLength = window.innerWidth >= 768 ? 7 : 9;
    const visiblePages = [];

    if (totalPages <= maxLength) {
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      if (currentPage <= maxLength - 2) {
        for (let i = 1; i <= maxLength - 2; i++) {
          visiblePages.push(i);
        }
        visiblePages.push('...');
        visiblePages.push(totalPages);
      } else if (currentPage >= totalPages - maxLength + 3) {
        visiblePages.push(1);
        visiblePages.push('...');
        for (let i = totalPages - maxLength + 3; i <= totalPages; i++) {
          visiblePages.push(i);
        }
      } else {
        visiblePages.push(1);
        visiblePages.push('...');
        for (
          let i = currentPage - Math.floor(maxLength / 2);
          i <= currentPage + Math.floor(maxLength / 2);
          i++
        ) {
          visiblePages.push(i);
        }
        visiblePages.push('...');
        visiblePages.push(totalPages);
      }
    }
    return visiblePages;
  }

  function updatePagination() {
    pageList
      .querySelectorAll('.page-item.current-page, .page-item.dots')
      .forEach(item => item.remove());

    numbers.innerHTML = '';

    const totalPages = Math.ceil(bookArray.length / perPage);
    const visiblePages = getPages(totalPages, currentPage);

    visiblePages.forEach(item => {
      const pageItemElement = document.createElement('li');
      pageItemElement.classList.add('page-item');
      pageItemElement.classList.add(
        item === currentPage ? 'current-page' : 'dots'
      );

      const pageLinkElement = document.createElement('a');
      pageLinkElement.classList.add('page-link');
      pageLinkElement.href = 'javascript:void(0)';
      pageLinkElement.textContent = item;

      if (item !== currentPage && item !== '...') {
        pageLinkElement.addEventListener('click', () => observeCard(item));
      }

      pageItemElement.appendChild(pageLinkElement);
      numbers.appendChild(pageItemElement);

      if (item === currentPage) {
        pageItemElement.classList.add('active');
      }
    });

    prevPage.classList.toggle('disable', currentPage === 1);
    firstPage.classList.toggle('disable', currentPage === 1);
    nextPage.classList.toggle('disable', currentPage === totalPages);
    lastPage.classList.toggle('disable', currentPage === totalPages);

    observeCard(currentPage);
  }

  function observeCard(page) {
    if (page === '...') return;
    currentPage = page;

    updatePagination();

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const visibleBooks = bookArray.slice(startIndex, endIndex);

    quantityCards.innerHTML = '';
    visibleBooks.forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.classList.add('shopping__list__item');
      bookItem.innerHTML = creatMarkup([book]);
      quantityCards.appendChild(bookItem);
    });
  }

  prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
      observeCard(currentPage - 1);
    }
  });

  nextPage.addEventListener('click', () => {
    const totalPages = Math.ceil(bookArray.length / perPage);
    if (currentPage < totalPages) {
      observeCard(currentPage + 1);
    }
  });

  firstPage.addEventListener('click', () => {
    if (currentPage !== 1) {
      observeCard(1);
    }
  });

  lastPage.addEventListener('click', () => {
    const totalPages = Math.ceil(bookArray.length / perPage);
    if (currentPage !== totalPages) {
      observeCard(totalPages);
    }
  });

  numbers.addEventListener('click', event => {
    if (event.target.classList.contains('page-link')) {
      const pageNum = parseInt(event.target.textContent);
      if (!isNaN(pageNum) && pageNum !== currentPage) {
        observeCard(pageNum);
      }
    }
  });

  updatePagination();
});
