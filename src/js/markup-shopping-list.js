const BOOKS_CARDS = "bookCards";
const bookArray = JSON.parse(localStorage.getItem(BOOKS_CARDS)) ?? [];

const deleteCard = (evt) => {
     console.log(evt)
}

const btnClick = document.querySelector(".js-btn-click")
btnClick.addEventListener('click', deleteCard);



// function creatMarkup(arr) {
//     return (
//         <li class="shopping__list__item">
//         <button type="button" class="shopping__list__btn__delete js-btn-click">
//           <svg width="34" height="34" class="delete__button">
//             <use href="./images/icons.svg#icon-remove-trash-can"></use>
//           </svg>
//         </button>
//         <img
//           class="shopping__list__book__image"
//           src="https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png"
//           alt="book images"
//         />
//         <div class="shopping__list__box__description">
//           <h3 class="shopping__list__book__title">Book title</h3>
//           <p class="shopping__list__category">categorya</p>
//           <p class="shopping__list__description">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//             Provident ducimus sunt nostrum esse enim obcaecati cupiditate
//             est veniam assumenda neque ea aut quam facilis deserunt
//             laboriosam incidunt nemo, alias ex.
//           </p>
//           <p class="shopping__list__author">book author</p>
//         </div>
//         <ul class="shopping__list__link__list">
//           <li class="shopping__list__link__item">
//             <a href=""
//               ><img
//                 class="shopping__list__link__images"
//                 src="./images/shopping-list/link_image/image_1.png"
//                 alt="link books"
//             /></a>
//           </li>
//           <li class="shopping__list__link__item">
//             <a href=""
//               ><img
//                 class="shopping__list__link__images"
//                 src="./images/shopping-list/link_image/image_2.png"
//                 alt="link books"
//             /></a>
//           </li>
//           <li class="shopping__list__link__item">
//             <a href=""
//               ><img
//                 class="shopping__list__link__images"
//                 src="./images/shopping-list/link_image/image_3.png"
//                 alt="link books"
//             /></a>
//           </li>
//         </ul>
//       </li>
//     )

// }