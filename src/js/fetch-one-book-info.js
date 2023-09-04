import axios from 'axios';
const baseUrl = `https://books-backend.p.goit.global/`;
const iD = `643282b1e85766588626a0dc`;
export default function getIdData() {
  const url = `${baseUrl}books/${iD}`;
  return axios.get(url).then(response => {
    if (response.status !== 200) {
      throw new Error();
    }

    return response.data;
  });
}
