const listCategories = document.querySelector(".categories-list")

export default function markupCategoryList({ list_name }) {
    const liEl = `
   <li class="item-category" data-name="${list_name}">${list_name}</li>
    `
    listCategories.insertAdjacentHTML("beforeend",liEl)
}