import {Action, createReducer, on} from '@ngrx/store';
import * as BookActions from '../actions/book.actions';
import {Book} from '../models/book';

export const bookFeatureKey = 'book';

export interface State {
  books: Book[],
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false
};


export const reducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => state),
  on(BookActions.loadBooksSuccess, (state, action) => state),
  on(BookActions.loadBooksFailure, (state, action) => state),
);

