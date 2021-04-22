import axios from "axios";
import { bookData, bookDataSent } from "../types";

const backEndUrl = process.env.REACT_APP_BACKEND_URL;
const headers = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Credentials": true,
};
export const getAllBooks = async () => {
  var mydata: bookData[] = [];
  await axios
    .get(`${backEndUrl}/api/books`, { headers: headers })
    .then((res) => {
      mydata = res.data;
      return mydata;
    });
  return mydata;
};

export const getBook = async (id: string) => {
  var mydata: bookData = {
    title: "",
    description: "",
    id: 0,
    created_at: "",
    updated_at: "",
  };
  await axios
    .get(`${backEndUrl}/api/books/${id}`, { headers: headers })
    .then((res) => {
      mydata = res.data;
      return mydata;
    });
  return mydata;
};

export const addBook = async (data: bookDataSent) => {
  await axios
    .post(`${backEndUrl}/api/books/`, data, { headers: headers })
    .then((res) => {});
};

export const removeBook = async (id: string) => {
  await axios.delete(`${backEndUrl}/api/books/${id}`, { headers: headers });
};

export const updateBook = async (id: string, data: bookDataSent) => {
  await axios.put(`${backEndUrl}/api/books/${id}`, data, { headers: headers });
};
export const searchBook = async (id: string) => {
  var mydata: bookData[] = [];
  await axios
    .get(`${backEndUrl}/api/books/search/${id}`, { headers: headers })
    .then((res) => {
      mydata = res.data;
      return mydata;
    });
  return mydata;
};
