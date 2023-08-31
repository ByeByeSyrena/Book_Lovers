import getAllCategories from "./fetch-category-list";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import markupCategoryList from "./markup-category-list";
import getCategoryData from "./fetch-one-category";

const listCategories = document.querySelector(".categories-list")
const mainTitleEl = document.querySelector(".main-title")

getAllCategories()
    .then(allCategories => {
       allCategories.map(categoryName => markupCategoryList(categoryName)) 
    
    })
    .catch(() => Notify.failure('Sorry, please reload the page'))

listCategories.addEventListener("click", onClickCategory)

function onClickCategory(e) {
    const nameCategory = e.target.dataset.name;
    if (nameCategory) {
        getCategoryData(nameCategory)
        mainTitleEl.innerHTML = nameCategory;
    } else {
        // відправляємо запит на бестселер
    }

}