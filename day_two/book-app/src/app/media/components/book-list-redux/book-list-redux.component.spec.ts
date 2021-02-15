import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListReduxComponent } from './book-list-redux.component';

describe('BookListComponent', () => {
  let component: BookListReduxComponent;
  let fixture: ComponentFixture<BookListReduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListReduxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
