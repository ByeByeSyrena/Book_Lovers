export default function markupForDesktopOfTopBooks(smallArrayOfTopCategories = []) {
  const renderDesktopMarkupOfBest = smallArrayOfTopCategories.map(({list_name, books}) => {
    return `
      <div class="category-data">
        <h2 class="name-category" data-name="${list_name}">${list_name}</h2>
       
        <div class="book-item-wrap">
            ${innerMarkupOfDesktopBestSellers(books)}
        </div>
        <div class="see-more-button-container" data-category="${list_name}"><button type="button" class="see-more-button">SEE MORE</button></div>
      </div>
    `
  });

  return renderDesktopMarkupOfBest.join('')
}

function innerMarkupOfDesktopBestSellers(books) {
    
        const booksHtml = books.map(({_id, book_image, title, author}) => {
        return `
            <div class="book-item" data-id="${_id}">
                <img class="best-books-img" src="${book_image}" srcset="${book_image}" alt="${title}" width="218" height="316">
                <h3 class="book-title" data-name="${title}">${title}</h3>
                <p class="author-bestsellers" data-name="${author}">${author}</p>
            </div>
        `;
    });
    
    return booksHtml.join('');
}
