import { ActionTypes } from "../actions/type";
import { bookState } from "../types";

const initialState: bookState = {
  books: null,
};

const bookReducer = (state: bookState = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.LIST_BOOK:
      return {
        books: action.payload,
      };

    default:
      return state;
  }
};

export default bookReducer;
