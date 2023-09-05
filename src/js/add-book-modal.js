import getIdData from "./fetch-one-book-info";
import markupForOneBook from "./markup-for-one-book";


const bookRefs = {
    selector: document.querySelector(".main-books-container"),
}

const { selector } = bookRefs;

selector.addEventListener("click", showBookInfo);

// function showBookInfo(event){
//     const bookItem = event.target.closest('.book-item');
//     if (bookItem) {
//         const bookId = bookItem.id;
//         getIdData(bookId)
//             .then(data => {
//                 markupForOneBook(data);
//             })
//             .catch(error => console.log(error.message));
//     }
// }





function showBookInfo(event) {
    getTopBooks().then(booksData => {
    
        if (window.innerWidth < 768) {
        const bookItem = event.target.closest('.book-item');
if (bookItem) {
const bookId = bookItem.id;
getIdData(bookId)
.then(data => {
markupForOneBook(data);
})
.catch(error => console.log(error.message));
}
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1240){
    } else if (window.innerWidth >= 1240){
    }
}).catch(error => console.log(error));
}
