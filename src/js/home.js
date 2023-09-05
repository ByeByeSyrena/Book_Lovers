import getAllCategories from "./fetch-category-list";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import markupCategoryList from "./markup-category-list";
import getCategoryData from "./fetch-one-category";
import getTopBooks from "./fetch-best-sellers";
import markupByCategory from "./markup-category";
import markupTopBooks from "./markup-for-best-sellers";
import markupForTabletOfTopBooks from "./markup-for-tablet";
import markupForDesktopOfTopBooks from "./markup-for-desktop";
import markupForOneBook from "./markup-for-one-book";
import getIdData from "./fetch-one-book-info";

const listCategories = document.querySelector(".categories-list")
const mainTitleEl = document.querySelector(".main-title")
const bestSellersContainer = document.querySelector(".main-books-container");
let listEl

getAllCategories()
    .then(allCategories => {
      allCategories.map(categoryName => markupCategoryList(categoryName))
       listEl = document.querySelectorAll(".item-category")
   })
   .catch(() => Notify.failure('Sorry, please reload the page'))

listCategories.addEventListener("click", onClickCategory)

getBestSellers();

function onClickCategory(e) {
   const activeLiEl = e.target;
   const nameCategory = activeLiEl.dataset.name;
   listEl.forEach(li => {
       li.classList.remove("active")
   })

    activeLiEl.classList.add("active")
    bestSellersContainer.innerHTML = "";

   if (nameCategory) {
     mainTitleEl.innerHTML = nameCategory;
     getCategoryData(nameCategory)
       .then(booksData => {
           booksData.map(book => markupByCategory(book))
       })
       .catch(error => console.log(error))

   } else {
       getBestSellers();
  
   }
}

function getBestSellers() {
    getTopBooks().then(booksData => {
        mainTitleEl.innerHTML = 'Best Sellers <span class="colored">Books</span>';

        if (window.innerWidth < 768) {
            bestSellersContainer.innerHTML = markupTopBooks(booksData);

            const bookItems = document.querySelectorAll(".book-item");
            bookItems.forEach(item => {
                item.addEventListener("click", getBookCard);
            });
        } else if (window.innerWidth >= 768 && window.innerWidth <= 1240) {
            bestSellersContainer.innerHTML = markupForTabletOfTopBooks(booksData);
            
            const bookItems = document.querySelectorAll(".book-item");
            bookItems.forEach(item => {
                item.addEventListener("click", getBookCard);
            });
        } else if (window.innerWidth >= 1240) {
            bestSellersContainer.innerHTML = markupForDesktopOfTopBooks(booksData);

            const bookItems = document.querySelectorAll(".book-item");
            bookItems.forEach(item => {
                item.addEventListener("click", getBookCard);
            });
        }
        
        function getBookCard(event) {
            const selectedBookElement = event.target.closest('.book-item');
            if (selectedBookElement) {
                const selectedBookId = selectedBookElement.dataset.id;
                getIdData(selectedBookId)
                    .then(data => {
                        const modalMarkup = markupForOneBook(data);
                const modalContainer = document.getElementById('modal-container');
                modalContainer.innerHTML = modalMarkup;
                    })
                    .catch(error => console.log(error.message));
            }
        }
    }).catch(error => console.log(error));
}


// selector.addEventListener('click', showBookInfo);

// function showBookInfo(event) {
//   const bookItem = event.target.closest('.book-item');
//   if (bookItem) {
//     const bookId = bookItem.id;
//     getIdData(bookId)
//       .then(data => {
//         markupForOneBook(data);
//       })
//       .catch(error => console.log(error.message));
//   }
// }