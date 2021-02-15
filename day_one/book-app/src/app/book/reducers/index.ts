import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';

import * as fromBooks from './book.reducer';

export const mediaFeatureKey = 'media';

export interface State {
    books: fromBooks.State;
}

export const reducers: ActionReducerMap<State> = {
    books: fromBooks.reducer,
};
