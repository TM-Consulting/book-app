import { initialState } from "../reducers/bookReducer";
import { createSelector } from "reselect";
import { bookState } from "../types";

const selectBookDomain = (state: bookState) => initialState;
const makeSelectBooks = () =>
  createSelector(selectBookDomain, (book) =>
    book && "books" in book ? book.books : []
  );

export { makeSelectBooks };
