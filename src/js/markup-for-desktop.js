export default function markupForDesktopOfTopBooks(smallArrayOfTopCategories = []) {
    return smallArrayOfTopCategories.map(({ books }) => {
        return `<h2 class="name-category" data-name="${books[0].list_name}">${books[0].list_name}</h2>
        <div class="justify-books">
            <div class="book-item">
            <div class ="book-item-img">
                <img class="best-books-img" src="${books[0].book_image}" alt="${books[0].title}" width="218" height="316">
                <p class = "best-books-text"> quick view </p>
                </div>
                <h3 class="book-title" data-name="${books[0].title}">${books[0].title}</h3>
                <p class="author-bestsellers" data-name="${books[0].author}">${books[0].author}</p>
            </div>
           
            <div class="book-item">
            <div class ="book-item-img">
                <img class="best-books-img" src="${books[1].book_image}" alt="${books[1].title}" width="218" height="316">
                <p class = "best-books-text"> quick view </p>
                </div>
                <h3 class="book-title" data-name="${books[1].title}">${books[1].title}</h3>
                <p class="author-bestsellers" data-name="${books[1].author}">${books[1].author}</p>
            </div>
            
            <div class="book-item">
            <div class ="book-item-img">
                <img class="best-books-img" src="${books[2].book_image}" alt="${books[2].title}" width="218" height="316">
                <p class = "best-books-text"> quick view </p>
                </div>
                <h3 class="book-title" data-name="${books[2].title}">${books[2].title}</h3>
                <p class="author-bestsellers" data-name="${books[2].author}">${books[2].author}</p>

            </div>
           
            <div class="book-item">
            <div class ="book-item-img">
                <img class="best-books-img" src="${books[3].book_image}" alt="${books[3].title}" width="218" height="316">
                <p class = "best-books-text"> quick view </p>
                </div>
                <h3 class="book-title" data-name="${books[3].title}">${books[3].title}</h3>
                <p class="author-bestsellers" data-name="${books[3].author}">${books[3].author}</p>
            </div>
           
            <div class="book-item">
            <div class ="book-item-img">
                <img class="best-books-img" src="${books[4].book_image}" alt="${books[4].title}" width="218" height="316">
                <p class = "best-books-text"> quick view </p>
                </div>
                <h3 class="book-title" data-name="${books[4].title}">${books[4].title}</h3>
                <p class="author-bestsellers" data-name="${books[4].author}">${books[4].author}</p>
                <div class="see-more-button-container"><button type="button" class="see-more-button">SEE MORE</button></div>
            </div>
            </div>
        `;
    }).join('');
}