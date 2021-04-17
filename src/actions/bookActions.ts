import { bookData } from "../types";
import { ActionTypes } from "./type";

export const addBook = (payload: bookData) => {
  return {
    type: ActionTypes.ADD_BOOK,
    payload,
  };
};

export const addBooks = (payload: bookData[]) => {
    return {
      type: ActionTypes.ADD_BOOKS,
      payload,
    };
  };

export const ListBook = (payload: bookData[]) => {
    return {
      type: ActionTypes.LIST_BOOK,
      payload,
    };
  };
