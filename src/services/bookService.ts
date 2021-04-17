import axios from "axios";


export const getALBooks = async () => {
  await axios.get(`/books`).then((res) => {
    const books = res.data;
  });
};
