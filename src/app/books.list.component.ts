import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './books.model';
 
@Component({
  selector: 'app-book-list',
  templateUrl: './books.list.component.html',
  styleUrls: ['./books.list.component.css'],
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> | null= [];
  @Output() add = new EventEmitter<Book>();
}