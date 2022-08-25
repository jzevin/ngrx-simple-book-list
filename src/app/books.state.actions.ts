import { Book } from './books.model';
import { createAction, props } from '@ngrx/store';
 
export const addBook = createAction(
  '[Book List] Add Book',
  props<Book>()
);
 
export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ book: Book }>()
);
 
export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ books: ReadonlyArray<Book> }>()
);