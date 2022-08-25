import { Book } from './books.model';
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-book-collection',
  templateUrl: './books.collection.component.html',
  styleUrls: ['./books.collection.component.css'],
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> | null= [];
  @Output() remove = new EventEmitter<Book>();
}