import axios from 'axios';

export default function getIdData(bookId) {
    const BASE_URL = `https://books-backend.p.goit.global/books/${bookId}`
    return axios.get(BASE_URL)
.then(response => {
    if (response.status !== 200) {
      throw new Error();
    }

    return response.data;
  });
}

