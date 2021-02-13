import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book';
import {Observable} from 'rxjs';
import {BookDataService} from '../../services/book-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private readonly bookDataService: BookDataService) { }

  ngOnInit(): void {
    this.books$ = this.bookDataService.getBooks();
  }
}
