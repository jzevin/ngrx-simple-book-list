import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Book } from './books.model';

export const booksSelector = createFeatureSelector<ReadonlyArray<Book>>('books');

export const collectionSelector =
  createFeatureSelector<ReadonlyArray<Book>>('collection');

export const bookCollectionSelector = createSelector(
  booksSelector,
  collectionSelector,
  (books, collection) => {
    return collection.map((book1) => books.find((book) => book.id === book1.id));
  }
);
