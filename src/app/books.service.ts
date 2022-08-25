import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from './books.model';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient) {}
 
  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=angular%20javascript'
      )
      .pipe(map((books) => books.items || []), tap((books) => console.log(books)));
  }
}