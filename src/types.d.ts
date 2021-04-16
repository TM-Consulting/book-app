interface bookState {
  books: bookData[] | null;
}

interface bookData {
  readonly title: string;
  readonly description: string;
  readonly id: number;
  readonly created_at: string;
  readonly updated_at: string;
}

export { bookData, bookState };
