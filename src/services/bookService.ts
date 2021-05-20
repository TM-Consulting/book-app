import axios from "axios";
import { bookData } from "../types";

const backEndUrl = process.env.REACT_APP_BACKEND_URL;

export const getAllBooks = async () => {
  var mydata: bookData[] = [];
  await axios
    .get(`${backEndUrl}/books`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
    })
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
    .get(`${backEndUrl}/auth/books/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
    })
    .then((res) => {
      mydata = res.data;
      return mydata;
    });
  return mydata;
};

export const addBook = async (data: FormData) => {
  console.log("urrrll", backEndUrl);
  await axios.post(`${backEndUrl}/auth/books/`, data, {
    onUploadProgress: (data) => {},

    headers: { Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
  });
};

export const removeBook = async (id: string) => {
  await axios.delete(`${backEndUrl}/auth/books/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
  });
};

export const updateBook = async (id: string, data: FormData) => {
  await axios.post(`${backEndUrl}/auth/books/${id}`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
  });
};
export const searchBook = async (id: string) => {
  var mydata: bookData[] = [];
  await axios
    .get(`${backEndUrl}/auth/books/search/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
    })
    .then((res) => {
      mydata = res.data;
      return mydata;
    });
  return mydata;
};
