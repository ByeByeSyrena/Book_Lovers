export default function markupForDesktopOfTopBooks(smallArrayOfTopCategories = []) {
  const renderDesktopMarkupOfBest = smallArrayOfTopCategories.map((bookData) => {
    return `
      <div class="category-data">
        <h2 class="name-category" data-name="${bookData.list_name}">${bookData.list_name}</h2>
        <br>
        <div class="book-item-wrap">
            ${innerMarkupOfDesktopBestSellers(bookData.books)}
        </div>
      </div>
    `
  });

  console.log(renderDesktopMarkupOfBest)
  return renderDesktopMarkupOfBest.join('')
}

function innerMarkupOfDesktopBestSellers(books) {
    
        const booksHtml = books.map(oneBook => {
        return `
            <div class="book-item" id="${oneBook._id}">
                <img class="best-books-img" src="${oneBook.book_image}" alt="${oneBook.title}" width="218" height="316">
                <h3 class="book-title" data-name="${oneBook.title}">${oneBook.title}</h3>
                <p class="author-bestsellers" data-name="${oneBook.author}">${oneBook.author}</p>
            </div>
        `;
    });
    
    return booksHtml.join('');
}
