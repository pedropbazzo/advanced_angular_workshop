import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadBooks } from '../../actions/book.actions';
import { getBooks } from '../../selectors/book.selectors';

@Component({
    selector: 'app-book-list-redux',
    templateUrl: './book-list-redux.component.html',
    styleUrls: [ './book-list-redux.component.scss' ]
})
export class BookListReduxComponent implements OnInit, OnDestroy {
    books$: Observable<Book[]>;
    books: Book[];
    destroy$: Subject<null> = new Subject<null>();

    constructor(private readonly store: Store) {
    }

    ngOnInit(): void {
        this.store.dispatch(loadBooks());

        this.books$ = this.store.select(getBooks);
    }

    ngOnDestroy(): void {
        this.destroy$.next(null);
    }
}
