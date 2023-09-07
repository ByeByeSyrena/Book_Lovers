const booksContainerEl = document.querySelector(".main-books-container")

export default function markupByCategory(bookData) {
    const bookHtmlEl = `
        <div data-id="${bookData._id}" class="book-item category-item">
            <img class="best-books-img" src="${bookData.book_image}" srcset="${bookData.book_image}" alt="${bookData.title}">
            <h3 class="book-title">${bookData.title}</h3>
            <p class="author-bestsellers">${bookData.author}</p>
        </div>
    
    `
    booksContainerEl.insertAdjacentHTML("beforeend", bookHtmlEl)
}
