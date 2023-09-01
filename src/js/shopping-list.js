import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import "./markup-shopping-list"

const container = document.getElementById('tui-pagination-container')

const pagination = new Pagination(container, {
    totalItems: 20,
    itemsPerPage: 3,
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



