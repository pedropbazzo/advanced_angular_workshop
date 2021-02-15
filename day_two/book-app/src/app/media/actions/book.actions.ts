import { createAction, props } from '@ngrx/store';
import { Book } from "../models/book";
import { HttpErrorResponse } from "@angular/common/http";

export const loadBooks = createAction(
    '[Book] Load Books'
);

export const loadBooksSuccess = createAction(
    '[Book] Load Books Success',
    props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
    '[Book] Load Books Failure',
    props<{ error: HttpErrorResponse }>()
);
