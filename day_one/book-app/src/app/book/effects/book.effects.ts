import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as BookActions from '../actions/book.actions';


@Injectable()
export class BookEffects {

    loadBooks$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BookActions.loadBooks),
            concatMap(() => EMPTY
                /** An EMPTY observable only emits completion. Replace with your own observable API request */
            )
        );
    });


    constructor(private actions$: Actions) {
    }

}
