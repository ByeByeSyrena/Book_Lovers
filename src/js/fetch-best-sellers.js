import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/top-books ';
export default function getTopBooks() {
    return axios.get()
        .then(response => {
            if (response.status !== 200) {
                throw new Error()
            }
    
            return response.data;
        })

}
