import axios from "axios";
import { bookData } from "../types";

const backEndUrl = process.env.REACT_APP_BACKEND_URL;

export const getAllBooks = async () => {
  var mydata:bookData[] = [];
  await axios.get(`${backEndUrl}/api/books`).then((res) => {
    mydata=res.data;
    return mydata;

  });
  return mydata;
};
