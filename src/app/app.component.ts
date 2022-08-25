import { Book } from './books.model';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
 
import { collectionSelector, booksSelector } from './books.state.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook,
} from './books.state.actions';
import { GoogleBooksService } from './books.service';
 
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$ = this.store.select(booksSelector);
  bookCollection$ = this.store.select(collectionSelector);
 
  onAdd(book: Book) {
    this.store.dispatch(addBook(book));
  }
 
  onRemove(book: Book) {
    this.store.dispatch(removeBook({ book }));
  }
 
  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {}
 
  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }
}