import axios from "axios";

const backEndUrl = process.env.REACT_APP_BACKEND_URL;

export const getAllBooks = async () => {
  await axios.get(`${backEndUrl}/books`).then((res) => {
    return res.data;
  });
};
