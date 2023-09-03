export default function markupTopBooks(ArrayOfTopCategories = []) {  
    return ArrayOfTopCategories.map(({ list_name, books }) => {
        const booksHTML = books.map(({ book_image, title, author }) => {
            return `
                <div class="book-item">
                    <h2 class="name-category" data-name="${list_name}">${list_name}</h2>
                    <img src="${book_image}" alt="${title}" width="218" height="316">
                        <h3 class="book-title" data-name="${title}">${title}</h3>
                        <p class="author" data-name="${author}">${author}</p>
                </div>
            `;
        }).join('');
        return booksHTML;
    }).join('');  
} 

         
