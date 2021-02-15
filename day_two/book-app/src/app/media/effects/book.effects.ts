import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as BookActions from '../actions/book.actions';
import { BookDataService } from '../services/book-data.service';
import { Book } from '../models/book';


@Injectable()
export class BookEffects {

    loadBooks$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BookActions.loadBooks),
            switchMap(() => this.bookDataService.getBooks().pipe(
                map((books: Book[]) => BookActions.loadBooksSuccess({books})),
                catchError(error => of(BookActions.loadBooksFailure({error})))
                )
            )
        );
    });


    constructor(private actions$: Actions, private readonly bookDataService: BookDataService) {
    }

}
