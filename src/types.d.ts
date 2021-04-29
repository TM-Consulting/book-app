interface globalState {
  readonly booksStateFE: bookState;
}
interface bookState {
  readonly books: bookData[] | [];
}

interface bookData {
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly id: number;
  readonly created_at?: string;
  readonly updated_at?: string;
}
interface bookDataSent {
  readonly title: string;
  readonly description: string;
  readonly image?: string;
}

export { bookData, bookState, globalState, bookDataSent };
