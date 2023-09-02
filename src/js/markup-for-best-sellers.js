const booksContainerEl = document.querySelector(".main-books-container")

export default function markupTopBooks(arr) {  
    return arr
        .map(
            ({
                list_name,
                baseUrl,
                name_book,
                author_book,
            }) => {
        
                return `<h2 class="name-category" data-name="${list_name}">${list_name}</h2>
            <a class="img-book" href="${baseUrl}">
            <h3 class="name-category" data-name="${name_book}">${name_book}</h3>
            <p class="name-category" data-name="${author_book}">${author_book}</p>
            </a>`
            }
        )
     .join('');  
}   

console.log(markupTopBooks); 
            
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
   
