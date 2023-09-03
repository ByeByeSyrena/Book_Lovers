import { creatMarkup } from './markup-shopping-list';

const BOOKS_CARDS = 'bookCards';

document.addEventListener("DOMContentLoaded", function () {
  const pagination = document.getElementById('pagination');
  const quantityCards = document.querySelector('.shopping__list__list');
  const pageList = document.querySelector('.pagination-list');
  const pageItem = document.querySelectorAll('.page-item');
  const lastPage = document.querySelector('.last-page');
  const nextPage = document.querySelector('.next-page');
  const prevPage = document.querySelector('.prev-page');
  const firstPage = document.querySelector('.first-page');

  const perPage = 3;
  let bookArray = JSON.parse(localStorage.getItem(BOOKS_CARDS));
  let totalPages = Math.ceil(bookArray.length / perPage);
  let currentPage = 1;
  
  function getPages(totalPages, currentPage, maxLength) {
    function range(start, end) {
      return Array.from(Array(end - start + 1), (_, i) => i + start);
    }
  
    const sideWidth = maxLength < 9 ? 1 : 2;
    const leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    const rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  
    if (totalPages <= maxLength) {
      return range(1, totalPages);
    } else if (currentPage <= maxLength - sideWidth - 1 - rightWidth) {
      return range(1, maxLength - sideWidth - 1).concat('...', totalPages);
    } else if (currentPage >= totalPages - sideWidth - 1 - rightWidth) {
      return [1, '...'].concat(
        range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
      );
    } else {
      return [1, '...'].concat(
        range(currentPage - leftWidth, currentPage + rightWidth),
        ['...', totalPages]
      );
    }
  }
  
  
  function paginateArray(array, currentPage, perPage) {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return array.slice(startIndex, endIndex);
  }
  
  function observeCard(page) {
    currentPage = page;
  
    const visiblePages = paginateArray(bookArray, currentPage, perPage);
  
    quantityCards.innerHTML = '';
  
    visiblePages.forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.classList.add('shopping__list__item');
      bookItem.innerHTML = creatMarkup([book]);
      quantityCards.appendChild(bookItem);
    });
  
    pageList
      .querySelectorAll('.page-item.current-page, .page-item.dots')
      .forEach(item => item.remove());
  
    totalPages = Math.ceil(bookArray.length / perPage);
  
    getPages(totalPages, currentPage, totalPages).forEach(item => {
      const pageItemElement = document.createElement('li');
      pageItemElement.classList.add('page-item');
      pageItemElement.classList.add(item === currentPage ? 'current-page' : 'dots');
  
      const pageLinkElement = document.createElement('a');
      pageLinkElement.classList.add('page-link');
      pageLinkElement.href = 'javascript:void(0)';
      pageLinkElement.textContent = item === currentPage ? item : '...';
  
      if (item !== '...') {
        pageLinkElement.addEventListener('click', () => observeCard(item));
      }
  
      pageItemElement.appendChild(pageLinkElement);
      pageList.insertBefore(pageItemElement, nextPage);
  
      if (item === currentPage) {
        pageItemElement.classList.add('active');
      }
    });
  
    prevPage.classList.toggle('disable', currentPage === 1);
    firstPage.classList.toggle('disable', currentPage === 1);
    nextPage.classList.toggle('disable', currentPage === totalPages);
    lastPage.classList.toggle('disable', currentPage === totalPages);
  }
  
  pagination.append(
    pageItem[0].cloneNode(true).classList.add('prev-page'),
    pageItem[1].cloneNode(true).classList.add('next-page'),
    pageItem[2].cloneNode(true).classList.add('first-page'),
    pageItem[3].cloneNode(true).classList.add('last-page')
  );
  
  pageItem[0].querySelector('.page-link').addEventListener('click', () =>
    observeCard(currentPage - 1)
  );
  pageItem[1].querySelector('.page-link').addEventListener('click', () =>
    observeCard(currentPage + 1)
  );
  pageItem[2].querySelector('.page-link').addEventListener('click', () =>
    observeCard(1)
  );
  pageItem[3].querySelector('.page-link').addEventListener('click', () =>
    observeCard(totalPages)
  );
  
  observeCard(currentPage);  
});