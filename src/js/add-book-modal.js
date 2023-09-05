import getIdData from './fetch-one-book-info';
import markupForOneBook from './markup-for-one-book';

const bookRefs = {
  selector: document.querySelector('.main-books-container'),
};

const { selector } = bookRefs;

selector.addEventListener('click', showBookInfo);

function showBookInfo(event) {
  const bookItem = event.target.closest('.book-item');
  if (bookItem) {
    const bookId = bookItem.id;
    getIdData(bookId)
      .then(data => {
        markupForOneBook(data);
      })
      .catch(error => console.log(error.message));
  }

//   const modal = document.querySelector('.modal-windoww');

//   const clickX = event.clientX + window.scrollX;
//   const clickY = event.clientY + window.scrollY;

//   modal.style.left = clickX + 'px';
//   modal.style.top = clickY + 'px';

//   modal.classList.add('show-modal'); 

//   event.preventDefault();
}
