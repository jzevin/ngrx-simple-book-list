import { createReducer, on } from '@ngrx/store';

import { Book } from './books.model';
import { retrievedBookList } from './books.state.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);