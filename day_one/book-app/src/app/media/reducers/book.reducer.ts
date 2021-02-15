import { createReducer, on } from '@ngrx/store';
import * as BookActions from '../actions/book.actions';
import { Book } from '../models/book';
import { HttpErrorResponse } from '@angular/common/http';

export const bookFeatureKey = 'media';

export interface State {
    books: Book[];
    loading: boolean;
    error: HttpErrorResponse;
}

export const initialState: State = {
    books: [],
    loading: false,
    error: null
};

export const reducer = createReducer(
    initialState,

    on(BookActions.loadBooks, state => ({...state, loading: true})),
    on(BookActions.loadBooksSuccess, (state, action) =>
        ({...state, books: action.books, loading: false, error: null})),
    on(BookActions.loadBooksFailure, (state, action) =>
        ({...state, error: action.error, loading: false})),
);

