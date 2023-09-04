
export default function markupForTabletOfTopBooks(smallArrayOfTopCategories = []) {
    return smallArrayOfTopCategories.map(({ books }) => {
        let count = 0;
        const booksHTML = books.map(({ book_image, title, author }) => {
            count++;
            const additionalClass = count % 4 === 0 || count % 5 === 0 ? 'additional-class' : '';

            return `
                <div class="book-item ${additionalClass}">
                    <img class="best-books-img" src="${book_image}" alt="${title}" width="218" height="316">
                    <h3 class="book-title" data-name="${title}">${title}</h3>
                    <p class="author-tablet" data-name="${author}">${author}</p>
                    <div class="see-more-button-container"><button type="button" class="see-more-button">SEE MORE</button></div>
                </div>
            `;
        }).join('');
        return booksHTML;
    }).join('');
}
