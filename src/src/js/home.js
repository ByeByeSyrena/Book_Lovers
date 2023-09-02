import getAllCategories from "./fetch-category-list";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import markupCategoryList from "./markup-category-list";
import getCategoryData from "./fetch-one-category";
import getTopBooks from "./fetch-best-sellers";
import markupByCategory from "./markup-category";
import markupTopBooks from "./markup-for-best-sellers";

const listCategories = document.querySelector(".categories-list")
const mainTitleEl = document.querySelector(".main-title")
let listEl 

getAllCategories()
    .then(allCategories => {
       allCategories.map(categoryName => markupCategoryList(categoryName)) 
        listEl = document.querySelectorAll(".item-category")
    })
    .catch(() => Notify.failure('Sorry, please reload the page'))

listCategories.addEventListener("click", onClickCategory)

function onClickCategory(e) {
    const activeLiEl = e.target;
    const nameCategory = activeLiEl.dataset.name;
    listEl.forEach(li => {
        li.classList.remove("active")
    })
  
    activeLiEl.classList.add("active")
    if (nameCategory) {
        getCategoryData(nameCategory)
            .then(booksData => {
                booksData.map(book => markupByCategory(book))
            })
            .catch(error => console.log(error))
        
         } else {
        mainTitleEl.innerHTML = 'Best Sellers <span class="colored">Books</span>';
        getTopBooks()
            .then(topBooksData => {
                topBooksData.map(bookTop => markupTopBooks(bookTop));
            })
            .catch(error => console.log(error)); 
    
        
        // АННА функція   markupTopBooks створена для побудови html книг по категоріям
        function updateBooksByCategory(nameCategory) {
            getCategory.getCategory
              getCategoryData(nameCategory)
                .then(booksData => {
                    listEl.forEach(li => li.classList.remove("active"));

                    mainTitleEl.mainTitle;
                    innerHTML = nameCategory;
                    booksData.booksData
                    books.map(book => markupByCategory(book));
                })
                .catch(error => console.error(error));
        }
           
             mainTitleEl.innerHTML = nameCategory;

        if (nameCategory) {
              
        mainTitleEl.innerHTML = nameCategory;
        } else {
            mainTitleEl.mainTitle.innerHTML = 'Best Sellers <span class="colored">Books</span>';
            getTopBooks()
                .then(topBooksData => {
            topBooksData.map(bookTop => markupTopBooks(bookTop));
        })
        .catch(error => console.log(error));
}

    
   
        
        // АННА функція   markupTopBooks створена для побудови html ТОП Книг
        function updateTopBooks(nameCategory) {
            getTopBooks()
                .then(topBooksData => {
                    listEl.forEach(li => li.classList.remove("active"));
                    mainTitleEl.mainTitle
                    innerHTML = 'Best Sellers <span class="colored">Books</span>';
                    topBooksData.map(bookTop => markupTopBooks(bookTop));
                })
                .catch(error => console.error(error));
 
        } 
    }
}

    function onClickCategory(e) {
        const activeLiEl = e.target;
        const nameCategory = activeLiEl.dataset.name;
        listEl.forEach(li => li.classList.remove("active"));
        activeLiEl.classList.add("active");

        if (nameCategory) {
            updateBooksByCategory(nameCategory);

        } else {
            updateTopBooks(nameCategory);
        } 
    }

    getAllCategories()
        .then(allCategories => {
            allCategories
            all.map(categoryName => markupCategoryList(categoryName));
            listEl = document.querySelectorAll(".item-category");
        })

    
    .catch(() => Notify.failure('Sorry, please reload the page'));
    
    listCategories.addEventListener("click", onClickCategory); 
    
    
    