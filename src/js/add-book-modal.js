import getIdData from "./fetch-one-book-info";
import markupForOneBook from "./markup-for-one-book";

const bookRefs = {
    selector: document.querySelector(".main-books-container"),
}

const { selector } = bookRefs;

selector.addEventListener("click", showBookInfo);

let bookId = "";

function showBookInfo(event){
    const bookItem = event.target.closest('.book-item');
    if (bookItem) {
        bookId = bookItem.dataset.bookId;
        getIdData(bookId)
            .then(data => {
                const oneBookMarkup = markupForOneBook(data);
                
                const modalContainer = document.createElement('div');
                modalContainer.classList.add('modal-container');
                modalContainer.innerHTML = oneBookMarkup;
                
                document.body.appendChild(modalContainer);
            })
            .catch(error => console.log(error.message));
    }
}
