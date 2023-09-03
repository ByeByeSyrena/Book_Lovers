import { baseUrl } from "./refs-api"; 

const topBooks = [ 
    {
        category: "Bestsellers",
        url: "https://books-backend.p.goit.global",
        title: "Book 1",
        author: "Author 1",
    },
    {
        category: "Science Fiction", 
        url: "https://books-backend.p.goit.global",
        title: "Book 2",
        author: "Author 2",
    },
    {
        category: "Fantasy",
        url: "https://books-backend.p.goit.global", 
        title: "Book 3", 
        author: "Author 3",
    },
    {
        category: "Detectives",
        url: "https://books-backend.p.goit.global", 
        title: "Book 4",
        author: "Author 4", 
    },
];

export default function markupTopBooks() {
    const booksContainerEl = document.querySelector('.main-books-container');
    booksContainerEl.innerHTML = '';
    topBooks.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.innerHTML = `<h2>${book.category})</h2>, <h3>${book.author}</h3>, <p>${book.category}</p>`;
        booksContainerEl.appendChild(bookItem);
    });

    displayTopBooks();  
  
}   





//export default function markupTopBooks(bookTop) {
//  const bookElement = document.createElement('div');
//bookElement.classList.add('book');
//    const titleElement = document.createElement('h2');
//    titleElement.textContent = bookTop.title;
//    const authorElement = document.createElement('p'); 
//    authorElement.textContent = `Автор: ${bookTop.author}`;

//    bookElement.appendChild(titleElement);
//    bookElement.appendChild(authorElement); 


//   booksContainerEl.appendChild(bookElement); 
     
 
//    const bookContainerEl = document.querySelector('.main-books-container');
//    bookContainerEl.appendChild(bookElement);      
//} 
             
//console.log(markupTopBooks);       
            
    // booksContainerEl.innerHTML = '';
    //topBookData.forEach(book => {
     //   const li = document.createElement('li');
      //  li.textContent = book.title;
        //booksContainerEl.appendChild(li);
        // booksContainerEl.insertAdjacentHTML("beforeend", liEl);
       
 
    // listCategories.insertAdjacentHTML("beforeend",liEl)
    // console.log(topBookData);
    // АННА побудувати html для топових книг 
    // вставити в родітєля(booksContainerEl)
   
