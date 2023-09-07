



export default function markupForOneBook({book_image, buy_links, author, description, title}) {
    const buyLinks = buy_links || [];
    const sliceArray = buyLinks.slice(0, 3);

    const buyLinksHTML = sliceArray.map(({url, name}) => `
        <li class="">
            <a href="${url}" target="_blank">
                <img class="shopping__list__link__images" src="${getLinkImageSource(name)}" alt="link books">
            </a>
        </li>
    `).join('');

    
    let modalHtml = ` <div class="backdrop ">
            <div class="modal-window js-modal">
            <button type="button" class="close-modal-button"> <svg class="close-svg" width="24" height="24">
            ${require('../images/x.close.svg')}
         </svg></button>
         <div class="info-book-conteiner">
         <div class="image-block">
                <img class="best-books-img" src="${book_image}" alt="${title}" width="218" height="316">   </div>
                <div class="info-book">
                <h3 class="book-title" data-name="${title}">${title}</h3>
                <p class="author-bestsellers" data-name="${author}">${author}</p>
                <p class="descriptions" data-name="${description}">${description}</p>
                
                    <ul class="list shop-list">
                        ${buyLinksHTML}
                    </ul>
                </div>
                </div>
                <button type="button" class="btn-local  " id='add'>
                Add to shopping list
              </button>
              <button type="button" class="btn-local hidden" id="remove">
                Remove from the shopping list
              </button>
              <p class="txt-remove hidden">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
                </div>

            </div>
            
        </div>
    `;
    return modalHtml;
}


function getLinkImageSource(linkName) {
    const linkImageMappings = {
        "Amazon": require('../images/shopping-list/link-svg/image1.svg'),
        "Apple Books": require('../images/shopping-list/link-svg/image2.svg'),
        "Barnes and Noble": require('../images/shopping-list/link-svg/image3.svg'),
      
    };


    return linkImageMappings[linkName] || '';
}
