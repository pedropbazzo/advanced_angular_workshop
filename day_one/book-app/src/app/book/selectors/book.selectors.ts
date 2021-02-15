import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromBook from '../reducers/book.reducer';
import {Book} from "../models/book";

export const selectBookState = createFeatureSelector<fromBook.State>(
    fromBook.bookFeatureKey
);

export const getBooks = createSelector<fromBook.State, any, Book[]>(
    selectBookState,
    state => state.books
);

