import axios from 'axios';
const BASE_URL = `https://books-backend.p.goit.global/books/`

export default function getIdData(bookId) {
    return axios.get(BASE_URL, {
        params:
        {
            _id: bookId,
        }
    })
.then(response => {
    if (response.status !== 200) {
      throw new Error();
    }

    return response.data;
  });
}

