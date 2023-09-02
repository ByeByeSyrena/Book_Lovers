import axios from 'axios';
import { baseUrl } from './refs-api';

export default function getAllCategories() {
    const url = `${baseUrl}books/category-list`
    return axios.get(url)
        .then(response => {
            if (response.status !== 200) {
                throw new Error()
            }
    
            return response.data;
        })

}
