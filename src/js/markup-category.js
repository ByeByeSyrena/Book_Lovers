const booksContainerEl = document.querySelector(".main-books-container")

export default function markupByCategory({_id,book_image,title,author}) {
    const bookHtmlEl = `
        <div data-id="${_id}" class="book-item category-item">
            <img class="best-books-img" src="${book_image}" alt="${title}">
            <h3 class="book-title">${title}</h3>
            <p class="author-bestsellers">${author}</p>
        </div>
    
    `
    booksContainerEl.insertAdjacentHTML("beforeend", bookHtmlEl)
}
