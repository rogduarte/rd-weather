import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { BookmarksPage } from './container/bookmarks/bookmarks.page';
import { bookmarkReducer } from './state/bookmarks.reducer';


@NgModule({
  declarations: [BookmarksPage,],
  imports: [
    CommonModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
    RouterModule
  ]
})
export class BookmarksModule { }
