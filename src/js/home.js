import getAllCategories from './fetch-category-list';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import markupCategoryList from './markup-category-list';
import getCategoryData from './fetch-one-category';
import getTopBooks from './fetch-best-sellers';
import markupByCategory from './markup-category';
import markupTopBooks from './markup-for-best-sellers';
import markupForTabletOfTopBooks from './markup-for-tablet';
import markupForDesktopOfTopBooks from './markup-for-desktop';
import markupForOneBook from './markup-for-one-book';
import getIdData from './fetch-one-book-info';

const listCategories = document.querySelector('.categories-list');
const mainTitleEl = document.querySelector('.main-title');
const bestSellersContainer = document.querySelector('.main-books-container');
let listEl;

getAllCategories()
  .then(allCategories => {
    allCategories.map(categoryName => markupCategoryList(categoryName));
    listEl = document.querySelectorAll('.item-category');
  })
  .catch(() => Notify.failure('Sorry, please reload the page'));

listCategories.addEventListener('click', onClickCategory);

getBestSellers();

function onClickCategory(e) {
  const activeLiEl = e.target;
  const nameCategory = activeLiEl.dataset.name;
  listEl.forEach(li => {
    li.classList.remove('active');
  });

  activeLiEl.classList.add('active');
  bestSellersContainer.innerHTML = '';

    if (nameCategory) {
        const wordEl = nameCategory.split(' ');
        if (wordEl.length > 1) {
            const lastEl = wordEl.pop();

            wordEl.push(`<span style="color: #4F2EE8;">${lastEl}</span>`);
        }

        const coloredTitle = wordEl.join(' ');

        mainTitleEl.innerHTML = coloredTitle;

    getCategoryData(nameCategory)
       .then(booksData => {
           booksData.map(book => markupByCategory(book))
           const bookItems = document.querySelectorAll(".book-item");
           bookItems.forEach(item => {
               item.addEventListener("click", getBookCard);
           });
       })
       .catch(error => console.log(error))

   } else {
       getBestSellers();
  
   }
}

function getBestSellers() {
  getTopBooks()
    .then(booksData => {
      mainTitleEl.innerHTML = 'Best Sellers <span class="colored">Books</span>';


        if (window.innerWidth < 768) {
            bestSellersContainer.innerHTML = markupTopBooks(booksData);
        } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
            bestSellersContainer.innerHTML = markupForTabletOfTopBooks(booksData);
        } else if (window.innerWidth >= 1440) {
            bestSellersContainer.innerHTML = markupForDesktopOfTopBooks(booksData);
        }

        const bookItems = document.querySelectorAll(".book-item");
        bookItems.forEach(item => {
            item.addEventListener("click", getBookCard);
        });

            const seeMoreButton = document.querySelectorAll(".see-more-button-container");
            seeMoreButton.forEach(item => {
                item.addEventListener("click", getChosenCategory);
            });
    }).catch(error => console.log(error));
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

                const closeButton = modalContainer.querySelector(".btn-close");
                const closeBackdrop = modalContainer.querySelector(".backdrop");

                closeButton.addEventListener("click", removeBookCard);
                window.addEventListener('keydown', e => {
                if (e.key === 'Escape') {
                removeBookCard();
        } 
      });
            })
            .catch(error => console.log(error.message));
    }
}

function removeBookCard(event) {
    const modalWindow = document.getElementById('modal-container');
    if (!event.target.classList.contains("btn-close")) {
        return;
    }

    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = "";
};

getBestSellers();


getAllCategories()
  .then(allCategories => {
    allCategories.map(categoryName => markupCategoryList(categoryName));
    listEl = document.querySelectorAll('.item-category');
  })
  .catch(() => Notify.failure('Sorry, please reload the page'));

listCategories.addEventListener('click', onClickCategory);

getBestSellers();



function getChosenCategory(event) {
    const container = event.target.closest('.see-more-button-container');
    if (container) {
        const nameCategory = container.dataset.category;

        if (nameCategory) {
            const wordEl = nameCategory.split(' ');
            if (wordEl.length > 1) {
                const lastEl = wordEl.pop();
                wordEl.push(`<span style="color: #4F2EE8;">${lastEl}</span>`);
            }

            const coloredTitle = wordEl.join(' ');

            mainTitleEl.innerHTML = `${coloredTitle}`;
        }

        getCategoryData(nameCategory)
            .then(booksData => {
                bestSellersContainer.innerHTML = "";
                booksData.map(book => markupByCategory(book));
                
                const bookItems = document.querySelectorAll(".book-item");
                bookItems.forEach(item => {
                    item.addEventListener("click", getBookCard);
                });
            })
            .catch(error => console.log(error));
    }
}
