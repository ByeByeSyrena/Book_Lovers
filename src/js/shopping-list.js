import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { creatMarkup, deleteCard } from './markup-shopping-list';

$(document).ready(function () {
  const BOOKS_CARDS = 'bookCards';
  let bookArray = JSON.parse(localStorage.getItem(BOOKS_CARDS) || '[]');

  const totalBooks = bookArray.length;
  const perPage = 3;
  const container = $('#tui-pagination-container');
  const pagination = new Pagination(container[0], {
    totalItems: totalBooks,
    itemsPerPage: perPage,
    visiblePages: 3,
    centerAlign: true,
    template: {
      page: '<a href="#" class="tui-page-btn tui-page-with-margin">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected tui-page-with-margin">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  });

  const shoppingList = $('.shopping__list');
  const ulList = shoppingList.find('.shopping__list__list');

  function updateBooksList() {
    ulList.empty();

    const currentPage = pagination.getCurrentPage();
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = Math.min(startIndex + perPage, totalBooks);

    const visibleBooks = bookArray.slice(startIndex, endIndex);
    const markup = creatMarkup(visibleBooks);
    ulList.html(markup);
  }

  updateBooksList();

  pagination.on('afterMove', function () {
    updateBooksList();
  });

  // deleteCard(() => {
  //   updateBooksList();
  // });
});