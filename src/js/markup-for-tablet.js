// export default function markupForTabletOfTopBooks(smallArrayOfTopCategories = []) {
//     return smallArrayOfTopCategories.map(({ books }) => {
//         return `<h2 class="name-category" data-name="${books[0].list_name}">${books[0].list_name}</h2>
// <div class="justify-books">
//             <div class="book-item">
//                 <img class="best-books-img" src="${books[0].book_image}" alt="${books[0].title}" width="218" height="316">
//                 <h3 class="book-title" data-name="${books[0].title}">${books[0].title}</h3>
//                 <p class="author-bestsellers" data-name="${books[0].author}">${books[0].author}</p>
//             </div>
           
//             <div class="book-item">
//                 <img class="best-books-img" src="${books[1].book_image}" alt="${books[1].title}" width="218" height="316">
//                 <h3 class="book-title" data-name="${books[1].title}">${books[1].title}</h3>
//                 <p class="author-bestsellers" data-name="${books[1].author}">${books[1].author}</p>
//             </div>
            
//             <div class="book-item">
//                 <img class="best-books-img" src="${books[2].book_image}" alt="${books[2].title}" width="218" height="316">
//                 <h3 class="book-title" data-name="${books[2].title}">${books[2].title}</h3>
//                 <p class="author-bestsellers" data-name="${books[2].author}">${books[2].author}</p>
//                 <div class="see-more-button-container"><button type="button" class="see-more-button">SEE MORE</button></div>

//             </div>
           
//             <div class="additional-class">
//                 <img class="best-books-img" src="${books[3].book_image}" alt="${books[3].title}" width="218" height="316">
//                 <h3 class="book-title" data-name="${books[3].title}">${books[3].title}</h3>
//                 <p class="author-bestsellers" data-name="${books[3].author}">${books[3].author}</p>
//             </div>
           
//             <div class="additional-class">
//                 <img class="best-books-img" src="${books[4].book_image}" alt="${books[4].title}" width="218" height="316">
//                 <h3 class="book-title" data-name="${books[4].title}">${books[4].title}</h3>
//                 <p class="author-bestsellers" data-name="${books[4].author}">${books[4].author}</p>
//                 <div class="see-more-button-container"><button type="button" class="see-more-button">SEE MORE</button></div>
//             </div>
//             </div>
//         `;
//     }).join('');
// }


export default function markupForTabletOfTopBooks(smallArrayOfTopCategories = []) {

    const renderTabletMarkupOfBest = smallArrayOfTopCategories.map((bookData) => {
    return `
      <div class="category-data">
        <h2 class="name-category" data-name="${bookData.list_name}">${bookData.list_name}</h2>
        <br>
        <div class="book-item-wrap">
            ${innerMarkupOfTabletBestSellers(bookData.books)}
        </div>
      </div>
    `;
  });

  console.log(renderTabletMarkupOfBest);
  return renderTabletMarkupOfBest.join('');
}

function innerMarkupOfTabletBestSellers(books) {
    const sliceArray = books.slice(0, 3);
    const booksHtml = sliceArray.map(oneBook => {
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


