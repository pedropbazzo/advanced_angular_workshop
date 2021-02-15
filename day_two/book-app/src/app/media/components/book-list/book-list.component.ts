import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { Observable, Subject } from 'rxjs';
import { BookDataService } from '../../services/book-data.service';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: [ './book-list.component.scss' ]
})
export class BookListComponent implements OnInit, OnDestroy {
    books$: Observable<Book[]>;
    books: Book[];
    destroy$: Subject<null> = new Subject<null>();

    constructor(private readonly bookDataService: BookDataService) {
    }

    ngOnInit(): void {
        this.books$ = this.bookDataService.getBooks().pipe(
            takeUntil(this.destroy$)
        );
    }

    ngOnDestroy(): void {
        this.destroy$.next(null);
    }
}
