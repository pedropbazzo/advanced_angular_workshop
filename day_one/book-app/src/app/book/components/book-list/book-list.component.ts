import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {EMPTY, forkJoin, iif, merge, Observable, of, Subject, Subscription} from 'rxjs';
import {BookDataService} from '../../services/book-data.service';
import {catchError, filter, retry, retryWhen, take, takeUntil} from "rxjs/operators";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
    books$: Observable<Book[]>;
    books: Book[];
    destroy$: Subject<null> = new Subject<null>();

    constructor(private readonly bookDataService: BookDataService) {
    }

    ngOnInit(): void {
        // this.store.dispatch(loadBooks);

        // this.books$ = this.store.select(getBooks);
    }

    ngOnDestroy(): void {
        this.destroy$.next(null);
    }
}
