import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { BookCollectionComponent } from './books.collection.component';
import { booksCollectionReducer } from './books.collection.state.reducer';
import { BookListComponent } from './books.list.component';
import { booksReducer } from './books.state.reducer';

@NgModule({
  declarations: [
    AppComponent, BookListComponent, BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer, collection: booksCollectionReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
