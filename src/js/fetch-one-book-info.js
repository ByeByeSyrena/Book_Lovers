import axios from 'axios';
const baseUrl = `https://books-backend.p.goit.global/`;
export default function getIdData(bookId) {
  const url = `${baseUrl}books/${bookId}`;
  return axios.get(url).then(response => {
    if (response.status !== 200) {
      throw new Error();
    }

    return response.data;
  });
}
