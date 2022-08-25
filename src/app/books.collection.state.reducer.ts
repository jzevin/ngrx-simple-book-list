import { Book } from './books.model';
import { createReducer, on } from '@ngrx/store';

import { addBook, removeBook } from './books.state.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksCollectionReducer = createReducer(
  initialState,
  on(removeBook, (state, {book}) => state.filter((id) => id !== book)),
  on(addBook, (state, book) => {
    if (state.find(b=>b.id===book.id)) return state;

    return [...state, book];
  })
);
