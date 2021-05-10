interface globalState {
  readonly booksStateFE: bookState;
  readonly UsersStateFE: userState;
}
interface bookState {
  readonly books: bookData[] | [];
}
interface CurrentUser {
  email: string;
  name: string;
  isAuth: boolean;
  id: number;
}
interface userState {
  readonly user: CurrentUser | null;
}

interface UserData {
  readonly name: string;
  readonly email: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly id: number;
}
interface bookData {
  readonly title: string;
  readonly description: string;
  readonly image_id?: string;
  readonly id: number;
  readonly created_at?: string;
  readonly updated_at?: string;
}
interface bookDataSent {
  readonly title: string;
  readonly description: string;
  readonly image_id?: string;
}

export {
  bookData,
  bookState,
  globalState,
  bookDataSent,
  UserData,
  userState,
  CurrentUser,
};
