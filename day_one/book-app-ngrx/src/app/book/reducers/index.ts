import {
  ActionReducerMap,
} from '@ngrx/store';

import * as fromBook from './book.reducer';

export const bookFeatureKey = 'book';

export interface State {
  books: fromBook.State;
}

export const reducers: ActionReducerMap<State> = {
  books: fromBook.reducer
};
