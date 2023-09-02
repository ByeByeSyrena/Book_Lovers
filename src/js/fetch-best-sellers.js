import axios from 'axios';
import { baseUrl } from './refs-api';

export default function getTopBooks() {
    const url = `${baseUrl}books/top-books`
    return axios.get(url)
        .then(response => {
            if (response.status !== 200) {
                throw new Error()
            }
    
            return response.data;
        })

}

