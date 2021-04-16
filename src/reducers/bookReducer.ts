import { ActionTypes } from "../actions/type";
import { bookState } from "../types";

const initialState: bookState = {
  books: null,
};

export default function (state: bookState = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.LIST_BOOK:
      return {
        books: action.payload,
      };

    default:
      return state;
  }
}
