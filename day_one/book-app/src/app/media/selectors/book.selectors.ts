import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMedia from '../reducers';
import * as fromBooks from '../reducers/book.reducer';
import { Book } from '../models/book';


export const selectMediaState = createFeatureSelector<fromMedia.State>(
    fromMedia.mediaFeatureKey
);

export const selectBooks = createSelector<fromBooks.State, any, Book[]>(
    selectMediaState,
    state => state.books
);

export const getBooks = createSelector<fromBooks.State, any, Book[]>(
    selectBooks,
    state => state.books
);

export const getError = createSelector<fromBooks.State, any, Book[]>(
    selectBooks,
    state => state.error
);

