import getIdData from './fetch-one-book-info';

const items = JSON.parse(localStorage.getItem('bookCards')) || [];

export default function markupForOneBook({
  _id,
  book_image,
  buy_links,
  author,
  description,
  title,
}) {
  getIdData(_id).then(content => {
    const umper = document.querySelector('[pop-up-umper]');
    const localStorBtn = document.querySelector('.yourorder-modal-submit-btn');

    if (items.find(option => option._id === content._id)) {
      localStorBtn.textContent = 'remove from the shopping list';
      umper.classList.remove('is-hidden');
    } else {
      umper.classList.add('is-hidden');

      localStorBtn.textContent = ' add to shopping list';
    }
  });

  getIdData(_id).then(content => {
    const umper = document.querySelector('[pop-up-umper]');
    const localStorBtn = document.querySelector('.yourorder-modal-submit-btn');
    localStorBtn.addEventListener('click', localStorageChange);

    function localStorageChange() {
      if (items.find(option => option._id === content._id)) {
        localStorBtn.textContent = ' add to shopping list';

        umper.classList.add('is-hidden');
        const deletable = content._id;

        for (let i = 0, len = items.length; i < len; i++) {
          if (items[i]._id === deletable) {
            items.splice(i, 1);
            break;
          }
        }

        localStorage.setItem('bookCards', JSON.stringify(items));
        return;
      } else {
        umper.classList.remove('is-hidden');
        localStorBtn.textContent = 'remove from the shopping list';
        items.push(content);
        localStorage.setItem('bookCards', JSON.stringify(items));

        return;
      }
    }
  });

  const buyLinks = buy_links || [];
  const sliceArray = buyLinks.slice(0, 3);

  const buyLinksHTML = sliceArray
    .map(
      ({ url, name }) => `
      <li class="">
          <a href="${url}" target="_blank">
              <img class="shopping__list__link__images" src="${getLinkImageSource(
                name
              )}" alt="link books">
          </a>
      </li>
  `
    )
    .join('');

  return `
        <div class="backdrop ">
            <div class="modal-window">
            <button
          class="yourorder-modal-close-btn btn btn-close"
          type="button"
          data-modal-pop-up-close
        >
        </button>

        <ul class="pop-up__list__list">
          <li class="popup__list__item">
                <img
                  class="popup__list__book__image"
                  src="${book_image}"
                  alt="${title}"
                />
                <div class="popup__list__box__description">
                  <h3 class="poup__list__book__title" data-name="${title}">${title}</h3>
                  <p class="popup__list__author" data-name="${author}">${author}</p>
                  <p class="popup__list__description" data-name="${description}">${description}</p>
<ul class="links-to-shops">
                         ${buyLinksHTML}
                    </ul>

                </div>

              </li>
          <li class="box-modal-btn">
            <button class="yourorder-modal-submit-btn" type="button">
              
            </button>
            <div class="umper-form is-hidden" pop-up-umper>
              <p class="umpertitle-pop">
                Сongratulations! You have added the book to the shopping list.
                To delete, press the button “Remove from the shopping list”.
              </p>
            </div>
          </li>
        </ul>
            </div>
        </div>
    `;
}

function getLinkImageSource(linkName) {
  const linkImageMappings = {
    Amazon: require('../images/shopping-list/link-svg/image1.svg'),
    'Apple Books': require('../images/shopping-list/link-svg/image2.svg'),
    'Barnes and Noble': require('../images/shopping-list/link-svg/image3.svg'),
  };

  return linkImageMappings[linkName] || '';
}
